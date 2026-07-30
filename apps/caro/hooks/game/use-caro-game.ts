"use client"

import { useState, useEffect, useRef } from "react"
import { useGameBoard } from "./use-game-board"
import { useGameConnection } from "./use-game-connection"
import { useGameRules } from "./use-game-rules"
import { useGameTimer } from "./use-game-timer"
import { useGameRoom } from "./use-game-room"
import type { GameState, SymbolPreference, SymbolMapping, EmojiMessage, GameScores } from "@/types/game-types"

export function useCaroGame() {
  // Game state
  const [gameState, setGameState] = useState<GameState>("initial")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isHost, setIsHost] = useState(false)
  const [isMyTurn, setIsMyTurn] = useState(false)
  const [winner, setWinner] = useState<string | null>(null)
  const [debugMode, setDebugMode] = useState(false)
  // Add these new states at the top of the component, with the other state declarations
  const [waitingForRestart, setWaitingForRestart] = useState(false)
  const [opponentWantsRestart, setOpponentWantsRestart] = useState(false)
  const [restartCountdown, setRestartCountdown] = useState(9)
  // Last move tracking
  const [lastMove, setLastMove] = useState<{ row: number; col: number } | null>(null)

  // Player information
  const [playerName, setPlayerName] = useState("")
  const [opponentName, setOpponentName] = useState("")

  // Symbol preferences (visual only)
  const [symbolPreference, setSymbol] = useState<SymbolPreference>("X")
  const [opponentSymbolPreference, setOpponentSymbolPreference] = useState<SymbolPreference>("O")
  const [symbolMapping, setSymbolMapping] = useState<SymbolMapping>({
    hostSymbol: "X",
    guestSymbol: "O",
  })

  // Track who goes first in the next game (alternating)
  const [hostGoesFirst, setHostGoesFirst] = useState(true)


  // Game scores
  const [scores, setScores] = useState<GameScores>({
    host: 0,
    guest: 0,
  })

  // Emoji messaging
  const [emojiMessage, setEmojiMessage] = useState<EmojiMessage | null>(null)

  // Victory effects
  const [showVictoryEffects, setShowVictoryEffects] = useState(false)

  const setSymbolPreference = (symbol: SymbolPreference) => {
    if (isHost) {
      if (symbol === "X") {
        setSymbolMapping({ hostSymbol: "X", guestSymbol: "O" })
        setSymbol("X")
        setOpponentSymbolPreference("O")
      } else {
        setSymbol("O")
        setOpponentSymbolPreference("X")
        setSymbolMapping({ hostSymbol: "O", guestSymbol: "X" })
      }
    }
    else {
      if (symbol === "X") {
        setSymbolMapping({ hostSymbol: "O", guestSymbol: "X" })
        setSymbol("X")
        setOpponentSymbolPreference("O")
      } else {
        setSymbol("O")
        setOpponentSymbolPreference("X")
        setSymbolMapping({ hostSymbol: "X", guestSymbol: "O" })
      }
    }
  }
  // Room management
  const { roomId, joinRoomId, setJoinRoomId, generateRoomId, copyRoomId } = useGameRoom()

  // Game board management
  const { board, setBoard, boardSize, setBoardSize, createEmptyBoard, makeMove, checkWinner, currentPlayerId } = useGameBoard()

  // Game rules management
  const { gameRules, toggleGameRule, setGameRules } = useGameRules()

  // Connection management
  const {
    peerConnection,
    dataChannel,
    connectionStatus,
    setConnectionStatus,
    setupPeerConnection,
    setupDataChannel,
    cleanupConnection,
    dataChannelRef
  } = useGameConnection()

  // Get my player ID based on host status
  const getMyPlayerId = () => (isHost ? "host" : "guest")

  // Get opponent player ID based on host status
  const getOpponentPlayerId = () => (isHost ? "guest" : "host")

  // Map player ID to symbol for display
  const mapPlayerToSymbol = (playerId: string) => {
    if (playerId === "host") {
      return symbolMapping.hostSymbol
    } else if (playerId === "guest") {
      return symbolMapping.guestSymbol
    }
    return null
  }

  useEffect(() => {
    const names = ['Alice', 'Bob', 'Charlie', 'Daisy', 'Ethan', 'Fiona'];
    const index = Math.floor(Math.random() * names.length);
    setPlayerName(names[index])
  }, []);

  // Get my symbol for display
  const getMySymbol = () => mapPlayerToSymbol(getMyPlayerId())

  // Get opponent symbol for display
  const getOpponentSymbol = () => mapPlayerToSymbol(getOpponentPlayerId())


  // Enhanced makeMove function that tracks the last move
  const handleMakeMove = (row: number, col: number, playerId: string, sendMove = true) => {
    // // // Nếu ô đã được đánh thì không làm gì cả
    if (board[row][col] != null) {
      console.warn("Ô này đã được đánh.")
      return
    }
    // Gọi hàm makeMove từ hook useGameBoard
    const result = makeMove(row, col, playerId, sendMove)
    // Lưu lại nước đi cuối
    setLastMove({ row, col })

    const hasWinner = checkWinner(board, row, col, playerId, gameRules)

    if (hasWinner) {
      setHostGoesFirst(!hostGoesFirst)
      setWinner(playerId)
      setMessage(`${mapPlayerToSymbol(playerId)} thắng trận!`)
      const nextPlayer = findNextPlayer(playerId)
      setIsMyTurn(nextPlayer === getMyPlayerId()) // cập nhật lượt
      stopTurnTimer()

      setScores((prev) => ({
        ...prev,
        [playerId]: prev[playerId as keyof GameScores] + 1,
      }))

      if (sendMove && dataChannelRef.current?.readyState === "open") {
        const moveData = {
          type: "move",
          row,
          col,
          playerId,
          nextPlayer: playerId,
          winner: playerId,
        }
        dataChannelRef.current.send(JSON.stringify(moveData))
        // Show victory effects
        setShowVictoryEffects(true)

        // Hide victory effects after 5 seconds
        setTimeout(() => {
          setShowVictoryEffects(false)
        }, 5000)
      }
    } else {
      // Nếu chưa có người thắng, tiếp tục game
      const nextPlayer = findNextPlayer(playerId)
      setIsMyTurn(nextPlayer === getMyPlayerId()) // cập nhật lượt
      startTurnTimer() // khởi động lại timer

      // Gửi dữ liệu nước đi qua dataChannel nếu cần
      if (sendMove && dataChannelRef.current?.readyState === "open") {
        const moveData = {
          type: "move",
          row,
          col,
          playerId,
          nextPlayer,
        }
        dataChannelRef.current.send(JSON.stringify(moveData))
      }
    }

    return result
  }


  // Timer management
  const { turnTimer, timerActive, setTurnTimerFactory, setTimerActive, startTurnTimer, stopTurnTimer, makeRandomMove, displayTimer } =
    useGameTimer(isMyTurn, winner, gameRules, board, gameState, currentPlayerId, handleMakeMove, getMyPlayerId())

  // References
  const boardRef = useRef(createEmptyBoard(boardSize))
  const connectionTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const boardSizeRef = useRef(boardSize)
  const restartTimerRef = useRef<NodeJS.Timeout | null>(null)

  const findNextPlayer = (currentPlayer: string) => {
    return currentPlayer === "host" ? "guest" : "host"
  }

  // Send emoji to opponent
  const sendEmoji = (emoji: string) => {
    if (dataChannel && dataChannel.readyState === "open") {
      try {
        dataChannel.send(
          JSON.stringify({
            type: "emoji",
            emoji,
            sender: getMyPlayerId(),
          }),
        )

        // Also display the emoji locally
        setEmojiMessage({
          emoji,
          sender: getMyPlayerId(),
        })
      } catch (err) {
        console.error("Error sending emoji:", err)
      }
    }
  }

  // Create a new room
  const createRoom = async () => {
    try {
      setError("")
      if (!playerName.trim()) {
        setError("Please enter your name")
        return
      }

      setGameState("creating")
      const newRoomId = generateRoomId()
      setIsHost(true)
      setIsMyTurn(true)
      setHostGoesFirst(true) // Host goes first in the first game

      // Reset scores
      setScores({
        host: 0,
        guest: 0,
      })
      // Set board size
      boardSizeRef.current = boardSize

      // Reset board with selected size
      const emptyBoard = createEmptyBoard(boardSize)
      boardRef.current = emptyBoard

      // Create room in Firebase and setup WebRTC connection
      await setupPeerConnection(
        newRoomId,
        true,
        playerName,
        boardSize,
        gameRules,
        setGameState,
        setMessage,
        setConnectionStatus,
        setOpponentName,
        startTurnTimer,
      )

      setMessage(`Room created! Share this code with your friend: ${newRoomId}`)
    } catch (error) {
      console.error("Error creating room:", error)
      setError("Failed to create room. Please try again.")
      setGameState("initial")
    }
  }

  useEffect(() => {
  }, [isMyTurn])

  // Join an existing room
  const joinRoom = async () => {
    try {
      setError("")
      if (!joinRoomId) {
        setError("Please enter a room code")
        return
      }

      if (!playerName.trim()) {
        setError("Please enter your name")
        return
      }
      // Reset scores
      setScores({
        host: 0,
        guest: 0,
      })
      setGameState("joining")
      setIsHost(false)
      setIsMyTurn(false)
      setSymbolPreference("O")
      setHostGoesFirst(true) // Host goes first in the first game
      // Join room and setup WebRTC connection
      const roomData = await setupPeerConnection(
        joinRoomId,
        false,
        playerName,
        boardSize,
        gameRules,
        setGameState,
        setMessage,
        setConnectionStatus,
        setOpponentName,
        startTurnTimer,
      )
      if (roomData) {
        // Set board size from room data
        const roomBoardSize = roomData.boardSize
        setBoardSize(roomBoardSize)
        boardSizeRef.current = roomBoardSize

        // Reset board with host's board size
        const emptyBoard = createEmptyBoard(roomBoardSize)
        boardRef.current = emptyBoard
        // Get game rules
        if (roomData.gameRules && !isHost) {
          setGameRules(roomData.gameRules)
          // Update game rules based on host's settings
        }
      }
      setMessage("Joining room... Establishing connection with host.")
    } catch (err) {
      console.error("Error while joining room:", err)
      setError("An unexpected error occurred. Please try again.")
      setGameState("initial")
    }
  }

  // Reset the game completely
  const resetGame = () => {
    // Clear timeout
    if (connectionTimeoutRef.current) {
      clearTimeout(connectionTimeoutRef.current)
      connectionTimeoutRef.current = null
    }

    // Stop timer
    stopTurnTimer()

    // Clean up WebRTC connection
    cleanupConnection(roomId)

    // Reset state
    setGameState("initial")
    setMessage("")
    setError("")
    setIsHost(false)
    setIsMyTurn(false)
    setWaitingForRestart(false)
    setOpponentWantsRestart(false)
    setRestartCountdown(9)
    setWinner(null)
    setConnectionStatus("Not connected")
    setOpponentName("")
    setLastMove(null) // Reset last move
    const emptyBoard = createEmptyBoard(boardSize)
    boardRef.current = emptyBoard
    setBoard(emptyBoard)
    setEmojiMessage(null) // Clear any emoji messages
    setShowVictoryEffects(false) // Hide victory effects
  }

  // Replace the restartGame function with this updated version
  // Restart the game but keep the connection
  const restartGame = () => {
    // If we're already waiting for restart, this means we're confirming
    if (opponentWantsRestart) {
      // Both players have confirmed restart, start new game
      confirmRestartGame()
      return
    }

    // Stop timer
    stopTurnTimer()

    // Set waiting state
    setWaitingForRestart(true)
    setMessage("Waiting for opponent to confirm restart...")

    // Notify other player about game restart request
    if (dataChannel && dataChannel.readyState === "open") {
      try {
        dataChannel.send(
          JSON.stringify({
            type: "restart_game_request",
          }),
        )
      } catch (err) {
        console.error("Error sending restart game request:", err)
      }
    }
  }

  const confirmRestartGame = () => {
    // Clear restart timer if it exists
    if (restartTimerRef.current) {
      clearInterval(restartTimerRef.current)
      restartTimerRef.current = null
    }
    const getnextTurn = () => {
      if (isHost) {
        if (!hostGoesFirst) return false
        return true
      }
      else {
        if (!hostGoesFirst) return true
        return false
      }
    }
    // Reset game state but keep connection
    const emptyBoard = createEmptyBoard(boardSizeRef.current)
    boardRef.current = emptyBoard
    setBoardSize(boardSizeRef.current)
    setBoard(emptyBoard)
    // Determine who goes first based on the alternating rule
    const myTurn = getnextTurn()

    setIsMyTurn(myTurn)

    setWinner(null)
    setLastMove(null) // Reset last move
    setWaitingForRestart(false)
    setOpponentWantsRestart(false)
    setRestartCountdown(9)
    setShowVictoryEffects(false) // Hide victory effects
    setEmojiMessage(null) // Clear any emoji messages
    setTimerActive(true)
    // Set message
    if (myTurn) {
      setMessage(`Your turn`)
      startTurnTimer()
    } else {
      setMessage(`${opponentName}'s turn`)
      // Set timer active but not my turn
      setTurnTimerFactory()
    }

    // Notify other player that we've confirmed restart
    if (dataChannel && dataChannel.readyState === "open") {
      try {
        dataChannel.send(
          JSON.stringify({
            type: "restart_game_confirm",
            hostGoesFirst: !hostGoesFirst, // Send the new state for next game
          }),
        )
      } catch (err) {
        console.error("Error sending restart game confirmation:", err)
      }
    }
  }

  // Handle incoming messages from data channel
  useEffect(() => {
    if (!dataChannel) return

    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data)
        if (data.type !== 'ping') {
          setTurnTimerFactory()
        }

        switch (data.type) {
          case "move":
            if (data.row !== undefined && data.col !== undefined && data.playerId) {
              handleMakeMove(data.row, data.col, data.playerId, false)
              setLastMove({ row: data.row, col: data.col })
              setIsMyTurn(true)
              startTurnTimer()
            }
            break

          case "restartGame":
            // Reset board
            const emptyBoard = createEmptyBoard(boardSizeRef.current)
            boardRef.current = emptyBoard
            setWinner(null)
            setLastMove(null)

            // Set turn based on host status (host goes first)
            setIsMyTurn(!isHost)

            if (isHost) {
              setMessage(`Your turn`)
              startTurnTimer()
            } else {
              setMessage(`Opponent's turn`)
              setTurnTimerFactory()
              setTimerActive(true)
            }
            break
          case "ping":
            // Just a keepalive ping, no action needed
            break
          case "timerSync":
            if (!isMyTurn && data.turnTimer !== undefined) {
              setTurnTimerFactory()
            }
            break
          // Inside the useEffect that handles dataChannel messages, add these cases to the switch statement:
          case "restart_game_request":
            // Opponent wants to restart
            setOpponentWantsRestart(true)
            setMessage("Opponent wants to play again. Click 'Play Again' or wait for countdown.")

            // Start countdown timer
            setRestartCountdown(9)
            if (restartTimerRef.current) {
              clearInterval(restartTimerRef.current)
            }

            restartTimerRef.current = setInterval(() => {
              setRestartCountdown((prev) => {
                const newValue = prev - 1
                if (newValue <= 0) {
                  // Time's up - auto confirm restart
                  confirmRestartGame()
                  return 0
                }
                return newValue
              })
            }, 1000)
            break

          case "restart_game_confirm":
            // Opponent has confirmed restart
            if (waitingForRestart) {
              confirmRestartGame()
            }
            break
          case "emoji":
            if (data.emoji && data.sender) {
              // Display the received emoji
              setEmojiMessage({
                emoji: data.emoji,
                sender: data.sender,
              })

              // Hide emoji after 5 seconds
              setTimeout(() => {
                console.log("Clearing emoji message")
                setEmojiMessage(null)
              }, 8000)
            }
            break
          default:
            break
        }
      } catch (err) {
        console.error("Error processing message:", err, event.data)
      }
    }

    dataChannel.addEventListener("message", handleMessage)

    return () => {
      dataChannel.removeEventListener("message", handleMessage)
    }
  }, [dataChannel, isMyTurn, makeMove, startTurnTimer, setTurnTimerFactory, setTimerActive, waitingForRestart, roomId,
    cleanupConnection,])

  // Set up periodic ping to keep connection alive
  useEffect(() => {
    let pingInterval: NodeJS.Timeout | undefined

    if (gameState === "playing" && dataChannel) {
      pingInterval = setInterval(() => {
        if (dataChannel.readyState === "open") {
          dataChannel.send(JSON.stringify({ type: "ping" }))
        }
      }, 30000) // Send ping every 30 seconds
    }

    return () => {
      if (pingInterval) {
        clearInterval(pingInterval)
      }
    }
  }, [gameState, dataChannel])

  // Toggle debug mode
  const toggleDebugMode = () => {
    setDebugMode(!debugMode)
  }

  // Handle beforeunload event to notify opponent when closing tab
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (gameState === "playing" && dataChannel && dataChannel.readyState === "open") {
        try {
          dataChannel.send(JSON.stringify({ type: "disconnect" }))
        } catch (err) {
          console.error("Error sending disconnect message:", err)
        }
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [gameState, dataChannel])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      // Clear timeout
      if (connectionTimeoutRef.current) {
        clearTimeout(connectionTimeoutRef.current)
      }
      // Clear restart timer
      if (restartTimerRef.current) {
        clearInterval(restartTimerRef.current)
      }

      // Stop timer
      stopTurnTimer()

      // Clean up WebRTC connection
      cleanupConnection(roomId)
    }
  }, [roomId, stopTurnTimer, cleanupConnection])

  return {
    roomId,
    joinRoomId,
    gameState,
    message,
    error,
    isHost,
    board,
    isMyTurn,
    winner,
    connectionStatus,
    debugMode,
    playerName,
    opponentName,
    boardSize,
    turnTimer,
    timerActive,
    dataChannel,
    symbolPreference,
    opponentSymbolPreference,
    setSymbolPreference,
    setOpponentSymbolPreference,
    getMySymbol,
    getOpponentSymbol,
    mapPlayerToSymbol,
    gameRules,
    lastMove, // Expose last move
    setJoinRoomId,
    setPlayerName,
    setBoardSize,
    toggleGameRule,
    createRoom,
    joinRoom,
    makeMove: handleMakeMove, // Use enhanced makeMove
    resetGame,
    restartGame,
    copyRoomId,
    toggleDebugMode,
    getMyPlayerId,
    getOpponentPlayerId,
    currentPlayerId,
    waitingForRestart,
    opponentWantsRestart,
    restartCountdown,
    confirmRestartGame,
    scores,
    sendEmoji,
    emojiMessage,
    showVictoryEffects,
    setTimerActive,
    startTurnTimer,
    stopTurnTimer,
    makeRandomMove,
    displayTimer
  }
}
