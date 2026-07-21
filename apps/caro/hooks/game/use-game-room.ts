"use client"

import { useState, useCallback } from "react"

export function useGameRoom() {
  const [roomId, setRoomId] = useState("")
  const [joinRoomId, setJoinRoomId] = useState("")

  // Generate a random room ID
  const generateRoomId = useCallback(() => {
    const newRoomId = Math.floor(100000 + Math.random() * 900000).toString() // Generates a 6-digit number
    setRoomId(newRoomId)
    return newRoomId
  }, [])

  // Copy room ID to clipboard
  const copyRoomId = useCallback(() => {
    navigator.clipboard.writeText(roomId)
    return roomId
  }, [roomId])

  return {
    roomId,
    setRoomId,
    joinRoomId,
    setJoinRoomId,
    generateRoomId,
    copyRoomId,
  }
}
