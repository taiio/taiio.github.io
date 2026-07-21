"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import type { GameRule } from "@/types/game-types"

const DEFAULT_TURN_TIME = 20 // default turn time in seconds

export function useGameTimer(
  isMyTurn: boolean,
  winner: string | null,
  gameRules: GameRule[],
  board: (string | null)[][],
  gameState: string,
  currentPlayerId: string,
  makeMove: (row: number, col: number, player: string, sendMove: boolean) => void,
  myPlayerId: string,
) {
  const [turnTimer, setTurnTimer] = useState(DEFAULT_TURN_TIME); // dành riêng cho người chơi đang có lượt
  const [displayTimer, setDisplayTimer] = useState(DEFAULT_TURN_TIME); // hiển thị đồng hồ cho cả 2 bên
  const [timerActive, setTimerActive] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const stopTurnTimer = useCallback(() => {
    if (timerRef.current && timerActive) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    setTimerActive(false)
  }, [])

  const setTurnTimerFactory = () => {
    setTurnTimer(DEFAULT_TURN_TIME)
  }
  // Hàm randomMove
  const makeRandomMove = () => {
    console.log("Making random move for player:", myPlayerId);
    const rows = board.length;
    const cols = board[0].length;
    let attempts = rows * cols;

    while (attempts > 0) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);

      if (board[randomRow][randomCol] === null) {
        makeMove(randomRow, randomCol, myPlayerId, true);
        return;
      }
      attempts--;
    }
  }

  useEffect(() => {
    setDisplayTimer(DEFAULT_TURN_TIME)
  }, [currentPlayerId])

  useEffect(() => {
    if (winner) {
      setDisplayTimer(0);
      setTimerActive(false);
    }
  }, [winner]);

  useEffect(() => {
    setTimerActive(true)
  }, [gameState]);

  useEffect(() => {

    let interval: NodeJS.Timeout | null = null
    if (timerActive && gameState === "playing") {
      setDisplayTimer(turnTimer)

      interval = setInterval(() => {
        setDisplayTimer((prev) => {
          if (prev > 0) return prev - 1
          return 0
        })
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timerActive, gameState])

  useEffect(() => {
    if (displayTimer === 0 && !winner) {
      if (isMyTurn && typeof makeMove === 'function') {
        makeRandomMove()
      }
      console.log('Không còn ô trống để đánh.');
    }
  }, [displayTimer]);


  // Clear tất cả khi component unmount
  useEffect(() => {
    return () => {
      stopTurnTimer();
    };
  }, [stopTurnTimer]);


  // Start turn timer
  const startTurnTimer = () => {
    setTimerActive(true)
  }

  return {
    displayTimer,
    turnTimer,
    setDisplayTimer,
    startTurnTimer,
    stopTurnTimer,
    makeRandomMove,
    setTimerActive,
    timerActive,
    setTurnTimerFactory
  };
}
