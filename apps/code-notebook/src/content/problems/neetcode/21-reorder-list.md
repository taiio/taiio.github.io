---
title: Reorder List
number: 21
source: NeetCode
category: Linked List
difficulty: Medium
tags: Linked List, Two Pointers, Stack
url: https://neetcode.io/problems/reorder-linked-list
---

## Problem
You are given the head of a singly linked-list. The list can be represented as:

`L0 → L1 → … → Ln - 1 → Ln`

*Reorder the list to be on the following form:*

`L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …`

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

### Examples

**Example 1:**
```text
Input: head = [1, 2, 3, 4]
Output: [1, 4, 2, 3]
```

**Example 2:**
```text
Input: head = [1, 2, 3, 4, 5]
Output: [1, 5, 2, 4, 3]
```

### Constraints
- The number of nodes in the list is in the range `[1, 5 * 10^4]`.
- `1 <= Node.val <= 1000`

## Hints
- Find the middle of the linked list using slow and fast pointers.
- Reverse the second half of the linked list.
- Merge the two halves alternately (one node from first half, one from reversed second half).

## Template
```typescript
function reorderList(head: ListNode | null): void {
  // TODO
}
```

```python
def reorderList(head: ListNode | None) -> None:
    # TODO
    pass
```

## Solution: Find Mid + Reverse + Merge (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Find middle node with slow/fast pointers, reverse the second half, and interleave nodes from first and second halves.

### Walkthrough
- Find middle: `slow = head`, `fast = head.next`. Advance slow by 1, fast by 2 until fast reaches end.
- Split list: `second = slow.next`, `slow.next = null`.
- Reverse second half: reverse the list starting at `second`.
- Merge: Alternate linking nodes from `head` (first half) and reversed second half.

```typescript
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  // 1. Find middle
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // 2. Reverse second half
  let second: ListNode | null = slow!.next;
  slow!.next = null;
  let prev: ListNode | null = null;
  while (second) {
    const tmp = second.next;
    second.next = prev;
    prev = second;
    second = tmp;
  }

  // 3. Merge two halves
  let first: ListNode | null = head;
  second = prev;
  while (second) {
    const tmp1 = first!.next;
    const tmp2 = second.next;
    first!.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
}
```

```python
def reorderList(head: ListNode | None) -> None:
    if not head or not head.next:
        return
        
    # 1. Find middle
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
    # 2. Reverse second half
    second = slow.next
    slow.next = None
    prev = None
    while second:
        tmp = second.next
        second.next = prev
        prev = second
        second = tmp
        
    # 3. Interleave
    first, second = head, prev
    while second:
        tmp1, tmp2 = first.next, second.next
        first.next = second
        second.next = tmp1
        first, second = tmp1, tmp2
```
