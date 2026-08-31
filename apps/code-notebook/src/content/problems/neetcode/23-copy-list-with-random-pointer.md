---
title: Copy List with Random Pointer
number: 23
source: NeetCode
category: Linked List
difficulty: Medium
tags: Hash Table, Linked List
url: https://neetcode.io/problems/copy-linked-list-with-random-pointer
---

## Problem
A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a **deep copy** of the list. The deep copy should consist of exactly `n` **brand new** nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state.

Return the head of the copied linked list.

### Examples

**Example 1:**
```text
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
```

### Constraints
- `0 <= n <= 1000`
- `-10^4 <= Node.val <= 10^4`
- `Node.random` is `null` or is pointing to some node in the linked list.

## Hints
- We can use a Hash Map `old_node -> new_node`.
- Pass 1: create clone of each node and store in map.
- Pass 2: assign `clone.next = map.get(curr.next)` and `clone.random = map.get(curr.random)`.

## Template
```typescript
class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node | null, random?: Node | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: Node | null): Node | null {
  // TODO
}
```

```python
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random

def copyRandomList(head: 'Node') -> 'Node':
    # TODO
    pass
```

## Solution: Hash Map (Optimal)
- time: O(n)
- space: O(n)

### Explanation
Use a hash map to map each original node to its newly created clone node in two passes.

### Walkthrough
- Create map `clones = new Map()` mapping `null -> null`.
- Pass 1: Traverse original list, create `new Node(curr.val)` for each node and record `clones.set(curr, clone)`.
- Pass 2: Traverse original list again, set `clones.get(curr).next = clones.get(curr.next)` and `clones.get(curr).random = clones.get(curr.random)`.
- Return `clones.get(head)`.

```typescript
function copyRandomList(head: Node | null): Node | null {
  if (!head) return null;

  const oldToNew = new Map<Node, Node>();

  let curr: Node | null = head;
  while (curr) {
    oldToNew.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    const clone = oldToNew.get(curr)!;
    clone.next = curr.next ? oldToNew.get(curr.next)! : null;
    clone.random = curr.random ? oldToNew.get(curr.random)! : null;
    curr = curr.next;
  }

  return oldToNew.get(head)!;
}
```

```python
def copyRandomList(head: 'Node') -> 'Node':
    if not head:
        return None
        
    old_to_new = {None: None}
    
    curr = head
    while curr:
        old_to_new[curr] = Node(curr.val)
        curr = curr.next
        
    curr = head
    while curr:
        copy = old_to_new[curr]
        copy.next = old_to_new[curr.next]
        copy.random = old_to_new[curr.random]
        curr = curr.next
        
    return old_to_new[head]
```
