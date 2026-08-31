---
title: Validate Binary Search Tree
number: 35
source: NeetCode
category: Trees
difficulty: Medium
tags: Tree, Depth-First Search, Binary Search Tree, Binary Tree
url: https://neetcode.io/problems/valid-binary-search-tree
---

## Problem
Given the `root` of a binary tree, *determine if it is a valid binary search tree (BST)*.

A **valid BST** is defined as follows:
- The left subtree of a node contains only nodes with keys **strictly less than** the node's key.
- The right subtree of a node contains only nodes with keys **strictly greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

### Examples

**Example 1:**
```text
Input: root = [2, 1, 3]
Output: true
```

**Example 2:**
```text
Input: root = [5, 1, 4, null, null, 3, 6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

### Constraints
- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-2^31 <= Node.val <= 2^31 - 1`

## Hints
- A node must be greater than all ancestors where it is in the right subtree, and smaller than all ancestors where it is in the left subtree.
- Pass `(min_allowed, max_allowed)` bounds down the recursion.
- Alternatively, an in-order traversal of a valid BST must yield strictly increasing values.

## Template
```typescript
function isValidBST(root: TreeNode | null): boolean {
  // TODO
}
```

```python
def isValidBST(root: TreeNode | None) -> bool:
    # TODO
    pass
```

## Solution: DFS with Valid Range (Optimal)
- time: O(n)
- space: O(h) call stack

### Explanation
Recursively validate that each node's value falls strictly within the open interval `(minBound, maxBound)`.

### Walkthrough
- Define helper `validate(node, minBound, maxBound)`.
- If `node === null`, return true.
- If `node.val <= minBound` or `node.val >= maxBound`, return false.
- Recursively validate left subtree: `validate(node.left, minBound, node.val)`.
- Recursively validate right subtree: `validate(node.right, node.val, maxBound)`.
- Return `validate(root, -Infinity, Infinity)`.

```typescript
function isValidBST(root: TreeNode | null): boolean {
  function validate(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;

    return (
      validate(node.left, min, node.val) &&
      validate(node.right, node.val, max)
    );
  }

  return validate(root, -Infinity, Infinity);
}
```

```python
def isValidBST(root: TreeNode | None) -> bool:
    def validate(node, min_bound, max_bound):
        if not node:
            return True
        if not (min_bound < node.val < max_bound):
            return False
            
        return validate(node.left, min_bound, node.val) and validate(node.right, node.val, max_bound)
        
    return validate(root, float('-inf'), float('inf'))
```
