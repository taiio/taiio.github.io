---
title: Counting Bits
number: 73
source: NeetCode
category: Bit Manipulation
difficulty: Easy
tags: Dynamic Programming, Bit Manipulation
url: https://neetcode.io/problems/counting-bits
---

## Problem
Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (`0 <= i <= n`), `ans[i]` is the **number of** `1`**'s** in the binary representation of `i`.

### Examples

**Example 1:**
```text
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
```

**Example 2:**
```text
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```

### Constraints
- `0 <= n <= 10^5`

## Hints
- Notice that `i >> 1` shifts off the lowest bit.
- The number of 1s in `i` is `dp[i >> 1] + (i & 1)`.

## Template
```typescript
function countBits(n: number): number[] {
  // TODO
}
```

```python
def countBits(n: int) -> list[int]:
    # TODO
    pass
```

## Solution: DP Bit Shift Relation (Optimal)
- time: O(n)
- space: O(n) for output

### Explanation
The number of bits in `i` equals the number of bits in `i >> 1` plus `i & 1`.

### Walkthrough
- Initialize `dp` array of size `n + 1` with 0.
- For `i` from 1 to `n`:
-   `dp[i] = dp[i >> 1] + (i & 1)`.
- Return `dp`.

```typescript
function countBits(n: number): number[] {
  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }

  return dp;
}
```

```python
def countBits(n: int) -> list[int]:
    dp = [0] * (n + 1)
    for i in range(1, n + 1):
        dp[i] = dp[i >> 1] + (i & 1)
    return dp
```
