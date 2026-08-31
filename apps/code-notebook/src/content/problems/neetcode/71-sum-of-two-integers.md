---
title: Sum of Two Integers
number: 71
source: NeetCode
category: Bit Manipulation
difficulty: Medium
tags: Math, Bit Manipulation
url: https://neetcode.io/problems/sum-of-two-integers
---

## Problem
Given two integers `a` and `b`, return the sum of the two integers without using the operators `+` and `-`.

### Examples

**Example 1:**
```text
Input: a = 1, b = 2
Output: 3
```

**Example 2:**
```text
Input: a = 2, b = 3
Output: 5
```

### Constraints
- `-1000 <= a, b <= 1000`

## Hints
- Addition without carry is XOR: `a ^ b`.
- Carry is `(a & b) << 1`.
- Repeat until carry is 0.

## Template
```typescript
function getSum(a: number, b: number): number {
  // TODO
}
```

```python
def getSum(a: int, b: int) -> int:
    # TODO
    pass
```

## Solution: Bitwise XOR and AND Carry (Optimal)
- time: O(1) (at most 32 operations)
- space: O(1)

### Explanation
Use XOR `a ^ b` for addition without carry, and AND with left-shift `(a & b) << 1` to compute carry.

### Walkthrough
- While `b !== 0`:
-   Calculate `carry = (a & b) << 1`.
-   Calculate `a = a ^ b`.
-   Set `b = carry`.
- Return `a`.

```typescript
function getSum(a: number, b: number): number {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
}
```

```python
def getSum(a: int, b: int) -> int:
    mask = 0xFFFFFFFF
    
    while b != 0:
        carry = ((a & b) << 1) & mask
        a = (a ^ b) & mask
        b = carry
        
    return a if a <= 0x7FFFFFFF else ~(a ^ mask)
```
