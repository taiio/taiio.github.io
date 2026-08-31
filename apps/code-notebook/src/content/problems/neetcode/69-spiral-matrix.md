---
title: Spiral Matrix
number: 69
source: NeetCode
category: Math & Geometry
difficulty: Medium
tags: Array, Matrix, Simulation
url: https://neetcode.io/problems/spiral-matrix
---

## Problem
Given an `m x n` `matrix`, return *all elements of the* `matrix` *in spiral order*.

### Examples

**Example 1:**
```text
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
```

**Example 2:**
```text
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

### Constraints
- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 10`
- `-100 <= matrix[i][j] <= 100`

## Hints
- Maintain 4 boundaries: `top = 0`, `bottom = m - 1`, `left = 0`, `right = n - 1`.
- Traverse: left to right (increment top), top to bottom (decrement right), right to left (decrement bottom), bottom to top (increment left).
- Ensure boundary conditions are still valid before bottom and left traversals.

## Template
```typescript
function spiralOrder(matrix: number[][]): number[] {
  // TODO
}
```

```python
def spiralOrder(matrix: list[list[int]]) -> list[int]:
    # TODO
    pass
```

## Solution: Boundary Traversal (Optimal)
- time: O(m * n)
- space: O(1) extra space (excluding output)

### Explanation
Simulate spiral movement by maintaining four moving boundaries (`top`, `bottom`, `left`, `right`).

### Walkthrough
- Set `top = 0`, `bottom = matrix.length - 1`, `left = 0`, `right = matrix[0].length - 1`.
- While `top <= bottom` and `left <= right`:
-   Traverse top row from `left` to `right`, then `top++`.
-   Traverse right col from `top` to `bottom`, then `right--`.
-   If `top <= bottom`: traverse bottom row from `right` to `left`, then `bottom--`.
-   If `left <= right`: traverse left col from `bottom` to `top`, then `left++`.
- Return `result`.

```typescript
function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let c = left; c <= right; c++) result.push(matrix[top][c]);
    top++;

    for (let r = top; r <= bottom; r++) result.push(matrix[r][right]);
    right--;

    if (top <= bottom) {
      for (let c = right; c >= left; c--) result.push(matrix[bottom][c]);
      bottom--;
    }

    if (left <= right) {
      for (let r = bottom; r >= top; r--) result.push(matrix[r][left]);
      left++;
    }
  }

  return result;
}
```

```python
def spiralOrder(matrix: list[list[int]]) -> list[int]:
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top <= bottom and left <= right:
        for c in range(left, right + 1):
            result.append(matrix[top][c])
        top += 1
        
        for r in range(top, bottom + 1):
            result.append(matrix[r][right])
        right -= 1
        
        if top <= bottom:
            for c in range(right, left - 1, -1):
                result.append(matrix[bottom][c])
            bottom -= 1
            
        if left <= right:
            for r in range(bottom, top - 1, -1):
                result.append(matrix[r][left])
            left += 1
            
    return result
```
