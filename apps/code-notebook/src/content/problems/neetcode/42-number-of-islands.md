---
title: Number of Islands
number: 42
source: NeetCode
category: Graphs
difficulty: Medium
tags: Array, Depth-First Search, Breadth-First Search, Union Find, Matrix
url: https://neetcode.io/problems/count-number-of-islands
---

## Problem
Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

### Examples

**Example 1:**
```text
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

**Example 2:**
```text
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

### Constraints
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j]` is `'0'` or `'1'`.

## Hints
- Scan every cell of the grid.
- When encountering `'1'`, increment island count and use DFS/BFS to sink/visit all adjacent connected `'1'`s.

## Template
```typescript
function numIslands(grid: string[][]): number {
  // TODO
}
```

```python
def numIslands(grid: list[list[str]]) -> int:
    # TODO
    pass
```

## Solution: DFS Flood Fill (Optimal)
- time: O(m * n)
- space: O(m * n) call stack worst case

### Explanation
Iterate through the grid. When a '1' is found, increment island count and use DFS to sink the entire island to '0'.

### Walkthrough
- Initialize `count = 0`.
- Loop `r` from 0 to `m - 1` and `c` from 0 to `n - 1`.
- If `grid[r][c] === '1'`:
-   `count++`
-   Call `dfs(r, c)` to mark all connected land as `'0'`.
- In `dfs(r, c)`:
-   If out of bounds or `grid[r][c] !== '1'`, return.
-   `grid[r][c] = '0'`.
-   Recursively call dfs on 4 adjacent cells.
- Return `count`.

```typescript
function numIslands(grid: string[][]): number {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(r: number, c: number) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== '1') {
      return;
    }
    grid[r][c] = '0';
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}
```

```python
def numIslands(grid: list[list[str]]) -> int:
    if not grid:
        return 0
        
    rows, cols = len(grid), len(grid[0])
    count = 0
    
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
        
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
                
    return count
```
