"use client"

import { useEffect, useRef, useState } from "react"

interface DefeatEffectsProps {
  isWinner: boolean;
  playerName: string;
}

export default function DefeatEffects({ isWinner, playerName }: DefeatEffectsProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const emojiRef = useRef<HTMLImageElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle defeat effects
  useEffect(() => {
    if (!isWinner) {
      // Initialize audio if not already created
      if (!audioRef.current) {
        audioRef.current = new Audio("/sounds/defeat.mp3");
        audioRef.current.volume = 0.5;
      }

      // Play defeat sound
      if (!isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Defeat audio playing");
              setIsPlaying(true);
            })
            .catch((err) => {
              console.error("Error playing audio:", err);
            });
        }
      }

      // Display defeat emoji
      if (emojiRef.current) {
        emojiRef.current.src = "/emojis/face-with-tears-of-joy.gif";
      }

      // Stop audio after 8 seconds
      const timer = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          setIsPlaying(false);
          console.log("Defeat audio stopped after 8 seconds");
        }
      }, 8000);

      // Cleanup: Only pause if still playing
      return () => {
        clearTimeout(timer);
        if (audioRef.current && isPlaying) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          setIsPlaying(false);
          console.log("Cleanup: Defeat audio paused");
        }
      };
    } else {
      // When isWinner is true, ensure audio is stopped
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        console.log("isWinner true: Defeat audio stopped");
      }
      // Clear emoji
      if (emojiRef.current) {
        emojiRef.current.src = "";
      }
    }
  }, [isWinner, isPlaying]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {!isWinner && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-in fade-in zoom-in duration-300">
          <img ref={emojiRef} className="h-24 w-24" alt="Sad emoji" />
        </div>
      )}
    </div>
  );
}