---
title: Rotate Image
number: 68
source: NeetCode
category: Math & Geometry
difficulty: Medium
tags: Array, Math, Matrix
url: https://neetcode.io/problems/rotate-matrix
---

## Problem
You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90 degrees (clockwise)**.

You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

### Examples

**Example 1:**
```text
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
```

**Example 2:**
```text
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

### Constraints
- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`

## Hints
- Rotating 90 degrees clockwise is equivalent to: 1) Transposing the matrix (swap matrix[i][j] with matrix[j][i]).
- 2) Reversing each row.

## Template
```typescript
function rotate(matrix: number[][]): void {
  // TODO
}
```

```python
def rotate(matrix: list[list[int]]) -> None:
    # TODO
    pass
```

## Solution: Transpose and Reverse Rows (Optimal)
- time: O(n²)
- space: O(1) in-place

### Explanation
Transpose the matrix along the main diagonal, then reverse each row horizontally to achieve 90 degrees clockwise rotation.

### Walkthrough
- Transpose: For `i` from 0 to `n - 1`, for `j` from `i + 1` to `n - 1`, swap `matrix[i][j]` with `matrix[j][i]`.
- Reverse rows: For each row `i`, reverse `matrix[i]` in place.
- Matrix is rotated clockwise.

```typescript
function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // 1. Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // 2. Reverse rows
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}
```

```python
def rotate(matrix: list[list[int]]) -> None:
    n = len(matrix)
    
    # 1. Transpose
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
            
    # 2. Reverse rows
    for i in range(n):
        matrix[i].reverse()
```
