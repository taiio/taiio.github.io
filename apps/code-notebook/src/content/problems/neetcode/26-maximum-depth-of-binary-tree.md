---
title: Maximum Depth of Binary Tree
number: 26
source: NeetCode
category: Trees
difficulty: Easy
tags: Tree, Depth-First Search, Breadth-First Search, Binary Tree
url: https://neetcode.io/problems/depth-of-binary-tree
---

## Problem
Given the `root` of a binary tree, return its **maximum depth**.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Examples

**Example 1:**
```text
Input: root = [3, 9, 20, null, null, 15, 7]
Output: 3
```

**Example 2:**
```text
Input: root = [1, null, 2]
Output: 2
```

### Constraints
- The number of nodes in the tree is in the range `[0, 10^4]`.
- `-100 <= Node.val <= 100`

## Hints
- If node is null, depth is 0.
- Depth of a node is `1 + max(depth(left), depth(right))`.

## Template
```typescript
function maxDepth(root: TreeNode | null): number {
  // TODO
}
```

```python
def maxDepth(root: TreeNode | None) -> int:
    # TODO
    pass
```

## Solution: Recursive DFS (Optimal)
- time: O(n)
- space: O(h) call stack

### Explanation
The maximum depth of a binary tree is 1 plus the maximum depth of its left and right subtrees.

### Walkthrough
- Base case: if `root === null`, return 0.
- Recursively compute `maxDepth(root.left)` and `maxDepth(root.right)`.
- Return `1 + Math.max(leftDepth, rightDepth)`.

```typescript
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```

```python
def maxDepth(root: TreeNode | None) -> int:
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))
```

## Solution: Iterative BFS
- time: O(n)
- space: O(w)

### Explanation
Perform level-order traversal using a queue, incrementing depth counter for each level processed.

### Walkthrough
- If `root === null`, return 0.
- Initialize queue `[root]` and `level = 0`.
- While queue is not empty, dequeue all nodes at current level, enqueue their non-null children, and increment `level`.

```typescript
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let level = 0;
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }

  return level;
}
```

```python
from collections import deque

def maxDepth(root: TreeNode | None) -> int:
    if not root:
        return 0
        
    level = 0
    queue = deque([root])
    
    while queue:
        for _ in range(len(queue)):
            node = queue.popleft()
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        level += 1
        
    return level
```
