"use client"

import { useState } from "react"
import type { GameRule } from "@/types/game-types"

// Default game rules
const defaultGameRules: GameRule[] = [
  {
    id: "rule_five_in_row",
    name: "5 in a row (Default)",
    description: "Win by placing 5 stones in a row (horizontally, vertically, or diagonally)",
    enabled: true,
  },
  {
    id: "rule_time_limit",
    name: "Time limit (Default)",
    description: "20 seconds per move, random move if time runs out",
    enabled: true,
  },
  {
    id: "rule_overlines",
    name: "Overlines win",
    description: "More than 5 stones in a row also counts as a win",
    enabled: true,
  },
  {
    id: "win_nullified_by_double_end_block",
    name: "Win nullified by double-end block",
    description: "A row of 5 or more stones is not considered a win if it is blocked at both ends by the opponent's stones",
    enabled: true
  },
]

export function useGameRules() {
  const [gameRules, setGameRules] = useState<GameRule[]>(defaultGameRules)

  // Toggle a game rule
  const toggleGameRule = (ruleId: string) => {
    setGameRules((prevRules) =>
      prevRules.map((rule) => (rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule)),
    )
  }

  return {
    gameRules,
    setGameRules,
    toggleGameRule,
  }
}
