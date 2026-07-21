"use client"

import { useEffect, useRef } from "react"

// Hook để đồng bộ hóa timer giữa các người chơi
export function useTimerSync(
  isMyTurn: boolean,
  timerActive: boolean,
  turnTimer: number,
  dataChannel: RTCDataChannel | null,
  winner: string | null,
) {
  const lastSyncRef = useRef(0)

  // Gửi cập nhật timer mỗi 2 giây nếu đang active
  useEffect(() => {
    if (!isMyTurn || !timerActive || winner || !dataChannel || dataChannel.readyState !== "open") {
      return
    }

    const syncInterval = setInterval(() => {
      // Chỉ gửi nếu timer đã thay đổi từ lần sync trước
      if (turnTimer !== lastSyncRef.current) {
        try {
          dataChannel.send(
            JSON.stringify({
              type: "timerSync",
              turnTimer: turnTimer,
            }),
          )
          lastSyncRef.current = turnTimer
        } catch (err) {
          console.error("Error sending timer sync:", err)
        }
      }
    }, 1000)

    return () => {
      clearInterval(syncInterval)
    }
  }, [isMyTurn, timerActive, turnTimer, dataChannel, winner])

  return null
}
