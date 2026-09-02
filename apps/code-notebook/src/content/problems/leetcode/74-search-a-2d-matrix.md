---
title: Search a 2D Matrix
number: 74
source: LeetCode
category: Binary Search
difficulty: Medium
tags: Array, Binary Search, Matrix
url: https://leetcode.com/problems/search-a-2d-matrix/
---

## Problem
You are given an `m x n` integer matrix `matrix` with the following two properties:
- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` if `target` is in `matrix`, or `false` otherwise.

You must write a solution in `O(log(m * n))` time complexity.

**Example 1:**
```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
```

**Example 2:**
```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```

**Constraints:**
- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-10^4 <= matrix[i][j], target <= 10^4`

## Hints
- Because each row is sorted and every row's values are all greater than the previous row's, the entire matrix can be treated as one big sorted array of length `m * n` if you flatten it conceptually.
- A two-step Binary Search — first search for the correct row using each row's first element, then binary search within that row — also works, but a single binary search over the flattened index space is simpler.
- To convert a flattened index `idx` (from `0` to `m*n - 1`) back into 2D coordinates, use `row = Math.floor(idx / n)` and `col = idx % n`, where `n` is the number of columns.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function searchMatrix(matrix: number[][], target: number): boolean {
  // TODO
  return false;
}
```

## Solution: Binary Search on Flattened Index
- time: O(log(m * n))
- space: O(1)

### Explanation
Since every row is sorted and each row's values are entirely greater than the previous row's, the matrix behaves exactly like one long sorted array if you read it row by row, left to right. We can binary search directly over this conceptual flattened array of length `m * n`, without physically flattening it — instead converting each candidate flattened index into its corresponding `(row, col)` position on the fly using integer division and modulo by the row width `n`.

### Walkthrough
- Let `m` be the number of rows and `n` be the number of columns; if the matrix is empty, return `false`.
- Initialize `left = 0` and `right = m * n - 1`.
- While `left <= right`:
  - Compute `mid = Math.floor((left + right) / 2)`.
  - Convert `mid` to matrix coordinates: `row = Math.floor(mid / n)`, `col = mid % n`.
  - Let `value = matrix[row][col]`.
  - If `value === target`, return `true`.
  - If `value < target`, set `left = mid + 1`.
  - Otherwise, set `right = mid - 1`.
- If the loop ends without finding the target, return `false`.

```typescript
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  if (m === 0) return false;
  const n = matrix[0].length;
  if (n === 0) return false;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    const value = matrix[row][col];

    if (value === target) {
      return true;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
```

## Solution: Two-Step Binary Search (Row, Then Column)
- time: O(log m + log n)
- space: O(1)

### Explanation
Instead of treating the matrix as one flattened array, we can search in two explicit stages, which mirrors how the problem's structure is described. First, binary search over the rows using each row's first element to find the one row that could possibly contain `target` (the last row whose first element is `<= target`). Then, binary search within that specific row for `target`. This is conceptually the same total work as the flattened approach (both are O(log(mn)) since `log m + log n = log(mn)`), but keeps the row-finding and column-finding steps separate, which some find easier to reason about or adapt to variants (like when only some matrix properties hold).

### Walkthrough
**Find the candidate row:**
- Initialize `top = 0` and `bottom = m - 1`.
- While `top <= bottom`:
  - Compute `midRow = Math.floor((top + bottom) / 2)`.
  - If `matrix[midRow][0] === target`, return `true` immediately.
  - If `matrix[midRow][0] < target`, set `top = midRow + 1`.
  - Otherwise, set `bottom = midRow - 1`.
- After the loop, `bottom` is the index of the last row whose first element is less than `target` — this is the only row that could contain `target` (if `bottom < 0`, no row qualifies, so return `false`).

**Binary search within that row:**
- Let `targetRow = matrix[bottom]`.
- Initialize `left = 0` and `right = targetRow.length - 1`.
- Standard binary search for `target` within `targetRow`; return `true` if found, `false` otherwise.

```typescript
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  if (m === 0) return false;

  let top = 0;
  let bottom = m - 1;

  while (top <= bottom) {
    const midRow = Math.floor((top + bottom) / 2);
    if (matrix[midRow][0] === target) return true;
    if (matrix[midRow][0] < target) {
      top = midRow + 1;
    } else {
      bottom = midRow - 1;
    }
  }

  if (bottom < 0) return false;

  const row = matrix[bottom];
  let left = 0;
  let right = row.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (row[mid] === target) {
      return true;
    } else if (row[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
```
