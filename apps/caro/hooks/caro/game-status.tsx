"use client"

import { Button } from "@/components/ui/button"
import TimerDisplay from "@/components/caro/timer-display"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, RefreshCw, Home, Settings, WifiOff } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import type { SymbolPreference, GameScores } from "@/types/game-types"

interface GameStatusProps {
  gameState: string
  message: string
  connectionStatus: string
  isMyTurn: boolean
  playerName: string
  opponentName: string
  mySymbol: SymbolPreference
  opponentSymbol: SymbolPreference
  setMySymbol: (symbol: SymbolPreference) => void
  setOpponentSymbol: (symbol: SymbolPreference) => void
  turnTimer: number
  timerActive: boolean
  winner: string | null
  resetGame: () => void
  restartGame: () => void
  debugMode: boolean,
  currentPlayerId: string
  board: string[][]
  makeMove: (row: number, col: number, playerId: string, snedmove: boolean) => void
  myPlayerId: string
  waitingForRestart: boolean
  opponentWantsRestart: boolean
  restartCountdown: number
  scores: GameScores | any
  opponentPlayerId: string
  displayTimer: number
}

export function GameStatus({
  gameState,
  message,
  connectionStatus,
  isMyTurn,
  playerName,
  opponentName,
  mySymbol,
  opponentSymbol,
  setMySymbol,
  setOpponentSymbol,
  turnTimer,
  timerActive,
  winner,
  resetGame,
  restartGame,
  debugMode,
  currentPlayerId,
  board,
  makeMove,
  myPlayerId,
  waitingForRestart,
  opponentWantsRestart,
  restartCountdown,
  scores,
  opponentPlayerId,
  displayTimer
}: GameStatusProps) {

  const [showSettings, setShowSettings] = useState(false)
  return (
    <div className="w-full max-w-lg mx-auto p-6 space-y-4">
      <div className="flex flex-row flex-wrap sm:flex-nowrap justify-between items-start sm:items-center gap-2">

        {/* Game state and connection status */}
        {gameState === "playing" && !winner && (
          <div className="flex justify-end space-x-2">
            <Button onClick={resetGame} variant="outline" size="sm" className="text-red-600">
              Quit Game
            </Button>
          </div>
        )}

        {debugMode && <div className="text-xs text-gray-500">Connection: {connectionStatus}</div>}
        <div className="flex justify-end space-x-2">
          <div>
            <Badge variant={gameState === "playing" ? "default" : "outline"}>
              {gameState === "initial" && "Ready to Play"}
              {gameState === "creating" && "Creating Game..."}
              {gameState === "joining" && "Joining Game..."}
              {gameState === "playing" && "Game in Progress"}
            </Badge>
          </div>

        </div>
      </div>

      {/* Symbol preferences settings */}
      {gameState === "playing" && (
        <div className="mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSettings(!showSettings)}
            className="w-full flex items-center justify-center gap-2"
          >
            <Settings className="h-4 w-4" />
            {showSettings ? "Hide Symbol Settings" : "Change Symbol Display"}
          </Button>

          {showSettings && (
            <div className="mt-3 p-3 border rounded-md">
              <div className="mb-3">
                <Label className="text-sm font-medium">Your Symbol Display</Label>
                <RadioGroup
                  value={mySymbol}
                  onValueChange={(value) => setMySymbol(value as SymbolPreference)}
                  className="flex space-x-4 mt-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="X" id="my-symbol-x" />
                    <Label htmlFor="my-symbol-x" className="text-blue-600 font-bold">
                      X
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="O" id="my-symbol-o" />
                    <Label htmlFor="my-symbol-o" className="text-red-600 font-bold">
                      O
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                These settings only affect how the game appears on your screen. They don't change the actual game state.
              </p>
            </div>
          )}
        </div>
      )}

      {gameState === "playing" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className={`p-3 rounded-md ${isMyTurn && !winner
              ? "bg-blue-100 border border-white border-blue-700 dark:bg-blue-950 dark:border-blue-800"
              : "bg-gray-100 border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
              }`}
          >
            <div className="font-medium text-gray-900 dark:text-gray-100">You</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">{playerName}   <span
              className={`ml-1 font-bold ${mySymbol === "X"
                ? "text-blue-600 dark:text-blue-400"
                : "text-red-600 dark:text-red-400"
                }`}
            >
              ({mySymbol})
            </span>
              <div className="text-sm font-semibold">
                {scores[myPlayerId]} wins
              </div>
            </div>
          </div>

          <div
            className={`p-3 rounded-md ${!isMyTurn && !winner
              ? "bg-blue-100 border border-white border-blue-700 dark:bg-blue-950 dark:border-blue-800"
              : "bg-gray-100 border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
              }`}
          >
            <div className="font-medium text-gray-900 dark:text-gray-100">Opponent</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">{opponentName || "Waiting..."}   <span
              className={`ml-1 font-bold ${opponentSymbol === "X"
                ? "text-blue-600 dark:text-blue-400"
                : "text-red-600 dark:text-red-400"
                }`}
            >
              ({opponentSymbol})
            </span>
              <div className="text-sm font-semibold">
                {scores[opponentPlayerId]} wins
              </div>
            </div>
          </div>
        </div>
      )}

      {gameState === "playing" && !winner && (
        <div className={`mb-4 ${isMyTurn ? 'bg-blue-100 dark:bg-blue-900 rounded-md' : ''}`}>
          <TimerDisplay
          displayTimer={displayTimer}
            timerActive={timerActive}
            isMyTurn={isMyTurn}
            opponentName={opponentName}
          />
        </div>
      )}

      {(winner || waitingForRestart || opponentWantsRestart) && (
        <div className="text-center p-4 bg-yellow-100 border border-white dark:bg-yellow-900 dark:border-yellow-700 rounded-md">
          {winner && (
            <div className="font-bold text-lg mb-2">
              {winner === myPlayerId ? "🎉 You Won! 🎉" : "Game Over - You Lost"}
            </div>
          )}
          {waitingForRestart && (
            <div className="mb-2">
              <p className="font-medium text-gray-900 dark:text-gray-100">Waiting for opponent to confirm...</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">You'll be notified when they're ready</p>
            </div>
          )}

          {opponentWantsRestart && (
            <div className="mb-2">
              <p className="font-medium text-gray-900 dark:text-gray-100">Opponent wants to play again</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Auto-confirming in <span className="font-bold text-amber-600">{restartCountdown}</span> seconds
              </p>
            </div>
          )}

          <div className="flex justify-center space-x-2 mt-2">
            <Button onClick={restartGame} size="sm" disabled={waitingForRestart}>
              <RefreshCw className="h-4 w-4 mr-2" />
              {opponentWantsRestart ? "Confirm" : "Play Again"}
            </Button>
            <Button onClick={resetGame} variant="outline" size="sm">
              <Home className="h-4 w-4 mr-2" />
              New Game
            </Button>
          </div>
        </div>
      )}

      {/* Connection warning */}
      {gameState === "playing" &&
        connectionStatus !== "Connection: connected" &&
        connectionStatus !== "ICE connection: connected" &&
        connectionStatus !== "ICE connection: completed" &&
        (
          <div className="flex items-center p-3 bg-amber-50 text-amber-700 rounded-md">
            <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="text-sm">Connection may be unstable. If the game freezes, try refreshing the page.</span>
          </div>
        )}
    </div>
  )
}
