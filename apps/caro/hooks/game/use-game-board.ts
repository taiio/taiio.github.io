"use client"

import { useState, useCallback, useEffect } from "react"
import type { GameRule } from "@/types/game-types"

// Define createEmptyBoard first, before using it
const createEmptyBoard = (size: number) => {
  const newBoard = []
  for (let i = 0; i < size; i++) {
    newBoard.push(Array(size).fill(null))
  }
  return newBoard
}

export function useGameBoard() {
  const [boardSize, setBoardSize] = useState(15)
  const [board, setBoard] = useState(() => createEmptyBoard(boardSize))
  const [currentPlayerId, setCurrentPlayerId] = useState("host") // Changed from X/O to host/guest

  useEffect(() => {
    setBoard(createEmptyBoard(boardSize));
  }, [boardSize]);

  // Make a move on the board
  const makeMove = useCallback(
    (row: number, col: number, playerId: string, sendMove = true) => {
      // Create a deep copy of the board
      const newBoard = JSON.parse(JSON.stringify(board))
      newBoard[row][col] = playerId // Store player ID instead of symbol
      setBoard(newBoard)
      // Switch player
      const nextPlayerId = playerId === "host" ? "guest" : "host" // Toggle between host and guest
      setCurrentPlayerId(nextPlayerId)
      return { newBoard, nextPlayerId }
    },
    [board],
  )

  // Check for winner based on game rules
  const checkWinner = useCallback(
    (board: (string | null)[][], row: number, col: number, playerId: string, gameRules: GameRule[]): boolean => {
      const directions = [
        [0, 1], // horizontal
        [1, 0], // vertical
        [1, 1], // diagonal down-right
        [1, -1], // diagonal down-left
      ]

      const size = board.length
      const fiveInRowRule = gameRules.find((rule) => rule.id === "rule_five_in_row")?.enabled ?? true
      const overlinesRule = gameRules.find((rule) => rule.id === "rule_overlines")?.enabled ?? true

      for (const [dx, dy] of directions) {
        let count = 1
        const blocked = [false, false]

        // Forward direction
        let i = 1
        while (i < 5) {
          const newRow = row + i * dx
          const newCol = col + i * dy
          if (newRow < 0 || newRow >= size || newCol < 0 || newCol >= size) break
          if (board[newRow][newCol] === playerId) {
            count++
            i++
          } else {
            break
          }
        }

        // Check next cell after sequence (forward)
        let checkRow = row + i * dx
        let checkCol = col + i * dy
        while (checkRow >= 0 && checkRow < size && checkCol >= 0 && checkCol < size) {
          if (board[checkRow][checkCol] === null) {
            checkRow += dx
            checkCol += dy
            continue
          } else if (board[checkRow][checkCol] !== playerId) {
            blocked[0] = true
          }
          break
        }

        // Backward direction
        i = 1
        while (i < 5) {
          const newRow = row - i * dx
          const newCol = col - i * dy
          if (newRow < 0 || newRow >= size || newCol < 0 || newCol >= size) break
          if (board[newRow][newCol] === playerId) {
            count++
            i++
          } else {
            break
          }
        }

        // Check next cell after sequence (backward)
        checkRow = row - i * dx
        checkCol = col - i * dy
        while (checkRow >= 0 && checkRow < size && checkCol >= 0 && checkCol < size) {
          if (board[checkRow][checkCol] === null) {
            checkRow -= dx
            checkCol -= dy
            continue
          } else if (board[checkRow][checkCol] !== playerId) {
            blocked[1] = true
          }
          break
        }

        // Check win condition based on rules
        if (fiveInRowRule && count === 5) {
          return true
        }

        if (overlinesRule && count > 5) {
          return true
        }

        // If overlines are not allowed, exactly 5 in a row is required
        if (!overlinesRule && count > 5) {
          continue
        }

        // If five in a row rule is enabled and we have 5 in a row
        if (fiveInRowRule && count === 5) {
          return true
        }
      }

      return false
    },
    [],
  )

  return {
    board,
    setBoard,
    boardSize,
    setBoardSize,
    currentPlayerId,
    setCurrentPlayerId,
    createEmptyBoard,
    makeMove,
    checkWinner,
  }
}
