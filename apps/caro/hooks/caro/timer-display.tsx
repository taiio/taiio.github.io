"use client"

import { Clock } from "lucide-react"
import { useEffect, useState } from "react"

interface TimerDisplayProps {
  displayTimer: number; // Thay turnTimer bằng displayTimer
  timerActive: boolean;
  isMyTurn: boolean;
  opponentName: string;
}

export default function TimerDisplay({
  displayTimer,
  timerActive,
  isMyTurn,
  opponentName,
}: TimerDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center p-3">
      <div className="flex items-center gap-2 mb-1">
        <Clock className={`h-5 w-5 ${timerActive ? "animate-pulse text-amber-500" : ""}`} />
        <span className="font-medium">
          {isMyTurn ? "Your" : `${opponentName}'s`} turn
        </span>
      </div>

      <div className="text-center">
        <span className={`text-2xl font-mono font-bold ${displayTimer <= 3 ? "text-red-500" : ""}`}>
          {Math.ceil(displayTimer)}
        </span>
        <span className="text-sm ml-1">seconds</span>
      </div>
    </div>
  );
}