---
title: Valid Sudoku
number: 36
source: LeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, Matrix
url: https://leetcode.com/problems/valid-sudoku/
---

## Problem
Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

**Note:**
- A Sudoku board (partially filled) could be valid according to these rules without necessarily being solvable.
- Only the filled cells (not `'.'`) need to be validated.

**Example 1:**
```
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
```

**Example 2:**
```
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
```
Explanation: same board as example 1, except there are two 8's in the top-left 3x3 sub-box, which makes it invalid.

**Constraints:**
- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit `1-9` or `'.'`.

## Hints
- The board is only ever `9x9`, so brute-force checking (re-scanning the relevant row, column, and sub-box for every filled cell) is small enough to be fast in practice, even though it's not the most elegant approach.
- A cleaner approach is to track, for every row, column, and 3x3 sub-box, which digits have already been seen — using a Hash Set (or a small fixed-size array) per row/column/box.
- Every cell `(r, c)` belongs to exactly one row `r`, one column `c`, and one sub-box, whose index can be computed as `(r // 3) * 3 + (c // 3)`. A single pass over the board can update all three tracking structures at once.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function isValidSudoku(board: string[][]): boolean {
  // TODO
  return false;
}
```

## Solution: Brute Force Re-Scan
- time: O(1) in practice since the board is fixed at 9x9, but conceptually O(n²) work per cell for an n x n board, giving O(n⁴) overall
- space: O(1)

### Explanation
For every filled cell, we can directly re-scan its entire row, its entire column, and its 3x3 sub-box to check for duplicates of that digit, exactly as a human solving Sudoku might double-check. It's the most literal translation of the rules into code, though it repeats a lot of work compared to a single tracked pass.

### Walkthrough
- For each filled cell `(r, c)` with digit `d`:
  - Scan the rest of row `r` for another occurrence of `d`.
  - Scan the rest of column `c` for another occurrence of `d`.
  - Scan the rest of the 3x3 box containing `(r, c)` for another occurrence of `d`.
  - If any scan finds a duplicate, return `false`.
- If every cell passes all three checks, return `true`.

```typescript
function isValidSudoku(board: string[][]): boolean {
  const isDigitUniqueInRow = (r: number, c: number, digit: string): boolean => {
    for (let col = 0; col < 9; col++) {
      if (col !== c && board[r][col] === digit) return false;
    }
    return true;
  };

  const isDigitUniqueInCol = (r: number, c: number, digit: string): boolean => {
    for (let row = 0; row < 9; row++) {
      if (row !== r && board[row][c] === digit) return false;
    }
    return true;
  };

  const isDigitUniqueInBox = (r: number, c: number, digit: string): boolean => {
    const boxRow = Math.floor(r / 3) * 3;
    const boxCol = Math.floor(c / 3) * 3;
    for (let row = boxRow; row < boxRow + 3; row++) {
      for (let col = boxCol; col < boxCol + 3; col++) {
        if ((row !== r || col !== c) && board[row][col] === digit) return false;
      }
    }
    return true;
  };

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const digit = board[r][c];
      if (digit === ".") continue;
      if (
        !isDigitUniqueInRow(r, c, digit) ||
        !isDigitUniqueInCol(r, c, digit) ||
        !isDigitUniqueInBox(r, c, digit)
      ) {
        return false;
      }
    }
  }

  return true;
}
```

## Solution: Hash Sets per Row, Column, and Box
- time: O(1), since the board size is fixed at 9x9 (equivalently O(n²) in terms of board dimension n, done once)
- space: O(1), since at most 9 rows, 9 columns, and 9 boxes are tracked, each holding at most 9 digits

### Explanation
We only need a single pass over the board. For each filled cell, we check whether its digit has already been seen in the same row, the same column, or the same 3x3 sub-box. If so, the board is invalid. Otherwise, we record the digit as seen in all three of those tracking structures and continue. Using one Hash Set per row, per column, and per box lets us check and update in O(1) per cell, avoiding all the repeated re-scanning of the brute force approach.

### Walkthrough
- Create three arrays of 9 Hash Sets each: `rows`, `cols`, and `boxes`.
- Iterate over every cell `(r, c)` in the board.
- If the cell is `'.'`, skip it.
- Otherwise, let `digit` be the cell's value and `boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)`.
  - If `digit` is already in `rows[r]`, `cols[c]`, or `boxes[boxIndex]`, return `false`.
  - Otherwise, add `digit` to all three sets.
- If the full board is scanned without conflicts, return `true`.

```typescript
function isValidSudoku(board: string[][]): boolean {
  const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const digit = board[r][c];
      if (digit === ".") continue;

      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(digit) || cols[c].has(digit) || boxes[boxIndex].has(digit)) {
        return false;
      }

      rows[r].add(digit);
      cols[c].add(digit);
      boxes[boxIndex].add(digit);
    }
  }

  return true;
}
```

## Solution: Bitmask Tracking
- time: O(1) (fixed 9x9 board, single pass)
- space: O(1), just 27 integers used as bitmasks

### Explanation
Instead of Hash Sets, we can represent "which digits have been seen" for each row, column, and box as a single integer bitmask, where bit `d` (for digit `d` from 1 to 9) is set if that digit has already appeared. Checking membership becomes a bitwise AND, and marking a digit as seen becomes a bitwise OR — both O(1) primitive operations, and typically faster in practice than Hash Set operations since there's no hashing overhead.

### Walkthrough
- Create three arrays of 9 integers each, `rowMask`, `colMask`, `boxMask`, all initialized to 0.
- For each filled cell `(r, c)` with digit `d` (1-9):
  - Compute `bit = 1 << d` and `boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)`.
  - If `(rowMask[r] & bit)`, `(colMask[c] & bit)`, or `(boxMask[boxIndex] & bit)` is nonzero, the digit was already seen there, so return `false`.
  - Otherwise, OR `bit` into all three masks.
- If the whole board is processed without conflicts, return `true`.

```typescript
function isValidSudoku(board: string[][]): boolean {
  const rowMask = new Array(9).fill(0);
  const colMask = new Array(9).fill(0);
  const boxMask = new Array(9).fill(0);

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cell = board[r][c];
      if (cell === ".") continue;

      const digit = Number(cell);
      const bit = 1 << digit;
      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (
        (rowMask[r] & bit) !== 0 ||
        (colMask[c] & bit) !== 0 ||
        (boxMask[boxIndex] & bit) !== 0
      ) {
        return false;
      }

      rowMask[r] |= bit;
      colMask[c] |= bit;
      boxMask[boxIndex] |= bit;
    }
  }

  return true;
}
```
