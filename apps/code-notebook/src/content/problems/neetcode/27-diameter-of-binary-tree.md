---
title: Diameter of Binary Tree
number: 27
source: NeetCode
category: Trees
difficulty: Easy
tags: Tree, Depth-First Search, Binary Tree
url: https://neetcode.io/problems/binary-tree-diameter
---

## Problem
Given the `root` of a binary tree, return the length of the **diameter** of the tree.

The **diameter** of a binary tree is the **length** of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.

The **length** of a path between two nodes is represented by the number of edges between them.

### Examples

**Example 1:**
```text
Input: root = [1, 2, 3, 4, 5]
Output: 3
Explanation: 3 is the length of the path [4, 2, 1, 3] or [5, 2, 1, 3].
```

**Example 2:**
```text
Input: root = [1, 2]
Output: 1
```

### Constraints
- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-100 <= Node.val <= 100`

## Hints
- The longest path passing through any node has length `height(left) + height(right)`.
- Maintain a global/closure variable for the max diameter encountered during a bottom-up DFS.

## Template
```typescript
function diameterOfBinaryTree(root: TreeNode | null): number {
  // TODO
}
```

```python
def diameterOfBinaryTree(root: TreeNode | None) -> int:
    # TODO
    pass
```

## Solution: Bottom-Up DFS (Optimal)
- time: O(n)
- space: O(h) call stack

### Explanation
At each node, compute the max height of its left and right subtrees. The longest path through that node is `leftHeight + rightHeight`.

### Walkthrough
- Initialize `maxDiameter = 0`.
- Define helper `height(node)`:
-   If node is null, return 0.
-   Calculate `left = height(node.left)` and `right = height(node.right)`.
-   Update `maxDiameter = max(maxDiameter, left + right)`.
-   Return `1 + max(left, right)`.
- Call `height(root)` and return `maxDiameter`.

```typescript
function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  function height(node: TreeNode | null): number {
    if (!node) return 0;
    const left = height(node.left);
    const right = height(node.right);

    maxDiameter = Math.max(maxDiameter, left + right);
    return 1 + Math.max(left, right);
  }

  height(root);
  return maxDiameter;
}
```

```python
def diameterOfBinaryTree(root: TreeNode | None) -> int:
    max_diameter = 0
    
    def height(node):
        nonlocal max_diameter
        if not node:
            return 0
        left = height(node.left)
        right = height(node.right)
        
        max_diameter = max(max_diameter, left + right)
        return 1 + max(left, right)
        
    height(root)
    return max_diameter
```
