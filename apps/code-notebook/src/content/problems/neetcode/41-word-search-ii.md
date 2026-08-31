---
title: Word Search II
number: 41
source: NeetCode
category: Tries
difficulty: Hard
tags: Array, String, Backtracking, Trie, Matrix
url: https://neetcode.io/problems/search-for-word-ii
---

## Problem
Given an `m x n` `board` of characters and a list of strings `words`, return *all words on the board*.

Each word must be constructed from letters of sequentially adjacent cells, where **adjacent cells** are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

### Examples

**Example 1:**
```text
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
```

**Example 2:**
```text
Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
```

### Constraints
- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 12`
- `board[i][j]` is a lowercase English letter.
- `1 <= words.length <= 3 * 10^4`
- `1 <= words[i].length <= 10`
- `words[i]` consists of lowercase English letters.
- All the strings of `words` are unique.

## Hints
- Searching for each word individually on the board is too slow.
- Insert all target words into a Trie (Prefix Tree).
- DFS across the board starting from each cell, traversing the Trie simultaneously.

## Template
```typescript
function findWords(board: string[][], words: string[]): string[] {
  // TODO
}
```

```python
def findWords(board: list[list[str]], words: list[str]) -> list[str]:
    # TODO
    pass
```

## Solution: Trie + Backtracking DFS (Optimal)
- time: O(m * n * 4^L)
- space: O(Total word characters)

### Explanation
Insert all words into a Trie. Explore board with DFS, pruning paths whenever current board prefix is not in the Trie.

### Walkthrough
- Build Trie from `words`, storing the full word string at terminal nodes `node.word`.
- For each cell `(r, c)`, if `root.children.has(board[r][c])`, launch DFS.
- In `dfs(r, c, node)`:
-   If `node.word`, add to `result` and set `node.word = null` to prevent duplicates.
-   Mark `board[r][c] = '#'`.
-   Visit 4 neighboring cells that exist in `node.children`.
-   Restore `board[r][c]`.
- Return `result`.

```typescript
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  word: string | null = null;
}

function findWords(board: string[][], words: string[]): string[] {
  const root = new TrieNode();
  for (const w of words) {
    let curr = root;
    for (const c of w) {
      if (!curr.children.has(c)) {
        curr.children.set(c, new TrieNode());
      }
      curr = curr.children.get(c)!;
    }
    curr.word = w;
  }

  const rows = board.length;
  const cols = board[0].length;
  const result: string[] = [];

  function dfs(r: number, c: number, node: TrieNode) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || !node.children.has(board[r][c])) {
      return;
    }

    const char = board[r][c];
    const nextNode = node.children.get(char)!;

    if (nextNode.word) {
      result.push(nextNode.word);
      nextNode.word = null; // Avoid duplicate additions
    }

    board[r][c] = '#';
    dfs(r + 1, c, nextNode);
    dfs(r - 1, c, nextNode);
    dfs(r, c + 1, nextNode);
    dfs(r, c - 1, nextNode);
    board[r][c] = char;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dfs(r, c, root);
    }
  }

  return result;
}
```

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None

def findWords(board: list[list[str]], words: list[str]) -> list[str]:
    root = TrieNode()
    for w in words:
        curr = root
        for c in w:
            if c not in curr.children:
                curr.children[c] = TrieNode()
            curr = curr.children[c]
        curr.word = w
        
    rows, cols = len(board), len(board[0])
    result = []
    
    def dfs(r, c, node):
        if r < 0 or r >= rows or c < 0 or c >= cols or board[r][c] not in node.children:
            return
            
        char = board[r][c]
        next_node = node.children[char]
        
        if next_node.word:
            result.append(next_node.word)
            next_node.word = None
            
        board[r][c] = '#'
        dfs(r + 1, c, next_node)
        dfs(r - 1, c, next_node)
        dfs(r, c + 1, next_node)
        dfs(r, c - 1, next_node)
        board[r][c] = char
        
    for r in range(rows):
        for c in range(cols):
            dfs(r, c, root)
            
    return result
```
