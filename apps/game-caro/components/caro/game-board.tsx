"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GameBoardProps {
  board: (string | null)[][]
  isMyTurn: boolean
  makeMove: (row: number, col: number, playerId: string, sendMove: boolean) => void
  myPlayerId: string
  mapPlayerToSymbol: (playerId: string) => string | null
  winner: string | null
  gameState: string
  boardSize: number
  lastMove: { row: number; col: number } | null
  symbolPreference: string
  opponentSymbolPreference: string
}

export function GameBoard({
  board,
  isMyTurn,
  makeMove,
  myPlayerId,
  mapPlayerToSymbol,
  winner,
  gameState,
  boardSize,
  lastMove,
}: GameBoardProps) {
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null)
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Responsive cell size based on board size and screen width
  const calculateCellSize = () => {
    const sidePadding = windowWidth < 640 ? 20 : windowWidth < 1024 ? 60 : 120
    const maxWidth = windowWidth - sidePadding
    const maxCellSize = 40
    return Math.min(maxCellSize, Math.floor(maxWidth / boardSize))
  }

  const cellSize = calculateCellSize()
  const fontSize = cellSize * 0.7

  const handleCellClick = (row: number, col: number) => {
    if (gameState !== "playing" || !isMyTurn || board[row][col] !== null || winner) return
    makeMove(row, col, myPlayerId, true)
  }

  const handleMouseEnter = (row: number, col: number) => {
    if (gameState === "playing" && isMyTurn && board[row][col] === null && !winner) {
      setHoveredCell({ row, col })
    }
  }

  const handleMouseLeave = () => setHoveredCell(null)
  const handleTouchStart = handleMouseEnter
  const handleTouchEnd = handleMouseLeave

  const isLastMove = (row: number, col: number) =>
    lastMove && lastMove.row === row && lastMove.col === col

  const getSymbolColor = (playerId: string) => {
    const symbol = mapPlayerToSymbol(playerId)
    return symbol === "X" ? "text-blue-600" : "text-red-600"
  }

  const getLastMoveBackground = (playerId: string) => {
    const symbol = mapPlayerToSymbol(playerId)
    return symbol === "X" ? "bg-blue-50" : "bg-red-50"
  }

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-auto">
      <div
        className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-md"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${boardSize}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${boardSize}, ${cellSize}px)`,
          gap: "1px",
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={cn(
                "flex items-center justify-center border border-gray-200 dark:border-gray-800 transition-all duration-300",
                {
                  "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700":
                    gameState === "playing" && isMyTurn && cell === null && !winner,
                  "bg-gray-50 dark:bg-gray-800":
                    hoveredCell?.row === rowIndex && hoveredCell?.col === colIndex,
                  [getLastMoveBackground(cell || "")]:
                    isLastMove(rowIndex, colIndex) && cell !== null,
                }
              )}
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
                fontSize: `${fontSize}px`,
                boxShadow: isLastMove(rowIndex, colIndex)
                  ? "inset 0 0 0 2px rgba(59, 130, 246, 0.5)"
                  : "none",
              }}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleTouchStart(rowIndex, colIndex)}
              onTouchEnd={handleTouchEnd}
            >
              {cell && (
                <span className={cn("font-bold", getSymbolColor(cell))}>
                  {mapPlayerToSymbol(cell)}
                </span>
              )}
              {cell === null &&
                hoveredCell?.row === rowIndex &&
                hoveredCell?.col === colIndex &&
                isMyTurn && (
                  <span className="text-gray-400 dark:text-gray-500 opacity-50">
                    {mapPlayerToSymbol(myPlayerId)}
                  </span>
                )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
