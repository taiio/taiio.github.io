---
title: Graph Valid Tree
number: 46
source: NeetCode
category: Graphs
difficulty: Medium
tags: Depth-First Search, Breadth-First Search, Union Find, Graph
url: https://neetcode.io/problems/valid-tree
---

## Problem
Given `n` nodes labeled from `0` to `n - 1` and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

### Examples

**Example 1:**
```text
Input: n = 5, edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
Output: true
```

**Example 2:**
```text
Input: n = 5, edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
Output: false
```

### Constraints
- `1 <= n <= 2000`
- `0 <= edges.length <= 5000`
- `edges[i].length == 2`
- `0 <= ai, bi < n`
- `ai != bi`
- There are no self-loops or repeated edges.

## Hints
- A graph is a valid tree if and only if it has exactly `n - 1` edges and is fully connected (no cycles).
- You can use Union-Find or BFS/DFS starting from node 0 to check if all nodes are visited without encountering cycles.

## Template
```typescript
function validTree(n: number, edges: number[][]): boolean {
  // TODO
}
```

```python
def validTree(n: int, edges: list[list[int]]) -> bool:
    # TODO
    pass
```

## Solution: DFS Cycle and Connectivity Check (Optimal)
- time: O(V + E)
- space: O(V + E)

### Explanation
A valid tree must have exactly n - 1 edges, no cycles, and all nodes must be reachable from node 0.

### Walkthrough
- If `edges.length !== n - 1`, return false immediately.
- Build adjacency list for the undirected graph.
- Use DFS starting from node 0, keeping track of `visited` set and `parent` node.
- If a neighbor is already visited and is not the parent, a cycle exists; return false.
- After DFS, verify `visited.size === n`.

```typescript
function validTree(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) return false;

  const adj: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const visited = new Set<number>();

  function dfs(node: number, parent: number): boolean {
    visited.add(node);

    for (const neighbor of adj[node]) {
      if (neighbor === parent) continue;
      if (visited.has(neighbor)) return false;
      if (!dfs(neighbor, node)) return false;
    }

    return true;
  }

  return dfs(0, -1) && visited.size === n;
}
```

```python
def validTree(n: int, edges: list[list[int]]) -> bool:
    if len(edges) != n - 1:
        return False
        
    adj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
        
    visited = set()
    
    def dfs(node, parent):
        visited.add(node)
        for neighbor in adj[node]:
            if neighbor == parent:
                continue
            if neighbor in visited or not dfs(neighbor, node):
                return False
        return True
        
    return dfs(0, -1) and len(visited) == n
```
