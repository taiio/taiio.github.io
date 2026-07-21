"use client"

import { useState, useRef, useCallback } from "react"
import { database } from "@/lib/firebase"
import { ref, set, onValue, remove, get, off, update } from "firebase/database"
import type { GameRule, GameState } from "@/types/game-types"

// Debug logging function
const logDebug = (message: string, data: any = null) => {
  const timestamp = new Date().toISOString()
  if (data) {
    console.log(`[${timestamp}] ${message}`, data)
  } else {
    console.log(`[${timestamp}] ${message}`)
  }
}

export function useGameConnection() {
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null)
  const [dataChannel, setDataChannel] = useState<RTCDataChannel | null>(null)
  const [connectionStatus, setConnectionStatus] = useState("Not connected")

  // Use refs to store ICE candidates before remote description is set
  const pendingCandidatesRef = useRef<RTCIceCandidate[]>([])
  const remoteDescriptionSetRef = useRef(false)
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null)
  const dataChannelRef = useRef<RTCDataChannel | null>(null)

  // Setup peer connection
  const setupPeerConnection = useCallback(
    async (
      roomId: string,
      isCreator: boolean,
      playerName: string,
      boardSize: number,
      gameRules: GameRule[],
      setGameState: (state: GameState) => void,
      setMessage: (message: string) => void,
      setConnectionStatus: (status: string) => void,
      setOpponentName: (name: string) => void,
      startTurnTimer: () => void,
    ) => {
      remoteDescriptionSetRef.current = false
      pendingCandidatesRef.current = []
      let roomData: any = null

      if (isCreator) {
        // Create room in Firebase first
        await set(ref(database, `rooms/${roomId}`), {
          created: Date.now(),
          status: "waiting",
          hostConnected: false,
          peerConnected: false,
          hostName: playerName,
          boardSize: boardSize,
          gameRules: gameRules,
        })

        logDebug(`Room ${roomId} created in Firebase`)
      } else {
        // Check if room exists first
        const roomRef = ref(database, `rooms/${roomId}`)
        const roomSnapshot = await get(roomRef)

        if (!roomSnapshot.exists()) {
          throw new Error("Room not found")
        }

        roomData = roomSnapshot.val()
        logDebug(`Room ${roomId} found, status:`, roomData)

        setOpponentName(roomData.hostName)

        // Update room status and add peer name
        await update(ref(database, `rooms/${roomId}`), {
          status: "peer_joining",
          peerName: playerName,
        })

      }

      // Create peer connection
      const pc = createPeerConnection(
        roomId,
        isCreator,
        setGameState,
        setMessage,
        setConnectionStatus,
        setOpponentName,
        startTurnTimer,
      )

      setPeerConnection(pc)
      peerConnectionRef.current = pc

      if (isCreator) {
        // Create data channel
        const dc = pc.createDataChannel("game")
        setupDataChannel(dc, roomId, isCreator, setGameState, setMessage, setConnectionStatus)
        dataChannelRef.current = dc
        logDebug("Data channel created")

        try {
          // Create offer
          logDebug("Creating offer...")
          const offer = await pc.createOffer()
          await pc.setLocalDescription(offer)
          logDebug("Local description set", offer)

          // Save offer to Firebase
          await set(ref(database, `rooms/${roomId}/offer`), {
            type: offer.type,
            sdp: offer.sdp,
          })
          logDebug("Offer saved to Firebase")

          // Update room status
          await update(ref(database, `rooms/${roomId}`), {
            status: "waiting_for_peer",
          })

          // Set a cleanup function for the room after 1 hour if no one joins
          setTimeout(() => {
            get(ref(database, `rooms/${roomId}/answer`)).then((snapshot) => {
              if (!snapshot.exists()) {
                remove(ref(database, `rooms/${roomId}`))
              }
            })
          }, 3600000) // 1 hour

          // Listen for answer
          const answerRef = ref(database, `rooms/${roomId}/answer`)
          onValue(answerRef, async (snapshot) => {
            const data = snapshot.val()
            if (data) {
              logDebug("Got answer from remote", data)
              try {
                if (pc.signalingState !== "closed" && pc.signalingState !== "stable") {
                  await pc.setRemoteDescription(new RTCSessionDescription(data))
                  logDebug("Remote description set")
                  remoteDescriptionSetRef.current = true
                  setConnectionStatus("Remote description set, processing candidates...")

                  // Process any pending ICE candidates
                  if (pendingCandidatesRef.current.length > 0) {
                    logDebug(`Processing ${pendingCandidatesRef.current.length} pending ICE candidates`)
                    for (const candidate of pendingCandidatesRef.current) {
                      try {
                        await pc.addIceCandidate(candidate)
                        logDebug("Added pending ICE candidate")
                      } catch (err) {
                        console.error("Error adding pending ICE candidate:", err)
                      }
                    }
                    pendingCandidatesRef.current = []
                  }

                  // Update room status
                  await update(ref(database, `rooms/${roomId}`), {
                    status: "connecting",
                    hostProcessedAnswer: true,
                  })
                } else {
                  logDebug("Skipping setRemoteDescription, signaling state:", pc.signalingState)
                }
              } catch (error) {
                console.error("Error setting remote description:", error)
                setConnectionStatus("Failed to set remote description")
              }
            }
          })

          // Listen for ICE candidates from the other peer
          const calleeCandidatesRef = ref(database, `rooms/${roomId}/calleeCandidates`)
          onValue(calleeCandidatesRef, (snapshot) => {
            const data: any[] = snapshot.val()
            if (data) {
              Object.values(data).forEach(async (candidate) => {
                logDebug("Received ICE candidate from remote", candidate)
                if (remoteDescriptionSetRef.current) {
                  try {
                    await pc.addIceCandidate(new RTCIceCandidate(candidate))
                    logDebug("Added ICE candidate from remote")
                  } catch (error) {
                    console.error("Error adding ICE candidate:", error)
                  }
                } else {
                  logDebug("Storing ICE candidate for later")
                  pendingCandidatesRef.current.push(new RTCIceCandidate(candidate))
                }
              })
            }
          })
        } catch (error) {
          console.error("Error creating offer:", error)
          pc.close()
          remove(ref(database, `rooms/${roomId}`))
          throw error
        }
      } else {
        console.log("Joining peer, waiting for offer...")
        try {
          // Get offer from Firebase using get()
          const offerRef = ref(database, `rooms/${roomId}/offer`)

          const offerSnapshot = await get(offerRef)

          const data = offerSnapshot.val()

          logDebug("Got offer from Firebase", data)

          if (!data) {
            throw new Error("Room offer not found")
          }

          // Set remote description
          logDebug("Setting remote description...")
          await pc.setRemoteDescription(new RTCSessionDescription(data))
          logDebug("Remote description set")
          remoteDescriptionSetRef.current = true
          setConnectionStatus("Remote description set, creating answer...")

          // Process any pending ICE candidates
          if (pendingCandidatesRef.current.length > 0) {
            logDebug(`Processing ${pendingCandidatesRef.current.length} pending ICE candidates`)
            for (const candidate of pendingCandidatesRef.current) {
              try {
                await pc.addIceCandidate(candidate)
                logDebug("Added pending ICE candidate")
              } catch (err) {
                console.error("Error adding pending ICE candidate:", err)
              }
            }
            pendingCandidatesRef.current = []
          }

          // Create answer
          logDebug("Creating answer...")
          const answer = await pc.createAnswer()
          await pc.setLocalDescription(answer)
          logDebug("Local description set", answer)

          // After saving answer to Firebase, add a verification step
          await set(ref(database, `rooms/${roomId}/answer`), {
            type: answer.type,
            sdp: answer.sdp,
            timestamp: Date.now(), // Add timestamp to ensure Firebase triggers an update
          })
          logDebug("Answer saved to Firebase")

          // Update room status
          await update(ref(database, `rooms/${roomId}`), {
            status: "connecting",
          })

          // Listen for ICE candidates from the other peer
          const callerCandidatesRef = ref(database, `rooms/${roomId}/callerCandidates`)
          onValue(callerCandidatesRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
              Object.values(data).forEach(async (candidate: any) => {
                logDebug("Received ICE candidate from remote", candidate)
                if (remoteDescriptionSetRef.current) {
                  try {
                    await pc.addIceCandidate(new RTCIceCandidate(candidate))
                    logDebug("Added ICE candidate from remote")
                  } catch (error) {
                    console.error("Error adding ICE candidate:", error)
                  }
                } else {
                  logDebug("Storing ICE candidate for later")
                  pendingCandidatesRef.current.push(new RTCIceCandidate(candidate))
                }
              })
            }
          })
        } catch (error) {
          console.error("Error during WebRTC signaling:", error)
          pc.close()
          throw error
        }
      }
      return roomData
    },
    [],
  )

  // Create a peer connection
  const createPeerConnection = (
    roomId: string,
    isCreator: boolean,
    setGameState: (state: GameState) => void,
    setMessage: (message: string) => void,
    setConnectionStatus: (status: string) => void,
    setOpponentName: (name: string) => void,
    startTurnTimer: () => void,
  ) => {
    // STUN and TURN server configuration
    const configuration: RTCConfiguration = {
      iceServers: [
        {
          urls: "turn:global.relay.metered.ca:80?transport=tcp",
          username: "a497ecb3de46ea48c9890efb",
          credential: "22SI8daINmoUfpUA",
        },
        {
          urls: "turn:global.relay.metered.ca:443?transport=tcp",
          username: "a497ecb3de46ea48c9890efb",
          credential: "22SI8daINmoUfpUA",
        },
        {
          urls: "turns:global.relay.metered.ca:443?transport=tcp",
          username: "a497ecb3de46ea48c9890efb",
          credential: "22SI8daINmoUfpUA",
        },
      ],
      iceCandidatePoolSize: 10,
      iceTransportPolicy: "relay",
    }

    logDebug("Creating peer connection with config:", configuration)
    const pc = new RTCPeerConnection(configuration)

    // Handle ICE candidates
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        logDebug("Generated ICE candidate", event.candidate)
        const path = `rooms/${roomId}/${isCreator ? "callerCandidates" : "calleeCandidates"}/${Date.now()}`
        set(ref(database, path), event.candidate.toJSON())
      }
    }

    // Handle ICE gathering state changes
    pc.onicegatheringstatechange = () => {
      logDebug("ICE gathering state:", pc.iceGatheringState)
      setConnectionStatus(`ICE gathering: ${pc.iceGatheringState}`)
    }

    // Handle ICE connection state changes
    pc.oniceconnectionstatechange = async () => {
      logDebug("ICE connection state:", pc.iceConnectionState)
      setConnectionStatus(`ICE connection: ${pc.iceConnectionState}`)

      if (pc.iceConnectionState === "connected" || pc.iceConnectionState === "completed") {
        // Update Firebase with our connection status immediately
        await update(ref(database, `rooms/${roomId}`), {
          [isCreator ? "hostConnected" : "peerConnected"]: true,
          status: isCreator ? "host_connected" : "peer_connected",
        })

        // Check if both sides are connected
        const roomSnapshot = await get(ref(database, `rooms/${roomId}`))
        const roomData = roomSnapshot.val()
        if (roomData) {
          if (isCreator && roomData.peerConnected) {
            setGameState("playing")
            setOpponentName(roomData.peerName)
            setMessage("")
            console.log("Both sides connected, starting game", isCreator,startTurnTimer)
          } else if (!isCreator && roomData.hostConnected) {
            setOpponentName(roomData.hostName)
            setGameState("playing")
            setMessage("")
          }
        }
      }
    }

    // Handle signaling state changes
    pc.onsignalingstatechange = () => {
      logDebug("Signaling state:", pc.signalingState)
    }

    // Handle connection state changes
    pc.onconnectionstatechange = async () => {
      logDebug("Connection state:", pc.connectionState)
      setConnectionStatus(`Connection: ${pc.connectionState}`)

      if (pc.connectionState === "connected") {
        logDebug("WebRTC connection established!")

        // Update Firebase with our connection status
        await update(ref(database, `rooms/${roomId}`), {
          [isCreator ? "hostConnected" : "peerConnected"]: true,
          status: "connected",
        })
      }
    }

    // Handle data channel (for the joining peer)
    if (!isCreator) {
      pc.ondatachannel = (event) => {
        logDebug("Data channel received")
        setupDataChannel(event.channel, roomId, isCreator, setGameState, setMessage, setConnectionStatus)
        dataChannelRef.current = event.channel
      }
    }

    return pc
  }

  // Setup data channel
  const setupDataChannel = (
    channel: RTCDataChannel,
    roomId: string,
    isHost: boolean,
    setGameState: (state: GameState) => void,
    setMessage: (message: string) => void,
    setConnectionStatus: (status: string) => void,
  ) => {
    channel.onopen = async () => {
      logDebug("Data channel is open")

      // When data channel opens, this is another signal that connection is established
      if (roomId) {
        await update(ref(database, `rooms/${roomId}`), {
          [isHost ? "hostConnected" : "peerConnected"]: true,
          dataChannelOpen: true,
        })
      }
    }

    channel.onclose = () => {
      logDebug("Data channel closed")
    }

    channel.onerror = (error) => {
      console.error("Data channel error:", error)
    }

    channel.onmessage = (event) => {
      try {
        logDebug("Received message:", event.data)
        
      } catch (err) {
        console.error("Error processing message:", err, event.data)
      }
    }

    setDataChannel(channel)
    dataChannelRef.current = channel
  }

  // Clean up WebRTC connection
  const cleanupConnection = useCallback((roomId: string) => {
    // Clean up Firebase
    if (roomId) {
      // Remove listeners first
      off(ref(database, `rooms/${roomId}/callerCandidates`))
      off(ref(database, `rooms/${roomId}/calleeCandidates`))
      off(ref(database, `rooms/${roomId}/offer`))
      off(ref(database, `rooms/${roomId}/answer`))
      off(ref(database, `rooms/${roomId}`))

      // Then remove data
      remove(ref(database, `rooms/${roomId}`))
    }

    // Close peer connection
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close()
      peerConnectionRef.current = null
    }

    // Close data channel
    if (dataChannelRef.current) {
      dataChannelRef.current.close()
      dataChannelRef.current = null
    }
  }, [])

  return {
    peerConnection,
    dataChannel,
    connectionStatus,
    setConnectionStatus,
    setupPeerConnection,
    setupDataChannel,
    cleanupConnection,
    dataChannelRef,
  }
}
