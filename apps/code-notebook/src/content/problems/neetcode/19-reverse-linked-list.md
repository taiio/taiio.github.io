---
title: Reverse Linked List
number: 19
source: NeetCode
category: Linked List
difficulty: Easy
tags: Linked List, Recursion
url: https://neetcode.io/problems/reverse-a-linked-list
---

## Problem
Given the `head` of a singly linked list, reverse the list, and return the **reversed list**.

### Examples

**Example 1:**
```text
Input: head = [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
```

**Example 2:**
```text
Input: head = [1, 2]
Output: [2, 1]
```

**Example 3:**
```text
Input: head = []
Output: []
```

### Constraints
- The number of nodes in the list is the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

## Hints
- Maintain three pointers during iteration: `prev`, `curr`, and `next`.
- Save `curr.next`, redirect `curr.next = prev`, then shift `prev = curr` and `curr = next`.

## Template
```typescript
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // TODO
}
```

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head: ListNode | None) -> ListNode | None:
    # TODO
    pass
```

## Solution: Iterative (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Iterate through the list, reversing each node's pointer to point to the previous node.

### Walkthrough
- Initialize `prev = null` and `curr = head`.
- While `curr !== null`:
-   Save `nextTemp = curr.next`.
-   Reverse pointer: `curr.next = prev`.
-   Move `prev = curr`.
-   Move `curr = nextTemp`.
- Return `prev` (new head).

```typescript
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null) {
    const nextTemp: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
}
```

```python
def reverseList(head: ListNode | None) -> ListNode | None:
    prev = None
    curr = head
    
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
        
    return prev
```

## Solution: Recursive
- time: O(n)
- space: O(n) call stack

### Explanation
Recursively reach the end of the list, then reverse pointers on the unwinding phase.

### Walkthrough
- Base case: if `head === null` or `head.next === null`, return `head`.
- Recursively reverse the rest of list: `newHead = reverseList(head.next)`.
- Make the next node point back to current: `head.next.next = head`.
- Break original forward pointer: `head.next = null`.
- Return `newHead`.

```typescript
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}
```

```python
def reverseList(head: ListNode | None) -> ListNode | None:
    if not head or not head.next:
        return head
        
    new_head = reverseList(head.next)
    head.next.next = head
    head.next = None
    
    return new_head
```
