---
title: Valid Sudoku
number: 7
source: NeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, Matrix
url: https://neetcode.io/problems/valid-sudoku
---

## Problem
Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

**Note:**
- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated.

### Examples

**Example 1:**
```text
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

### Constraints
- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit `'1'-'9'` or `'.'`.

## Hints
- We can use hash sets to track seen digits in each row, column, and 3x3 box.
- For a cell at (r, c), which 3x3 box does it belong to? Index it using `(r // 3) * 3 + (c // 3)` or `(r // 3, c // 3)`.
- Iterate through the board in a single pass of 81 cells.

## Template
```typescript
function isValidSudoku(board: string[][]): boolean {
  // TODO
}
```

```python
def isValidSudoku(board: list[list[str]]) -> bool:
    # TODO
    pass
```

## Solution: Hash Set per Row, Col, and Box
- time: O(1) (fixed 9x9 board)
- space: O(1) (fixed 9x9 board)

### Explanation
Maintain 9 sets for rows, 9 sets for columns, and 9 sets for 3x3 sub-boxes. Traverse each cell once.

### Walkthrough
- Initialize 9 sets for rows, 9 sets for cols, and 9 sets for boxes.
- Iterate over row r from 0 to 8 and column c from 0 to 8.
- If board[r][c] is '.', continue.
- Compute box index `Math.floor(r / 3) * 3 + Math.floor(c / 3)`.
- If digit already in row[r], col[c], or box[boxIdx], return false.
- Otherwise add digit to row[r], col[c], and box[boxIdx].
- Return true if all filled cells are valid.

```typescript
function isValidSudoku(board: string[][]): boolean {
  const rows = Array.from({ length: 9 }, () => new Set<string>());
  const cols = Array.from({ length: 9 }, () => new Set<string>());
  const boxes = Array.from({ length: 9 }, () => new Set<string>());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === '.') continue;

      const boxIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(val) || cols[c].has(val) || boxes[boxIdx].has(val)) {
        return false;
      }

      rows[r].add(val);
      cols[c].add(val);
      boxes[boxIdx].add(val);
    }
  }

  return true;
}
```

```python
def isValidSudoku(board: list[list[str]]) -> bool:
    rows = [set() for _ in range(9)]
    cols = [set() for _ in range(9)]
    boxes = [set() for _ in range(9)]
    
    for r in range(9):
        for c in range(9):
            val = board[r][c]
            if val == '.':
                continue
            
            box_idx = (r // 3) * 3 + (c // 3)
            
            if val in rows[r] or val in cols[c] or val in boxes[box_idx]:
                return False
                
            rows[r].add(val)
            cols[c].add(val)
            boxes[box_idx].add(val)
            
    return True
```
