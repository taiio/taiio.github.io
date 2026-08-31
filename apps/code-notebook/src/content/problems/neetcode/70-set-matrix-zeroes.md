---
title: Set Matrix Zeroes
number: 70
source: NeetCode
category: Math & Geometry
difficulty: Medium
tags: Array, Hash Table, Matrix
url: https://neetcode.io/problems/set-zeroes-in-matrix
---

## Problem
Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`'s.

You must do it **in place**.

### Examples

**Example 1:**
```text
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```

**Example 2:**
```text
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```

### Constraints
- `m == matrix.length`
- `n == matrix[0].length`
- `1 <= m, n <= 200`
- `-2^31 <= matrix[i][j] <= 2^31 - 1`

## Hints
- Use the first row and first column of the matrix itself as markers to avoid extra space.
- Use an extra boolean variable `firstRowZero` to record if the first row originally had a zero.

## Template
```typescript
function setZeroes(matrix: number[][]): void {
  // TODO
}
```

```python
def setZeroes(matrix: list[list[int]]) -> None:
    # TODO
    pass
```

## Solution: First Row/Col Markers (Optimal)
- time: O(m * n)
- space: O(1) in-place

### Explanation
Use row 0 and col 0 to store whether each row/col should be zeroed. Track row 0 separately with a flag.

### Walkthrough
- Check if row 0 has any zero: `firstRowZero`.
- Iterate through rest of matrix: if `matrix[r][c] === 0`, set `matrix[0][c] = 0` and `matrix[r][0] = 0`.
- Iterate `r` from 1 to `m - 1` and `c` from 1 to `n - 1`: if `matrix[0][c] === 0 || matrix[r][0] === 0`, set `matrix[r][c] = 0`.
- If `matrix[0][0] === 0`: zero out first column.
- If `firstRowZero`: zero out first row.

```typescript
function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let firstRowZero = false;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        if (r === 0) {
          firstRowZero = true;
        } else {
          matrix[r][0] = 0;
        }
        matrix[0][c] = 0;
      }
    }
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (matrix[r][0] === 0 || matrix[0][c] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let r = 0; r < rows; r++) {
      matrix[r][0] = 0;
    }
  }

  if (firstRowZero) {
    for (let c = 0; c < cols; c++) {
      matrix[0][c] = 0;
    }
  }
}
```

```python
def setZeroes(matrix: list[list[int]]) -> None:
    rows, cols = len(matrix), len(matrix[0])
    first_row_zero = False
    
    for r in range(rows):
        for c in range(cols):
            if matrix[r][c] == 0:
                if r == 0:
                    first_row_zero = True
                else:
                    matrix[r][0] = 0
                matrix[0][c] = 0
                
    for r in range(1, rows):
        for c in range(1, cols):
            if matrix[r][0] == 0 or matrix[0][c] == 0:
                matrix[r][c] = 0
                
    if matrix[0][0] == 0:
        for r in range(rows):
            matrix[r][0] = 0
            
    if first_row_zero:
        for c in range(cols):
            matrix[0][c] = 0
```
