"use client"

import { useEffect, useState, useRef } from "react"
import type { EmojiMessage } from "@/types/game-types"
import { EMOJIS } from "./emoji-selector"

interface EmojiDisplayProps {
  message: EmojiMessage | null
  playerName: string
  opponentName: string
  myPlayerId: string
}

type DisplayedEmoji = EmojiMessage & { id: string; timestamp: number }

export default function EmojiDisplay({ message, playerName, opponentName, myPlayerId }: EmojiDisplayProps) {
  const [emojis, setEmojis] = useState<DisplayedEmoji[]>([])
  const [hasEmojis, setHasEmojis] = useState(false) // Track if there are emojis
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!message) return

    const id = `${Date.now()}-${Math.random()}` // Unique ID for each emoji
    const newEmoji = { ...message, id, timestamp: Date.now() }

    setEmojis((prev) => [...prev, newEmoji])
    setHasEmojis(true) // Indicate that we have emojis now

  }, [message])

  useEffect(() => {
    // Start interval when emojis are added
    if (hasEmojis && intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        const now = Date.now()
        setEmojis((prev) => prev.filter((e) => now - e.timestamp < 6000)) // Keep emojis for 6s
      }, 2000)
    }

    // Cleanup when emojis are empty
    if (emojis.length === 0 && intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setHasEmojis(false) // No emojis, stop the interval
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [emojis, hasEmojis])

  const getEmojiUrl = (emojiName: string) => {
    const emojiMap: Record<string, string> = EMOJIS.reduce((acc, curr) => {
      acc[curr.name] = curr.url
      return acc
    }, {} as Record<string, string>)
    return emojiMap[emojiName] || emojiMap["grinning-face"]
  }

  return (
    <>
      {emojis.map((e) => {
        const isMine = e.sender === myPlayerId
        const senderName = isMine ? playerName : opponentName
        const emojiUrl = getEmojiUrl(e.emoji)

        return (
          <div
            key={e.id}
            className={`fixed top-1/2 transform -translate-y-1/2 z-50 animate-in fade-in zoom-in duration-300 ${
              isMine ? "left-10" : "right-10"
            }`}
            style={{
              top: isMine ? "calc(50% - 100px)" : "calc(50% - 100px)", // Adjust the position to place it near the timer
            }}
          >
            <div className="flex flex-col items-center">
              <img src={emojiUrl} alt={e.emoji} className="h-24 w-24 mb-2" />
              <div className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md text-sm">
                {senderName}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
