---
title: Pacific Atlantic Water Flow
number: 44
source: NeetCode
category: Graphs
difficulty: Medium
tags: Array, Depth-First Search, Breadth-First Search, Matrix
url: https://neetcode.io/problems/pacific-atlantic-water-flow
---

## Problem
There is an `m x n` rectangular island that borders both the **Pacific Ocean** and **Atlantic Ocean**. The **Pacific Ocean** touches the island's left and top edges, and the **Atlantic Ocean** touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an `m x n` integer matrix `heights` where `heights[r][c]` represents the **height above sea level** of the cell at coordinate `(r, c)`.

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is **less than or equal to** the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a **2D list** of grid coordinates `result` where `result[i] = [ri, ci]` denotes that rain water can flow from cell `(ri, ci)` to **both** the Pacific and Atlantic oceans.

### Examples

**Example 1:**
```text
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
```

### Constraints
- `m == heights.length`
- `n == heights[r].length`
- `1 <= m, n <= 200`
- `0 <= heights[r][c] <= 10^5`

## Hints
- Instead of checking if water flows down from every cell to oceans, reverse the problem.
- Start from the ocean borders and flow *uphill* (to cells with height >= current cell).
- Find the intersection of cells reachable from the Pacific and cells reachable from the Atlantic.

## Template
```typescript
function pacificAtlantic(heights: number[][]): number[][] {
  // TODO
}
```

```python
def pacificAtlantic(heights: list[list[int]]) -> list[list[int]]:
    # TODO
    pass
```

## Solution: Reverse DFS from Ocean Borders (Optimal)
- time: O(m * n)
- space: O(m * n)

### Explanation
Traverse backwards from the ocean edges up into cells with equal or greater height. Find cells reached by both Pacific and Atlantic DFS.

### Walkthrough
- Initialize two boolean sets/matrices `pacific` and `atlantic`.
- Launch DFS from all cells on top/left borders for `pacific`.
- Launch DFS from all cells on bottom/right borders for `atlantic`.
- In DFS, only move to neighbor if `heights[nr][nc] >= heights[r][c]`.
- Intersect `pacific` and `atlantic` sets to form final answer.

```typescript
function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length;
  const cols = heights[0].length;

  const pac = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const atl = Array.from({ length: rows }, () => new Array(cols).fill(false));

  function dfs(r: number, c: number, ocean: boolean[][], prevHeight: number) {
    if (
      r < 0 || r >= rows ||
      c < 0 || c >= cols ||
      ocean[r][c] ||
      heights[r][c] < prevHeight
    ) {
      return;
    }

    ocean[r][c] = true;
    dfs(r + 1, c, ocean, heights[r][c]);
    dfs(r - 1, c, ocean, heights[r][c]);
    dfs(r, c + 1, ocean, heights[r][c]);
    dfs(r, c - 1, ocean, heights[r][c]);
  }

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(rows - 1, c, atl, heights[rows - 1][c]);
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols - 1]);
  }

  const res: number[][] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pac[r][c] && atl[r][c]) {
        res.push([r, c]);
      }
    }
  }

  return res;
}
```

```python
def pacificAtlantic(heights: list[list[int]]) -> list[list[int]]:
    rows, cols = len(heights), len(heights[0])
    pac, atl = set(), set()
    
    def dfs(r, c, visit, prev_height):
        if (
            (r, c) in visit or
            r < 0 or c < 0 or r >= rows or c >= cols or
            heights[r][c] < prev_height
        ):
            return
            
        visit.add((r, c))
        dfs(r + 1, c, visit, heights[r][c])
        dfs(r - 1, c, visit, heights[r][c])
        dfs(r, c + 1, visit, heights[r][c])
        dfs(r, c - 1, visit, heights[r][c])
        
    for c in range(cols):
        dfs(0, c, pac, heights[0][c])
        dfs(rows - 1, c, atl, heights[rows - 1][c])
        
    for r in range(rows):
        dfs(r, 0, pac, heights[r][0])
        dfs(r, cols - 1, atl, heights[r][cols - 1])
        
    return list(map(list, pac.intersection(atl)))
```
