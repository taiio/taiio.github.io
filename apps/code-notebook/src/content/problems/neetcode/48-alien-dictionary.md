---
title: Alien Dictionary
number: 48
source: NeetCode
category: Graphs
difficulty: Hard
tags: Array, String, Depth-First Search, Breadth-First Search, Graph, Topological Sort
url: https://neetcode.io/problems/foreign-dictionary
---

## Problem
There is a new alien language that uses the English alphabet. However, the order among letters is unknown to you.

You are given a list of strings `words` from the alien language's dictionary, where the strings in `words` are **sorted lexicographically** by the rules of this new language.

Return *a string of the unique letters in the new alien language sorted in **lexicographically increasing order** by the new language's rules*. If there is no solution, return `""`. If there are multiple solutions, return **any of them**.

### Examples

**Example 1:**
```text
Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"
```

**Example 2:**
```text
Input: words = ["z","x"]
Output: "zx"
```

**Example 3:**
```text
Input: words = ["z","x","z"]
Output: ""
Explanation: The order is invalid, so return "".
```

### Constraints
- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` consists of only lowercase English letters.

## Hints
- Compare adjacent pairs of words to find the first differing character `(w1[j], w2[j])`, adding a directed edge `w1[j] -> w2[j]`.
- If `w1` is longer than `w2` and `w2` is a prefix of `w1`, the ordering is invalid; return empty string immediately.
- Perform Topological Sort on the constructed DAG. If a cycle is detected, return empty string.

## Template
```typescript
function alienOrder(words: string[]): string {
  // TODO
}
```

```python
def alienOrder(words: list[str]) -> str:
    # TODO
    pass
```

## Solution: Topological Sort / Kahn's BFS (Optimal)
- time: O(Total characters across all words)
- space: O(V + E) where V <= 26

### Explanation
Extract order rules by comparing adjacent words. Build a DAG of characters and compute topological sort order.

### Walkthrough
- Initialize adjacency set and in-degree map for all unique characters.
- Compare adjacent words `w1` and `w2`:
-   If `w1.startsWith(w2)` and `w1.length > w2.length`, return `''` (invalid prefix ordering).
-   Find first index `j` where `w1[j] !== w2[j]`. Add edge `w1[j] -> w2[j]` and increment in-degree of `w2[j]`.
- Enqueue characters with in-degree 0.
- Process queue (BFS): append character to result, decrement neighbor in-degrees, enqueue if in-degree becomes 0.
- If result length equals total unique characters, return result; else return `''` (cycle detected).

```typescript
function alienOrder(words: string[]): string {
  const adj = new Map<string, Set<string>>();
  const inDegree = new Map<string, number>();

  for (const word of words) {
    for (const char of word) {
      if (!adj.has(char)) adj.set(char, new Set());
      if (!inDegree.has(char)) inDegree.set(char, 0);
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);

    if (w1.length > w2.length && w1.startsWith(w2)) {
      return '';
    }

    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        if (!adj.get(w1[j])!.has(w2[j])) {
          adj.get(w1[j])!.add(w2[j]);
          inDegree.set(w2[j], inDegree.get(w2[j])! + 1);
        }
        break;
      }
    }
  }

  const queue: string[] = [];
  for (const [char, deg] of inDegree.entries()) {
    if (deg === 0) queue.push(char);
  }

  let result = '';
  while (queue.length > 0) {
    const curr = queue.shift()!;
    result += curr;

    for (const neighbor of adj.get(curr)!) {
      inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result.length === inDegree.size ? result : '';
}
```

```python
from collections import deque

def alienOrder(words: list[str]) -> str:
    adj = {c: set() for w in words for c in w}
    in_degree = {c: 0 for c in adj}
    
    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i + 1]
        min_len = min(len(w1), len(w2))
        
        if len(w1) > len(w2) and w1.startswith(w2):
            return ""
            
        for j in range(min_len):
            if w1[j] != w2[j]:
                if w2[j] not in adj[w1[j]]:
                    adj[w1[j]].add(w2[j])
                    in_degree[w2[j]] += 1
                break
                
    queue = deque([c for c in in_degree if in_degree[c] == 0])
    result = []
    
    while queue:
        c = queue.popleft()
        result.append(c)
        for neighbor in adj[c]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
                
    return "".join(result) if len(result) == len(in_degree) else ""
```
