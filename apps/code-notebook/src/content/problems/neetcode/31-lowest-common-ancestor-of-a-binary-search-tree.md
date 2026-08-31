---
title: Lowest Common Ancestor of a Binary Search Tree
number: 31
source: NeetCode
category: Trees
difficulty: Medium
tags: Tree, Depth-First Search, Binary Search Tree, Binary Tree
url: https://neetcode.io/problems/lowest-common-ancestor-in-binary-search-tree
---

## Problem
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the **definition of LCA on Wikipedia**: "The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**)."

### Examples

**Example 1:**
```text
Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
```

**Example 2:**
```text
Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
```

### Constraints
- The number of nodes in the tree is in the range `[2, 10^5]`.
- `-10^9 <= Node.val <= 10^9`
- All `Node.val` are **unique**.
- `p != q` and `p` and `q` will exist in the BST.

## Hints
- Leverage the BST property: left child < root < right child.
- If both `p.val` and `q.val` are greater than `root.val`, LCA must be in the right subtree.
- If both `p.val` and `q.val` are less than `root.val`, LCA must be in the left subtree.
- If they split (one on each side) or one is equal to `root.val`, the current node is the LCA.

## Template
```typescript
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // TODO
}
```

```python
def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    # TODO
    pass
```

## Solution: Iterative BST Traversal (Optimal)
- time: O(h)
- space: O(1)

### Explanation
Traverse down the tree using BST ordering. The first node where paths to p and q split is their lowest common ancestor.

### Walkthrough
- Start `curr = root`.
- While `curr !== null`:
-   If both `p.val` and `q.val` > `curr.val`, move `curr = curr.right`.
-   Else if both `p.val` and `q.val` < `curr.val`, move `curr = curr.left`.
-   Else split point reached; return `curr`.

```typescript
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let curr = root;

  while (curr) {
    if (p!.val > curr.val && q!.val > curr.val) {
      curr = curr.right;
    } else if (p!.val < curr.val && q!.val < curr.val) {
      curr = curr.left;
    } else {
      return curr;
    }
  }

  return null;
}
```

```python
def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    curr = root
    while curr:
        if p.val > curr.val and q.val > curr.val:
            curr = curr.right
        elif p.val < curr.val and q.val < curr.val:
            curr = curr.left
        else:
            return curr
    return None
```
