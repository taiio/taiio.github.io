---
title: Number of Connected Components in an Undirected Graph
number: 47
source: NeetCode
category: Graphs
difficulty: Medium
tags: Depth-First Search, Breadth-First Search, Union Find, Graph
url: https://neetcode.io/problems/count-connected-components
---

## Problem
You have a graph of `n` nodes. You are given an integer `n` and an array `edges` where `edges[i] = [ai, bi]` indicates that there is an edge between `ai` and `bi` in the graph.

Return the number of **connected components** in the graph.

### Examples

**Example 1:**
```text
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2
```

**Example 2:**
```text
Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1
```

### Constraints
- `1 <= n <= 2000`
- `1 <= edges.length <= 5000`
- `edges[i].length == 2`
- `0 <= ai <= bi < n`
- `ai != bi`
- There are no repeated edges.

## Hints
- Use Disjoint Set Union (Union-Find) initialized with `n` components.
- For each edge, decrement component count if the two endpoints belong to different sets.
- Alternatively, count how many times you start a new DFS/BFS on an unvisited node.

## Template
```typescript
function countComponents(n: number, edges: number[][]): number {
  // TODO
}
```

```python
def countComponents(n: int, edges: list[list[int]]) -> int:
    # TODO
    pass
```

## Solution: Disjoint Set Union / Union-Find (Optimal)
- time: O(V + E * α(V))
- space: O(V)

### Explanation
Initialize n disjoint sets. For each edge, merge the sets. If they were previously disconnected, decrement component count.

### Walkthrough
- Initialize `parent = [0, 1, ..., n - 1]` and `rank = [1] * n`.
- Set `components = n`.
- For each edge `[u, v]`, find roots `rootU` and `rootV`.
- If `rootU !== rootV`, union them by rank and decrement `components`.
- Return `components`.

```typescript
function countComponents(n: number, edges: number[][]): number {
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(1);
  let components = n;

  function find(x: number): number {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x: number, y: number): boolean {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) return false;

    if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY;
    } else if (rank[rootX] > rank[rootY]) {
      parent[rootY] = rootX;
    } else {
      parent[rootY] = rootX;
      rank[rootX]++;
    }

    components--;
    return true;
  }

  for (const [u, v] of edges) {
    union(u, v);
  }

  return components;
}
```

```python
def countComponents(n: int, edges: list[list[int]]) -> int:
    parent = list(range(n))
    rank = [1] * n
    components = n
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
        
    def union(x, y):
        nonlocal components
        root_x, root_y = find(x), find(y)
        if root_x == root_y:
            return False
            
        if rank[root_x] > rank[root_y]:
            parent[root_y] = root_x
        elif rank[root_x] < rank[root_y]:
            parent[root_x] = root_y
        else:
            parent[root_y] = root_x
            rank[root_x] += 1
            
        components -= 1
        return True
        
    for u, v in edges:
        union(u, v)
        
    return components
```
