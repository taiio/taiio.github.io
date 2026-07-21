export type GameState = "initial" | "creating" | "joining" | "playing"

export type GameRule = {
  id: string
  name: string
  description: string
  enabled: boolean
}

export type PlayerInfo = {
  name: string
  isHost: boolean
}

export type GameMove = {
  row: number
  col: number
  playerId: string // Changed from player to playerId
  winner: string | null
  nextPlayerId: string // Changed from nextPlayer to nextPlayerId
  turnTimer: number
}

export type BoardState = {
  board: (string | null)[][]
  currentPlayerId: string // Changed from currentPlayer to currentPlayerId
  isYourTurn: boolean
  winner: string | null
  opponentName: string
}

export type SymbolPreference = "X" | "O"

export type SymbolMapping = {
  hostSymbol: SymbolPreference
  guestSymbol: SymbolPreference
}


export type EmojiMessage = {
  emoji: string
  sender: string
}

export type GameScores = {
  host: number
  guest: number
}
export type GameHistory = {
  moves: GameMove[]
  scores: GameScores
}