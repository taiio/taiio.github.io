"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Smile } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Define the available emojis as GIFs
export const EMOJIS = [
  {
    name: "1",
    url: "/emojis/1.gif",
  },
  {
    name: "2",
    url: "/emojis/2.gif",
  },
  {
    name: "512",
    url: "/emojis/512.gif",
  },
  {
    name: "grinning-face",
    url: "/emojis/grinning-face.gif",
  },
  {
    name: "face-with-tears-of-joy",
    url: "/emojis/face-with-tears-of-joy.gif",
  },
  {
    name: "smiling-face-with-heart-eyes",
    url: "/emojis/smiling-face-with-heart-eyes.gif",
  },
  {
    name: "thinking-face",
    url: "/emojis/thinking-face.gif",
  },
  {
    name: "thumbs-up",
    url: "/emojis/thumbs-up.gif",
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
