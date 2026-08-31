---
title: Same Tree
number: 29
source: NeetCode
category: Trees
difficulty: Easy
tags: Tree, Depth-First Search, Breadth-First Search, Binary Tree
url: https://neetcode.io/problems/same-binary-tree
---

## Problem
Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

### Examples

**Example 1:**
```text
Input: p = [1, 2, 3], q = [1, 2, 3]
Output: true
```

**Example 2:**
```text
Input: p = [1, 2], q = [1, null, 2]
Output: false
```

**Example 3:**
```text
Input: p = [1, 2, 1], q = [1, 1, 2]
Output: false
```

### Constraints
- The number of nodes in both trees is in the range `[0, 100]`.
- `-10^4 <= Node.val <= 10^4`

## Hints
- Check null conditions: if both are null, return true; if only one is null, return false.
- Check if current values match: `p.val === q.val`.
- Recursively check `isSameTree(p.left, q.left)` and `isSameTree(p.right, q.right)`.

## Template
```typescript
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // TODO
}
```

```python
def isSameTree(p: TreeNode | None, q: TreeNode | None) -> bool:
    # TODO
    pass
```

## Solution: Recursive DFS (Optimal)
- time: O(n)
- space: O(h) call stack

### Explanation
Compare the root values of both trees, then recursively verify that left subtrees and right subtrees match.

### Walkthrough
- If both `p` and `q` are null, return true.
- If one is null or `p.val !== q.val`, return false.
- Return `isSameTree(p.left, q.left) && isSameTree(p.right, q.right)`.

```typescript
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```

```python
def isSameTree(p: TreeNode | None, q: TreeNode | None) -> bool:
    if not p and not q:
        return True
    if not p or not q or p.val != q.val:
        return False
        
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
```
