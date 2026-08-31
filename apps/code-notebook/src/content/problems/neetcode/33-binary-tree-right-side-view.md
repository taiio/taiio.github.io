---
title: Binary Tree Right Side View
number: 33
source: NeetCode
category: Trees
difficulty: Medium
tags: Tree, Depth-First Search, Breadth-First Search, Binary Tree
url: https://neetcode.io/problems/binary-tree-right-side-view
---

## Problem
Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return the values of the nodes you can see ordered from top to bottom.

### Examples

**Example 1:**
```text
Input: root = [1, 2, 3, null, 5, null, 4]
Output: [1, 3, 4]
```

**Example 2:**
```text
Input: root = [1, null, 3]
Output: [1, 3]
```

**Example 3:**
```text
Input: root = []
Output: []
```

### Constraints
- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

## Hints
- In BFS level-order traversal, the right side view corresponds to the last element of each level.
- Alternatively, use DFS visiting the right child before the left child, adding the first node visited at each depth.

## Template
```typescript
function rightSideView(root: TreeNode | null): number[] {
  // TODO
}
```

```python
def rightSideView(root: TreeNode | None) -> list[int]:
    # TODO
    pass
```

## Solution: BFS Level-Order (Optimal)
- time: O(n)
- space: O(n)

### Explanation
Perform BFS level by level. The last node processed in each level is visible from the right side.

### Walkthrough
- If `root === null`, return `[]`.
- Initialize `queue = [root]` and `result = []`.
- While queue is non-empty:
-   `size = queue.length`.
-   For `i` from 0 to `size - 1`:
-     `node = queue.shift()`.
-     If `i === size - 1`, append `node.val` to `result`.
-     If `node.left`, push `node.left` to queue.
-     If `node.right`, push `node.right` to queue.
- Return `result`.

```typescript
function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      if (i === size - 1) {
        result.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}
```

```python
from collections import deque

def rightSideView(root: TreeNode | None) -> list[int]:
    if not root:
        return []
        
    result = []
    queue = deque([root])
    
    while queue:
        size = len(queue)
        for i in range(size):
            node = queue.popleft()
            if i == size - 1:
                result.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
                
    return result
```
