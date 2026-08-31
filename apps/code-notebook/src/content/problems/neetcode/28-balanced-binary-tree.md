---
title: Balanced Binary Tree
number: 28
source: NeetCode
category: Trees
difficulty: Easy
tags: Tree, Depth-First Search, Binary Tree
url: https://neetcode.io/problems/balanced-binary-tree
---

## Problem
Given a binary tree, determine if it is **height-balanced**.

A **height-balanced** binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

### Examples

**Example 1:**
```text
Input: root = [3, 9, 20, null, null, 15, 7]
Output: true
```

**Example 2:**
```text
Input: root = [1, 2, 2, 3, 3, null, null, 4, 4]
Output: false
```

**Example 3:**
```text
Input: root = []
Output: true
```

### Constraints
- The number of nodes in the tree is in the range `[0, 5000]`.
- `-10^4 <= Node.val <= 10^4`

## Hints
- A tree is balanced if `abs(height(left) - height(right)) <= 1` AND both left and right subtrees are balanced.
- Can we return `-1` from our height function as soon as any imbalance is detected to achieve O(n)?

## Template
```typescript
function isBalanced(root: TreeNode | null): boolean {
  // TODO
}
```

```python
def isBalanced(root: TreeNode | None) -> bool:
    # TODO
    pass
```

## Solution: Bottom-Up DFS with Early Exit (Optimal)
- time: O(n)
- space: O(h) call stack

### Explanation
Compute height recursively. If any subtree is unbalanced, propagate `-1` up immediately.

### Walkthrough
- Define helper `check(node)` returning height or -1 if unbalanced.
- If `node === null`, return 0.
- Recursively check `left = check(node.left)`. If -1, return -1.
- Recursively check `right = check(node.right)`. If -1, return -1.
- If `abs(left - right) > 1`, return -1.
- Return `1 + max(left, right)`.
- Tree is balanced if `check(root) !== -1`.

```typescript
function isBalanced(root: TreeNode | null): boolean {
  function check(node: TreeNode | null): number {
    if (!node) return 0;

    const left = check(node.left);
    if (left === -1) return -1;

    const right = check(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;

    return 1 + Math.max(left, right);
  }

  return check(root) !== -1;
}
```

```python
def isBalanced(root: TreeNode | None) -> bool:
    def check(node):
        if not node:
            return 0
        left = check(node.left)
        if left == -1:
            return -1
        right = check(node.right)
        if right == -1:
            return -1
            
        if abs(left - right) > 1:
            return -1
            
        return 1 + max(left, right)
        
    return check(root) != -1
```
