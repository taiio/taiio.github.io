---
title: Reverse Bits
number: 74
source: NeetCode
category: Bit Manipulation
difficulty: Easy
tags: Divide and Conquer, Bit Manipulation
url: https://neetcode.io/problems/reverse-bits
---

## Problem
Reverse bits of a given 32 bits unsigned integer.

### Examples

**Example 1:**
```text
Input: n = 00000010100101000001111010011100
Output: 964176192 (00111001011110000010100101000000)
```

**Example 2:**
```text
Input: n = 11111111111111111111111111111101
Output: 3221225471 (10111111111111111111111111111111)
```

### Constraints
- The input must be a binary string of length `32`.

## Hints
- Loop 32 times.
- Extract the lowest bit with `(n >> i) & 1`.
- Shift it to the reversed position: `bit << (31 - i)` and OR it into the result.

## Template
```typescript
function reverseBits(n: number): number {
  // TODO
}
```

```python
def reverseBits(n: int) -> int:
    # TODO
    pass
```

## Solution: Bit by Bit Extraction (Optimal)
- time: O(1) (32 iterations)
- space: O(1)

### Explanation
Iterate through all 32 bits, extracting the i-th bit and placing it at position 31 - i.

### Walkthrough
- Initialize `result = 0`.
- For `i` from 0 to 31:
-   `bit = (n >>> i) & 1`.
-   `result = result | (bit << (31 - i))`.
- Return unsigned 32-bit `result >>> 0`.

```typescript
function reverseBits(n: number): number {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    const bit = (n >>> i) & 1;
    result = (result | (bit << (31 - i))) >>> 0;
  }

  return result;
}
```

```python
def reverseBits(n: int) -> int:
    result = 0
    for i in range(32):
        bit = (n >> i) & 1
        result |= (bit << (31 - i))
    return result
```
