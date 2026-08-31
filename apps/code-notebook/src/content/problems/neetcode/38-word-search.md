---
title: Word Search
number: 38
source: NeetCode
category: Backtracking
difficulty: Medium
tags: Array, Backtracking, Matrix
url: https://neetcode.io/problems/search-for-word
---

## Problem
Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

### Examples

**Example 1:**
```text
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```

**Example 2:**
```text
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
```

**Example 3:**
```text
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
```

### Constraints
- `m == board.length`
- `n = board[i].length`
- `1 <= m, n <= 6`
- `1 <= word.length <= 15`
- `board` and `word` consist of only lowercase and uppercase English letters.

## Hints
- Try starting DFS from every cell `(r, c)` on the board.
- Temporarily mark the visited cell (e.g. `board[r][c] = '#'` or with a visited set) during DFS, and restore it when backtracking.
- Explore 4 directions: up, down, left, right.

## Template
```typescript
function exist(board: string[][], word: string): boolean {
  // TODO
}
```

```python
def exist(board: list[list[str]], word: str) -> bool:
    # TODO
    pass
```

## Solution: Backtracking DFS (Optimal)
- time: O(m * n * 4^L) where L is word length
- space: O(L) call stack

### Explanation
Iterate through every cell. If cell matches word[0], launch DFS exploring 4 adjacent directions, marking visited cells in place.

### Walkthrough
- Loop `r` from 0 to `m - 1` and `c` from 0 to `n - 1`.
- In `dfs(r, c, index)`:
-   If `index === word.length`, return true (entire word matched).
-   If `r, c` out of bounds or `board[r][c] !== word[index]`, return false.
-   Save `char = board[r][c]` and mark `board[r][c] = '#'`.
-   Recursively check 4 directions `(r+1, c), (r-1, c), (r, c+1), (r, c-1)` with `index + 1`.
-   Restore `board[r][c] = char` (backtrack).
-   Return whether any branch succeeded.

```typescript
function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r: number, c: number, k: number): boolean {
    if (k === word.length) return true;
    if (
      r < 0 || r >= rows ||
      c < 0 || c >= cols ||
      board[r][c] !== word[k]
    ) {
      return false;
    }

    const temp = board[r][c];
    board[r][c] = '#';

    const found =
      dfs(r + 1, c, k + 1) ||
      dfs(r - 1, c, k + 1) ||
      dfs(r, c + 1, k + 1) ||
      dfs(r, c - 1, k + 1);

    board[r][c] = temp;
    return found;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
}
```

```python
def exist(board: list[list[str]], word: str) -> bool:
    rows, cols = len(board), len(board[0])
    
    def dfs(r, c, k):
        if k == len(word):
            return True
        if r < 0 or r >= rows or c < 0 or c >= cols or board[r][c] != word[k]:
            return False
            
        temp = board[r][c]
        board[r][c] = '#'
        
        found = (
            dfs(r + 1, c, k + 1) or
            dfs(r - 1, c, k + 1) or
            dfs(r, c + 1, k + 1) or
            dfs(r, c - 1, k + 1)
        )
        
        board[r][c] = temp
        return found
        
    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0):
                return True
                
    return False
```
