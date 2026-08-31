---
title: Add Two Numbers
number: 24
source: NeetCode
category: Linked List
difficulty: Medium
tags: Linked List, Math, Recursion
url: https://neetcode.io/problems/add-two-numbers
---

## Problem
You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Examples

**Example 1:**
```text
Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
Output: [7, 0, 8]
Explanation: 342 + 465 = 807.
```

**Example 2:**
```text
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 3:**
```text
Input: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
Output: [8, 9, 9, 9, 0, 0, 0, 1]
```

### Constraints
- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

## Hints
- Traverse both linked lists simultaneously from head to tail.
- Keep track of the `carry` across additions (`sum = v1 + v2 + carry`).
- Create a new node with `sum % 10` and update `carry = Math.floor(sum / 10)`.

## Template
```typescript
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // TODO
}
```

```python
def addTwoNumbers(l1: ListNode | None, l2: ListNode | None) -> ListNode | None:
    # TODO
    pass
```

## Solution: Digit-by-Digit with Carry (Optimal)
- time: O(max(m, n))
- space: O(max(m, n)) for output list

### Explanation
Simulate column addition from lowest to highest significance digit, carrying over 1 when sum >= 10.

### Walkthrough
- Initialize `dummy = new ListNode(0)`, `curr = dummy`, and `carry = 0`.
- While `l1 !== null`, `l2 !== null`, or `carry !== 0`:
-   `v1 = l1 ? l1.val : 0`
-   `v2 = l2 ? l2.val : 0`
-   `sum = v1 + v2 + carry`
-   `carry = Math.floor(sum / 10)`
-   `curr.next = new ListNode(sum % 10)`
-   `curr = curr.next`
-   Advance `l1` and `l2` if present.
- Return `dummy.next`.

```typescript
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const v1 = l1 !== null ? l1.val : 0;
    const v2 = l2 !== null ? l2.val : 0;

    const sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
}
```

```python
def addTwoNumbers(l1: ListNode | None, l2: ListNode | None) -> ListNode | None:
    dummy = ListNode(0)
    curr = dummy
    carry = 0
    
    while l1 or l2 or carry:
        v1 = l1.val if l1 else 0
        v2 = l2.val if l2 else 0
        
        total = v1 + v2 + carry
        carry = total // 10
        curr.next = ListNode(total % 10)
        curr = curr.next
        
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next
            
    return dummy.next
```
