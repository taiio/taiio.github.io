---
title: Number of 1 Bits
number: 72
source: NeetCode
category: Bit Manipulation
difficulty: Easy
tags: Divide and Conquer, Bit Manipulation
url: https://neetcode.io/problems/number-of-one-bits
---

## Problem
Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).

### Examples

**Example 1:**
```text
Input: n = 11
Output: 3
Explanation: The input binary string 1011 has a total of three set bits.
```

**Example 2:**
```text
Input: n = 128
Output: 1
Explanation: The input binary string 10000000 has a total of one set bit.
```

**Example 3:**
```text
Input: n = 2147483645
Output: 30
```

### Constraints
- `1 <= n <= 2^31 - 1`

## Hints
- `n & (n - 1)` clears the lowest set bit of `n`.
- Repeat until `n` becomes 0, counting iterations.

## Template
```typescript
function hammingWeight(n: number): number {
  // TODO
}
```

```python
def hammingWeight(n: int) -> int:
    # TODO
    pass
```

## Solution: Brian Kernighan's Bit Trick (Optimal)
- time: O(k) where k is the number of 1-bits (<= 32)
- space: O(1)

### Explanation
Perform `n = n & (n - 1)` which removes the lowest set bit of n in each iteration.

### Walkthrough
- Initialize `count = 0`.
- While `n !== 0`:
-   `n = n & (n - 1)`.
-   `count++`.
- Return `count`.

```typescript
function hammingWeight(n: number): number {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}
```

```python
def hammingWeight(n: int) -> int:
    count = 0
    while n:
        n &= n - 1
        count += 1
    return count
```
