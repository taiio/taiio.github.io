"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Smile } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Define the available emojis as GIFs
export const EMOJIS = [
  {
    name: "1",
    url: "/caro/emojis/1.gif",
  },
  {
    name: "2",
    url: "/caro/emojis/2.gif",
  },
  {
    name: "3",
    url: "/caro/emojis/3.gif",
  },
  {
    name: "face-with-tears-of-joy",
    url: "/caro/emojis/face-with-tears-of-joy.gif",
  },
]

interface EmojiSelectorProps {
  onEmojiSelect: (emoji: string) => void
}

export default function EmojiSelector({ onEmojiSelect }: EmojiSelectorProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-10">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
          >
            <Smile className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-2" side="top">
          <div className="grid grid-cols-5 gap-2">
            {EMOJIS.map((emoji) => (
              <Button
                key={emoji.name}
                variant="ghost"
                className="p-2 h-12 w-12 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => {
                  onEmojiSelect(emoji.name)
                  setOpen(false)
                }}
              >
                <img
                  src={emoji.url}
                  alt={emoji.name}
                  className="h-8 w-8 object-contain"
                />
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
