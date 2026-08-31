---
title: Binary Tree Level Order Traversal
number: 32
source: NeetCode
category: Trees
difficulty: Medium
tags: Tree, Breadth-First Search, Binary Tree
url: https://neetcode.io/problems/level-order-traversal-of-binary-tree
---

## Problem
Given the `root` of a binary tree, return the **level order traversal** of its nodes' values. (i.e., from left to right, level by level).

### Examples

**Example 1:**
```text
Input: root = [3, 9, 20, null, null, 15, 7]
Output: [[3], [9, 20], [15, 7]]
```

**Example 2:**
```text
Input: root = [1]
Output: [[1]]
```

**Example 3:**
```text
Input: root = []
Output: []
```

### Constraints
- The number of nodes in the tree is in the range `[0, 2000]`.
- `-1000 <= Node.val <= 1000`

## Hints
- Use Breadth-First Search (BFS) with a queue.
- At each level, record `queue.length` before processing so you only dequeue nodes belonging to that specific level.

## Template
```typescript
function levelOrder(root: TreeNode | null): number[][] {
  // TODO
}
```

```python
def levelOrder(root: TreeNode | None) -> list[list[int]]:
    # TODO
    pass
```

## Solution: BFS with Queue (Optimal)
- time: O(n)
- space: O(n)

### Explanation
Process tree level by level using a queue. Snapshot the queue length at the start of each level to group node values.

### Walkthrough
- If `root === null`, return `[]`.
- Initialize `queue = [root]` and `result = []`.
- While `queue` is not empty:
-   `levelSize = queue.length`, `currentLevel = []`.
-   For `i` from 0 to `levelSize - 1`:
-     Dequeue `node = queue.shift()`.
-     Add `node.val` to `currentLevel`.
-     If `node.left`, push `node.left` to `queue`.
-     If `node.right`, push `node.right` to `queue`.
-   Push `currentLevel` to `result`.
- Return `result`.

```typescript
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
}
```

```python
from collections import deque

def levelOrder(root: TreeNode | None) -> list[list[int]]:
    if not root:
        return []
        
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        current_level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
                
        result.append(current_level)
        
    return result
```
