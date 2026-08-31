---
title: Subtree of Another Tree
number: 30
source: NeetCode
category: Trees
difficulty: Easy
tags: Tree, Depth-First Search, String Matching, Binary Tree, Hash Function
url: https://neetcode.io/problems/subtree-of-a-binary-tree
---

## Problem
Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.

A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.

### Examples

**Example 1:**
```text
Input: root = [3, 4, 5, 1, 2], subRoot = [4, 1, 2]
Output: true
```

**Example 2:**
```text
Input: root = [3, 4, 5, 1, 2, null, null, null, null, 0], subRoot = [4, 1, 2]
Output: false
```

### Constraints
- The number of nodes in the `root` tree is in the range `[1, 2000]`.
- The number of nodes in the `subRoot` tree is in the range `[1, 1000]`.
- `-10^4 <= root.val <= 10^4`
- `-10^4 <= subRoot.val <= 10^4`

## Hints
- Use the `isSameTree` helper function.
- For every node in `root`, check if the subtree rooted at that node is identical to `subRoot`.
- If not, recursively check `isSubtree(root.left, subRoot)` or `isSubtree(root.right, subRoot)`.

## Template
```typescript
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  // TODO
}
```

```python
def isSubtree(root: TreeNode | None, subRoot: TreeNode | None) -> bool:
    # TODO
    pass
```

## Solution: Recursive DFS Matching (Optimal)
- time: O(m * n)
- space: O(h) call stack

### Explanation
Traverse tree `root`. At each node, check if the subtree rooted at that node is identical to `subRoot` using `isSameTree`.

### Walkthrough
- If `subRoot === null`, return true (an empty tree is always a subtree).
- If `root === null`, return false.
- If `isSameTree(root, subRoot)` is true, return true.
- Return `isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)`.

```typescript
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return true;
  if (!root) return false;

  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```

```python
def isSubtree(root: TreeNode | None, subRoot: TreeNode | None) -> bool:
    if not subRoot:
        return True
    if not root:
        return False
        
    if isSameTree(root, subRoot):
        return True
        
    return isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)

def isSameTree(p: TreeNode | None, q: TreeNode | None) -> bool:
    if not p and not q:
        return True
    if not p or not q or p.val != q.val:
        return False
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
```
