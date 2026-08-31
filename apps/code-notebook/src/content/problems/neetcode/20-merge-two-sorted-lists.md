---
title: Merge Two Sorted Lists
number: 20
source: NeetCode
category: Linked List
difficulty: Easy
tags: Linked List, Recursion
url: https://neetcode.io/problems/merge-two-sorted-linked-lists
---

## Problem
You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

### Examples

**Example 1:**
```text
Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
Output: [1, 1, 2, 3, 4, 4]
```

**Example 2:**
```text
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**
```text
Input: list1 = [], list2 = [0]
Output: [0]
```

### Constraints
- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in non-decreasing order.

## Hints
- Use a dummy head node to simplify edge cases.
- Compare the current values of `list1` and `list2`, appending the smaller node to your merged list.

## Template
```typescript
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // TODO
}
```

```python
def mergeTwoLists(list1: ListNode | None, list2: ListNode | None) -> ListNode | None:
    # TODO
    pass
```

## Solution: Iterative with Dummy Node (Optimal)
- time: O(n + m)
- space: O(1)

### Explanation
Create a dummy head node. Iterate while both lists have nodes, attaching the smaller node to the merged list.

### Walkthrough
- Create `dummy = new ListNode(0)` and `curr = dummy`.
- While `list1 !== null` and `list2 !== null`:
-   If `list1.val <= list2.val`:
-     `curr.next = list1`; `list1 = list1.next`.
-   Else:
-     `curr.next = list2`; `list2 = list2.next`.
-   `curr = curr.next`.
- Attach remaining non-null list: `curr.next = list1 ?? list2`.
- Return `dummy.next`.

```typescript
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let curr = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 !== null ? list1 : list2;
  return dummy.next;
}
```

```python
def mergeTwoLists(list1: ListNode | None, list2: ListNode | None) -> ListNode | None:
    dummy = ListNode(0)
    curr = dummy
    
    while list1 and list2:
        if list1.val <= list2.val:
            curr.next = list1
            list1 = list1.next
        else:
            curr.next = list2
            list2 = list2.next
        curr = curr.next
        
    curr.next = list1 if list1 else list2
    return dummy.next
```
