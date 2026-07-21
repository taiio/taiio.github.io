"use client"

import { useEffect, useRef, useState } from "react"

interface VictoryEffectsProps {
  isWinner: boolean
  playerName: string
}

export default function VictoryEffects({ isWinner, playerName }: VictoryEffectsProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const confettiRef = useRef<any>(null)
  const emojiRef = useRef<HTMLDivElement>(null)
  const [lottieInstance, setLottieInstance] = useState<any>(null)

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        if (!lottieInstance) {
          const lottieModule = await import("lottie-web")
          setLottieInstance(lottieModule.default)
        }

        if (isWinner && !confettiRef.current) {
          const confettiModule = await import("canvas-confetti")
          confettiRef.current = confettiModule.default
        }
      } catch (error) {
        console.error("Error loading libraries:", error)
      }
    }

    loadLibraries()
  }, [isWinner, lottieInstance])

  useEffect(() => {
    if (!lottieInstance) return

    const setupEffects = async () => {
      if (isWinner) {
        if (!audioRef.current) {
          audioRef.current = new Audio("/caro/sounds/victory.mp3")
          audioRef.current.volume = 0.5
        }

        try {
          await audioRef.current.play()
        } catch (err) {
          console.error("Error playing audio:", err)
        }

        if (confettiRef.current) {
          launchConfetti()
        }
      }
    }

    setupEffects()

    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }, 5200)

    return () => {
      clearTimeout(timer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isWinner, lottieInstance])

  const launchConfetti = () => {
    if (!confettiRef.current) return
    const shapes = ["square", "circle", "star", "triangle", "polygon", "emoji"] // 'star' & 'triangle' are not built-in, but you can simulate them
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)]
  
    const duration = 5200
    const animationEnd = Date.now() + duration
    const defaults = {
      startVelocity: 25,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
      colors: [
        "#00ffff", "#ff00ff", "#ffffff", "#ffd700", "#ff4500",
        "#00ff00", "#1e90ff", "#ff1493", "#adff2f", "#ff6347",
        "#8a2be2", "#f08080"
      ]
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()
      if (timeLeft <= 0) return clearInterval(interval)

      const particleCount = 100 * (timeLeft / duration)

      // Random explosion
      confettiRef.current({
        ...defaults,
        particleCount,
        angle: Math.random() * 360,
        spread: Math.random() * 100 + 50,
        origin: {
          x: Math.random() *0.3 + 0.3,
          y: Math.random() *0.3 + 0.3,
        },
        shapes: [randomShape], // random shape per launch
      })
    }, 100)
  }

  return (
    <div className="fixed inset-0 z-50 pointer-events-none bg-transparent">
      {!isWinner && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-in fade-in zoom-in duration-300">
          <div
            ref={emojiRef}
            className="h-24 w-24 dark:invert"
          ></div>
        </div>
      )}
    </div>
  )
}
