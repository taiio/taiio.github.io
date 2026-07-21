"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { GameRule, SymbolPreference } from "@/types/game-types"
import { Copy } from "lucide-react"

interface GameCreationProps {
  playerName: string
  setPlayerName: (name: string) => void
  boardSize: number
  setBoardSize: (size: number) => void
  joinRoomId: string
  setJoinRoomId: (id: string) => void
  roomId: string
  createRoom: () => void
  joinRoom: () => void
  copyRoomId: () => void
  gameRules: GameRule[]
  toggleGameRule: (ruleId: string) => void
  error: string
}

export function GameCreation({
  playerName,
  setPlayerName,
  boardSize,
  setBoardSize,
  joinRoomId,
  setJoinRoomId,
  roomId,
  createRoom,
  joinRoom,
  copyRoomId,
  gameRules,
  toggleGameRule,
  error,
}: GameCreationProps) {
  const [activeTab, setActiveTab] = useState("create")

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Tabs defaultValue="create" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="create">Create Game</TabsTrigger>
          <TabsTrigger value="join">Join Game</TabsTrigger>
        </TabsList>

        <div className="mb-4">
          <Label htmlFor="playerName" className="block mb-2">
            Your Name
          </Label>
          <Input
            id="playerName"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full"
          />
        </div>

        <TabsContent value="create" className="space-y-4">
          <div className="space-y-4">
            <div>
              <Label className="block mb-2">Board Size</Label>
              <Select value={boardSize.toString()} onValueChange={(value) => setBoardSize(Number.parseInt(value))}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select board size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15x15 (Standard)</SelectItem>
                  <SelectItem value="25">25x25 (Advanced)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="block mb-2">Game Rules</Label>
              <div className="space-y-2">
                {gameRules.map((rule) => (
                  <div key={rule.id} className="flex items-start space-x-2">
                    <Checkbox id={rule.id} checked={rule.enabled} onCheckedChange={() => toggleGameRule(rule.id)} disabled={['rule_five_in_row', 'rule_time_limit'].includes(rule.id)} />
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

            <Button onClick={createRoom} className="w-full">
              Create Game
            </Button>

          </div>
        </TabsContent>

        <TabsContent value="join" className="space-y-4">
          <div>
            <Label htmlFor="roomCode" className="block mb-2">
              Room Code
            </Label>
            <Input
              id="roomCode"
              placeholder="Enter room code"
              value={joinRoomId}
              onChange={(e) => setJoinRoomId(e.target.value)}
              className="w-full"
            />
          </div>

          <Button onClick={joinRoom} className="w-full">
            Join Game
          </Button>
        </TabsContent>

        {error && <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md">{error}</div>}
      </Tabs>
    </div>
  )
}
