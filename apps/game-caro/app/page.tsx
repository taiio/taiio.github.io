"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useCaroGame } from "@/hooks/game/use-caro-game"
import { GameBoard } from "@/components/caro/game-board"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { GameCreation } from "@/components/caro/game-creation"
import { GameStatus } from "@/components/caro/game-status"
import { Loader2 } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Copy } from "lucide-react"
import EmojiSelector from "@/components/caro/emoji-selector"
import EmojiDisplay from "@/components/caro/emoji-display"
import VictoryEffects from "@/components/caro/victory-effects"
import DefeatEffects from "@/components/caro/defeat-effects"

export default function CaroGame() {
  const [isMounted, setIsMounted] = useState(false)
  const game = useCaroGame()
  const [showDefeat, setShowDefeat] = useState(false)

  // Hiển thị hiệu ứng thua cuộc
  useEffect(() => {
    if (game.winner) {
      setShowDefeat(true) // Mỗi khi thua, hiển thị emoji

      // Sau 5 giây, xóa component chứa hình ảnh
      const timer = setTimeout(() => {
        setShowDefeat(false) // Xóa component sau 5s
      }, 5000)

      return () => clearTimeout(timer) // Dọn dẹp timer khi component bị unmount hoặc khi có sự thay đổi
    }
  }, [game.winner]) // Theo dõi sự thay đổi của isWinner

  // Handle hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Caro Game</h1>
      <div className="flex w-full max-w-md mx-auto justify-end mb-4">
        <ModeToggle />
      </div>
      {/* Game creation form */}
      {game.gameState === "initial" && (
        <GameCreation
          playerName={game.playerName}
          setPlayerName={game.setPlayerName}
          boardSize={game.boardSize}
          setBoardSize={game.setBoardSize}
          joinRoomId={game.joinRoomId}
          setJoinRoomId={game.setJoinRoomId}
          roomId={game.roomId}
          createRoom={game.createRoom}
          joinRoom={game.joinRoom}
          copyRoomId={game.copyRoomId}
          gameRules={game.gameRules}
          toggleGameRule={game.toggleGameRule}
          error={game.error}
        />
      )}

      {/* Loading states */}
      {(game.gameState === "creating" || game.gameState === "joining") && (
        <div className="flex flex-col items-center justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-4" />
          <p className="text-lg text-center">
            {game.gameState === "creating" ? "Creating game..." : "Joining game..."}
          </p>
          {game.gameState !== "creating" && (<p className="text-sm text-gray-500 text-center mt-2">{game.message || "Establishing connection..."}</p>)}

          {game.gameState === "creating" && (
            <div className="mt-4 p-3 rounded-md">
              <div className="flex items-center justify-between">
                <span className="font-medium">Room Code: {game.roomId}</span>
                <Button variant="outline" size="icon" onClick={game.copyRoomId} title="Copy Room Code">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-1">Share this code with your friend to join the game</p>
            </div>
          )}
        </div>
      )}

      {/* Game board and status */}
      {game.gameState === "playing" && (
        <div className="flex flex-col gap-6 items-center">
          <div className="w-full order-2">
            <div className="overflow-auto flex justify-center">
              <GameBoard
                board={game.board}
                isMyTurn={game.isMyTurn}
                makeMove={game.makeMove}
                myPlayerId={game.getMyPlayerId()}
                symbolPreference={game.symbolPreference}
                opponentSymbolPreference={game.opponentSymbolPreference}
                winner={game.winner}
                gameState={game.gameState}
                boardSize={game.boardSize}
                lastMove={game.lastMove}
                mapPlayerToSymbol={game.mapPlayerToSymbol}
              />
            </div>
          </div>

          <div className="w-full order-1">
            <GameStatus
              gameState={game.gameState}
              message={game.message}
              connectionStatus={game.connectionStatus}
              isMyTurn={game.isMyTurn}
              playerName={game.playerName}
              opponentName={game.opponentName}
              mySymbol={game.symbolPreference}
              opponentSymbol={game.opponentSymbolPreference}
              setMySymbol={game.setSymbolPreference}
              setOpponentSymbol={game.setOpponentSymbolPreference}
              turnTimer={game.turnTimer}
              displayTimer={game.displayTimer}
              timerActive={game.timerActive}
              winner={game.winner}
              resetGame={game.resetGame}
              restartGame={game.restartGame}
              debugMode={game.debugMode}
              currentPlayerId={game.currentPlayerId}
              makeMove={game.makeMove}
              board={game.board}
              myPlayerId={game.getMyPlayerId()}
              waitingForRestart={game.waitingForRestart}
              opponentWantsRestart={game.opponentWantsRestart}
              restartCountdown={game.restartCountdown}
              scores={game.scores}
              opponentPlayerId={game.getOpponentPlayerId()}
            />
          </div>
        </div>
      )}
      {game.gameState === "playing" && <div className="w-full max-w-lg mx-auto p-6 space-y-4">
        <hr/>
        <br/>
        <Label className="block mb-2">The game rules that apply in this room are:
        </Label>
        <div className="space-y-2">
          {game.gameRules.map((rule) => (
            <div key={rule.id} className="flex items-start space-x-2">
              <Checkbox id={rule.id} checked={rule.enabled} disabled={true} />
              <div>
                <Label htmlFor={rule.id} className="font-medium">
                  {rule.name}
                </Label>
                <p className="text-sm text-gray-500">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      }
      {/* Emoji selector - only show during active gameplay */}
      {game.gameState === "playing" && <EmojiSelector onEmojiSelect={game.sendEmoji} />}

      {/* Emoji display */}
      <EmojiDisplay message={game.emojiMessage} playerName={game.playerName} opponentName={game.opponentName} myPlayerId={game.getMyPlayerId()} />

      {/* Victory effects */}
      {game.showVictoryEffects && game.winner && (
        <VictoryEffects
          isWinner={game.winner === game.getMyPlayerId()}
          playerName={game.winner === game.getMyPlayerId() ? game.playerName : game.opponentName}
        />
      )}
      {showDefeat && !game.showVictoryEffects && game.winner && game.winner !== game.getMyPlayerId() && (
        <DefeatEffects
          isWinner={false}
          playerName={game.winner === game.getMyPlayerId() ? game.playerName : game.opponentName}
        />
      )}
    </div>
  )
}
