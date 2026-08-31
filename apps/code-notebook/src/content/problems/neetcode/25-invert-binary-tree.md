---
title: Invert Binary Tree
number: 25
source: NeetCode
category: Trees
difficulty: Easy
tags: Tree, Depth-First Search, Breadth-First Search, Binary Tree
url: https://neetcode.io/problems/invert-a-binary-tree
---

## Problem
Given the `root` of a binary tree, invert the tree, and return its root.

### Examples

**Example 1:**
```text
Input: root = [4, 2, 7, 1, 3, 6, 9]
Output: [4, 7, 2, 9, 6, 3, 1]
```

**Example 2:**
```text
Input: root = [2, 1, 3]
Output: [2, 3, 1]
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
- For every node, swap its left child and right child.
- Recursively invert the left and right subtrees.

## Template
```typescript
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function invertTree(root: TreeNode | null): TreeNode | null {
  // TODO
}
```

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invertTree(root: TreeNode | None) -> TreeNode | None:
    # TODO
    pass
```

## Solution: Recursive DFS (Optimal)
- time: O(n)
- space: O(h) call stack where h is tree height

### Explanation
Swap left and right children of current node, then recursively call invertTree on both children.

### Walkthrough
- If `root === null`, return `null`.
- Swap `root.left` and `root.right`.
- Recursively invert `root.left`.
- Recursively invert `root.right`.
- Return `root`.

```typescript
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
```

```python
def invertTree(root: TreeNode | None) -> TreeNode | None:
    if not root:
        return None
        
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    
    return root
```

## Solution: Iterative BFS
- time: O(n)
- space: O(w) where w is max width of tree

### Explanation
Use a queue to visit each node level by level, swapping left and right child pointers at each node.

### Walkthrough
- If `root === null`, return `null`.
- Initialize queue with `[root]`.
- While queue is not empty, pop node, swap its left and right children, and push children to queue if non-null.

```typescript
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
}
```

```python
from collections import deque

def invertTree(root: TreeNode | None) -> TreeNode | None:
    if not root:
        return None
        
    queue = deque([root])
    while queue:
        node = queue.popleft()
        node.left, node.right = node.right, node.left
        
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
            
    return root
```
