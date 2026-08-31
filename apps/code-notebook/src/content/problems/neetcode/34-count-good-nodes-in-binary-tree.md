---
title: Count Good Nodes in Binary Tree
number: 34
source: NeetCode
category: Trees
difficulty: Medium
tags: Tree, Depth-First Search, Breadth-First Search, Binary Tree
url: https://neetcode.io/problems/count-good-nodes-in-binary-tree
---

## Problem
Given a binary tree `root`, a node `X` in the tree is named **good** if in the path from the root to `X` there are no nodes with a value greater than `X`.

Return the number of **good** nodes in the binary tree.

### Examples

**Example 1:**
```text
Input: root = [3, 1, 4, 3, null, 1, 5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3, 4) is the maximum value in the path.
Node 5 -> (3, 4, 5) is the maximum value in the path.
Node 3 -> (3, 1, 3) is the maximum value in the path.
```

**Example 2:**
```text
Input: root = [3, 3, null, 4, 2]
Output: 3
```

**Example 3:**
```text
Input: root = [1]
Output: 1
```

### Constraints
- The number of nodes in the binary tree is in the range `[1, 10^5]`.
- Each node's value is between `[-10^4, 10^4]`.

## Hints
- Pass the maximum value seen so far along the path as a parameter in DFS.
- If `node.val >= max_so_far`, this node is good; increment count and update `max_so_far`.

## Template
```typescript
function goodNodes(root: TreeNode | null): number {
  // TODO
}
```

```python
def goodNodes(root: TreeNode) -> int:
    # TODO
    pass
```

## Solution: DFS with Running Maximum (Optimal)
- time: O(n)
- space: O(h) call stack

### Explanation
Perform DFS, passing down the maximum value encountered along the path from root to current node.

### Walkthrough
- Define helper `dfs(node, maxVal)`:
-   If `node === null`, return 0.
-   `isGood = node.val >= maxVal ? 1 : 0`.
-   `newMax = Math.max(maxVal, node.val)`.
-   Return `isGood + dfs(node.left, newMax) + dfs(node.right, newMax)`.
- Call `dfs(root, root.val)` and return count.

```typescript
function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  function dfs(node: TreeNode | null, maxVal: number): number {
    if (!node) return 0;

    let count = node.val >= maxVal ? 1 : 0;
    const newMax = Math.max(maxVal, node.val);

    count += dfs(node.left, newMax);
    count += dfs(node.right, newMax);

    return count;
  }

  return dfs(root, root.val);
}
```

```python
def goodNodes(root: TreeNode) -> int:
    if not root:
        return 0
        
    def dfs(node, max_val):
        if not node:
            return 0
            
        count = 1 if node.val >= max_val else 0
        new_max = max(max_val, node.val)
        
        count += dfs(node.left, new_max)
        count += dfs(node.right, new_max)
        
        return count
        
    return dfs(root, root.val)
```
