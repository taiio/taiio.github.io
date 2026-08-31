---
title: Clone Graph
number: 43
source: NeetCode
category: Graphs
difficulty: Medium
tags: Hash Table, Depth-First Search, Breadth-First Search, Graph
url: https://neetcode.io/problems/clone-graph
---

## Problem
Given a reference of a node in a **connected** undirected graph.

Return a **deep copy** (clone) of the graph.

Each node in the graph contains a value (`int`) and a list (`List[Node]`) of its neighbors.

```text
class Node {
    public int val;
    public List<Node> neighbors;
}
```

### Examples

**Example 1:**
```text
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
```

### Constraints
- The number of nodes in the graph is in the range `[0, 100]`.
- `1 <= Node.val <= 100`
- `Node.val` is unique for each node.
- There are no repeated edges and no self-loops in the graph.

## Hints
- Use a Hash Map `old_node -> cloned_node` to avoid infinite loops in cyclic graphs.
- Traverse the graph with DFS or BFS, creating clones and linking cloned neighbors.

## Template
```typescript
class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: GraphNode | null): GraphNode | null {
  // TODO
}
```

```python
class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def cloneGraph(node: 'Node') -> 'Node':
    # TODO
    pass
```

## Solution: DFS with Hash Map (Optimal)
- time: O(V + E)
- space: O(V)

### Explanation
Maintain a hash map mapping original nodes to cloned nodes. Clone nodes recursively during DFS traversal.

### Walkthrough
- If `node === null`, return `null`.
- Initialize map `cloned = new Map()`.
- Define helper `dfs(curr)`:
-   If `cloned.has(curr)`, return `cloned.get(curr)`.
-   Create `copy = new GraphNode(curr.val)`.
-   `cloned.set(curr, copy)`.
-   For each neighbor of `curr`, `copy.neighbors.push(dfs(neighbor))`.
-   Return `copy`.
- Return `dfs(node)`.

```typescript
function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (!node) return null;

  const cloned = new Map<GraphNode, GraphNode>();

  function dfs(curr: GraphNode): GraphNode {
    if (cloned.has(curr)) {
      return cloned.get(curr)!;
    }

    const copy = new GraphNode(curr.val);
    cloned.set(curr, copy);

    for (const neighbor of curr.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  }

  return dfs(node);
}
```

```python
def cloneGraph(node: 'Node') -> 'Node':
    if not node:
        return None
        
    cloned = {}
    
    def dfs(curr):
        if curr in cloned:
            return cloned[curr]
            
        copy = Node(curr.val)
        cloned[curr] = copy
        
        for neighbor in curr.neighbors:
            copy.neighbors.append(dfs(neighbor))
            
        return copy
        
    return dfs(node)
```
