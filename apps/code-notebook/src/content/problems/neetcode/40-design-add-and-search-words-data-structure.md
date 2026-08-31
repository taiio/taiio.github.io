---
title: Design Add and Search Words Data Structure
number: 40
source: NeetCode
category: Tries
difficulty: Medium
tags: String, Depth-First Search, Design, Trie
url: https://neetcode.io/problems/design-word-search-data-structure
---

## Problem
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the `WordDictionary` class:
- `WordDictionary()` Initializes the object.
- `void addWord(word)` Adds `word` to the data structure, it can be matched later.
- `bool search(word)` Returns `true` if there is any string in the data structure that matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.

### Examples

**Example 1:**
```text
Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]
```

### Constraints
- `1 <= word.length <= 25`
- `word` in `addWord` consists of lowercase English letters.
- `word` in `search` consist of `'.'` or lowercase English letters.
- At most `10^4` calls will be made to `addWord` and `search`.

## Hints
- Use a Trie to store words.
- For standard letters, traverse to the matching child.
- When encountering `'.' `, use DFS to explore all possible non-null children at the current node.

## Template
```typescript
class WordDictionary {
  constructor() {
    // TODO
  }

  addWord(word: string): void {
    // TODO
  }

  search(word: string): boolean {
    // TODO
  }
}
```

```python
class WordDictionary:
    def __init__(self):
        # TODO
        pass

    def addWord(self, word: str) -> None:
        # TODO
        pass

    def search(self, word: str) -> bool:
        # TODO
        pass
```

## Solution: Trie with DFS Wildcard Matching (Optimal)
- time: addWord: O(L), search: O(26^L) worst case, O(L) average
- space: O(Total characters)

### Explanation
Store words in a Trie. In search, if character is `.` iterate over all existing children recursively.

### Walkthrough
- `addWord(word)`: Standard Trie insertion.
- `search(word)`: Helper `dfs(node, index)`:
-   If `index === word.length`, return `node.isEnd`.
-   If `word[index] === '.'`:
-     Try `dfs(child, index + 1)` for every child of `node`. If any returns true, return true.
-   Else if `node.children.has(word[index])`:
-     Return `dfs(node.children.get(word[index]), index + 1)`.
-   Return false.

```typescript
class WordNode {
  children: Map<string, WordNode> = new Map();
  isEnd: boolean = false;
}

class WordDictionary {
  root: WordNode;

  constructor() {
    this.root = new WordNode();
  }

  addWord(word: string): void {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children.has(char)) {
        curr.children.set(char, new WordNode());
      }
      curr = curr.children.get(char)!;
    }
    curr.isEnd = true;
  }

  search(word: string): boolean {
    function dfs(node: WordNode, index: number): boolean {
      if (index === word.length) {
        return node.isEnd;
      }

      const char = word[index];
      if (char === '.') {
        for (const child of node.children.values()) {
          if (dfs(child, index + 1)) return true;
        }
        return false;
      } else {
        if (!node.children.has(char)) return false;
        return dfs(node.children.get(char)!, index + 1);
      }
    }

    return dfs(this.root, 0);
  }
}
```

```python
class WordNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class WordDictionary:
    def __init__(self):
        self.root = WordNode()

    def addWord(self, word: str) -> None:
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = WordNode()
            curr = curr.children[char]
        curr.is_end = True

    def search(self, word: str) -> bool:
        def dfs(node, index):
            if index == len(word):
                return node.is_end
                
            char = word[index]
            if char == '.':
                for child in node.children.values():
                    if dfs(child, index + 1):
                        return True
                return False
            else:
                if char not in node.children:
                    return False
                return dfs(node.children[char], index + 1)
                
        return dfs(self.root, 0)
```
