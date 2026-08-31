---
title: Remove Nth Node From End of List
number: 22
source: NeetCode
category: Linked List
difficulty: Medium
tags: Linked List, Two Pointers
url: https://neetcode.io/problems/remove-node-from-end-of-linked-list
---

## Problem
Given the `head` of a linked list, remove the `n-th` node from the end of the list and return its head.

### Examples

**Example 1:**
```text
Input: head = [1, 2, 3, 4, 5], n = 2
Output: [1, 2, 3, 5]
```

**Example 2:**
```text
Input: head = [1], n = 1
Output: []
```

**Example 3:**
```text
Input: head = [1, 2], n = 1
Output: [1]
```

### Constraints
- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

## Hints
- Use two pointers: `fast` and `slow` separated by `n` nodes.
- When `fast` reaches the end of the list, `slow` will be right before the node to be deleted.
- Use a dummy head to handle deleting the first node seamlessly.

## Template
```typescript
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // TODO
}
```

```python
def removeNthFromEnd(head: ListNode | None, n: int) -> ListNode | None:
    # TODO
    pass
```

## Solution: Two Pointers with Offset (Optimal)
- time: O(L) one pass
- space: O(1)

### Explanation
Advance `fast` pointer by `n` steps ahead of `slow`. Move both simultaneously until `fast` reaches the end. `slow.next` is then the node to remove.

### Walkthrough
- Create dummy node pointing to `head`.
- Set `fast = dummy` and `slow = dummy`.
- Advance `fast` by `n + 1` steps.
- Move both `fast` and `slow` forward one node at a time until `fast === null`.
- Set `slow.next = slow.next.next`.
- Return `dummy.next`.

```typescript
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let slow: ListNode | null = dummy;
  let fast: ListNode | null = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast!.next;
  }

  while (fast !== null) {
    slow = slow!.next;
    fast = fast.next;
  }

  slow!.next = slow!.next!.next;
  return dummy.next;
}
```

```python
def removeNthFromEnd(head: ListNode | None, n: int) -> ListNode | None:
    dummy = ListNode(0, head)
    slow = dummy
    fast = dummy
    
    for _ in range(n + 1):
        fast = fast.next
        
    while fast:
        slow = slow.next
        fast = fast.next
        
    slow.next = slow.next.next
    return dummy.next
```
