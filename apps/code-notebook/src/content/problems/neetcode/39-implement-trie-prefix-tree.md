---
title: Implement Trie (Prefix Tree)
number: 39
source: NeetCode
category: Tries
difficulty: Medium
tags: Hash Table, String, Design, Trie
url: https://neetcode.io/problems/implement-prefix-tree
---

## Problem
A **trie** (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:
- `Trie()` Initializes the trie object.
- `void insert(String word)` Inserts the string `word` into the trie.
- `boolean search(String word)` Returns `true` if the string `word` is in the trie (i.e., was inserted before), and `false` otherwise.
- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.

### Examples

**Example 1:**
```text
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
```

### Constraints
- `1 <= word.length, prefix.length <= 2000`
- `word` and `prefix` consist only of lowercase English letters.
- At most `3 * 10^4` calls in total will be made to `insert`, `search`, and `startsWith`.

## Hints
- Each TrieNode has a hash map or array of children pointing to other TrieNodes and an `isEndOfWord` boolean flag.
- Traverse character by character from the root node.

## Template
```typescript
class Trie {
  constructor() {
    // TODO
  }

  insert(word: string): void {
    // TODO
  }

  search(word: string): boolean {
    // TODO
  }

  startsWith(prefix: string): boolean {
    // TODO
  }
}
```

```python
class Trie:
    def __init__(self):
        # TODO
        pass

    def insert(self, word: str) -> None:
        # TODO
        pass

    def search(self, word: str) -> bool:
        # TODO
        pass

    def startsWith(self, prefix: str) -> bool:
        # TODO
        pass
```

## Solution: Trie Node with Hash Map Children (Optimal)
- time: insert: O(L), search: O(L), startsWith: O(L)
- space: O(Total inserted characters)

### Explanation
Build a multi-way tree where each node holds references to child nodes for subsequent characters and a boolean marker `isEnd`.

### Walkthrough
- Create class `TrieNode` with `children = {}` and `isEnd = false`.
- `insert(word)`: starting at root, traverse each character, creating missing nodes along the path. Set `isEnd = true` on the final node.
- `search(word)`: traverse character by character. If node missing, return false. Return `curr.isEnd`.
- `startsWith(prefix)`: traverse prefix. If all characters present, return true.

```typescript
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd: boolean = false;
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode());
      }
      curr = curr.children.get(char)!;
    }
    curr.isEnd = true;
  }

  search(word: string): boolean {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children.has(char)) {
        return false;
      }
      curr = curr.children.get(char)!;
    }
    return curr.isEnd;
  }

  startsWith(prefix: string): boolean {
    let curr = this.root;
    for (const char of prefix) {
      if (!curr.children.has(char)) {
        return false;
      }
      curr = curr.children.get(char)!;
    }
    return true;
  }
}
```

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]
        curr.is_end = True

    def search(self, word: str) -> bool:
        curr = self.root
        for char in word:
            if char not in curr.children:
                return False
            curr = curr.children[char]
        return curr.is_end

    def startsWith(self, prefix: str) -> bool:
        curr = self.root
        for char in prefix:
            if char not in curr.children:
                return False
            curr = curr.children[char]
        return True
```
