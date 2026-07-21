"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

interface GameConnectionProps {
  gameState: string
  message: string
  roomId: string
  connectionStatus: string
  debugMode: boolean
  playerName: string
  boardSize: number
  copyRoomId: () => void
  resetGame: () => void
  toggleDebugMode: () => void
}

export default function GameConnection({
  gameState,
  message,
  roomId,
  connectionStatus,
  debugMode,
  playerName,
  boardSize,
  copyRoomId,
  resetGame,
  toggleDebugMode,
}: GameConnectionProps) {
  return (
    <Card className="mb-6 animate-in fade-in duration-300">
      <CardHeader>
        <CardTitle>{gameState === "creating" ? "Creating Room" : "Joining Room"}</CardTitle>
        <CardDescription>{message}</CardDescription>
      </CardHeader>
      <CardContent>
        {gameState === "creating" && (
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono bg-muted p-2 rounded">{roomId}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={copyRoomId}
              className="transition-all hover:scale-110 active:scale-95"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="mb-4">
          <p className="text-sm">
            Your name: <span className="font-semibold">{playerName}</span>
          </p>
          {gameState === "creating" && (
            <p className="text-sm">
              Board size:{" "}
              <span className="font-semibold">
                {boardSize}x{boardSize}
              </span>
            </p>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
          <span className="text-sm text-muted-foreground">
            {gameState === "creating" ? "Waiting for player to join..." : "Connecting to game..."}
          </span>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          <p>Connection status: {connectionStatus}</p>
          <p className="mt-2">This may take a few moments. If it takes too long, try refreshing the page.</p>
        </div>

        {debugMode && (
          <div className="mt-4 p-2 bg-muted/30 rounded text-xs font-mono overflow-auto max-h-40">
            <p>Room ID: {roomId}</p>
            <p>Game State: {gameState}</p>
            <p>Connection Status: {connectionStatus}</p>
            <p>Player Name: {playerName}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={resetGame} className="transition-all hover:scale-105 active:scale-95">
          Cancel
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleDebugMode}
          className="transition-all hover:scale-105 active:scale-95"
        >
          {debugMode ? "Hide Debug" : "Show Debug"}
        </Button>
      </CardFooter>
    </Card>
  )
}
