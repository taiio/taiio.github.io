---
title: Unique Paths
number: 59
source: NeetCode
category: 2-D Dynamic Programming
difficulty: Medium
tags: Math, Dynamic Programming, Combinatorics
url: https://neetcode.io/problems/count-paths
---

## Problem
There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers `m` and `n`, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

### Examples

**Example 1:**
```text
Input: m = 3, n = 7
Output: 28
```

**Example 2:**
```text
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
```

### Constraints
- `1 <= m, n <= 100`

## Hints
- At cell `(r, c)`, paths come from `(r - 1, c)` and `(r, c - 1)`.
- Recurrence: `dp[r][c] = dp[r-1][c] + dp[r][c-1]`.
- You only need the previous row to compute the current row.

## Template
```typescript
function uniquePaths(m: number, n: number): number {
  // TODO
}
```

```python
def uniquePaths(m: int, n: int) -> int:
    # TODO
    pass
```

## Solution: 1D Row Dynamic Programming (Optimal)
- time: O(m * n)
- space: O(n)

### Explanation
Maintain a single row array of size `n`. Update `row[c] += row[c - 1]` for each row.

### Walkthrough
- Initialize `row` of size `n` with 1s.
- For `r` from 1 to `m - 1`:
-   For `c` from 1 to `n - 1`:
-     `row[c] += row[c - 1]`.
- Return `row[n - 1]`.

```typescript
function uniquePaths(m: number, n: number): number {
  const row = new Array(n).fill(1);

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      row[c] += row[c - 1];
    }
  }

  return row[n - 1];
}
```

```python
def uniquePaths(m: int, n: int) -> int:
    row = [1] * n
    for r in range(1, m):
        for c in range(1, n):
            row[c] += row[c - 1]
    return row[-1]
```
