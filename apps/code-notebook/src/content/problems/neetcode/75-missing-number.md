---
title: Missing Number
number: 75
source: NeetCode
category: Bit Manipulation
difficulty: Easy
tags: Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting
url: https://neetcode.io/problems/missing-number
---

## Problem
Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

### Examples

**Example 1:**
```text
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 2:**
```text
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 3:**
```text
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
```

### Constraints
- `n == nums.length`
- `1 <= n <= 10^4`
- `0 <= nums[i] <= n`
- All the numbers of `nums` are **unique**.

## Hints
- Gauss formula: the expected sum of numbers `0...n` is `n * (n + 1) / 2`.
- The missing number is `expectedSum - sum(nums)`.
- Alternatively, XOR all indices `0...n` with all elements of `nums`. Duplicates cancel out, leaving the missing number.

## Template
```typescript
function missingNumber(nums: number[]): number {
  // TODO
}
```

```python
def missingNumber(nums: list[int]) -> int:
    # TODO
    pass
```

## Solution: XOR Bit Manipulation (Optimal)
- time: O(n)
- space: O(1)

### Explanation
XOR all indices from 0 to n together with all array elements. Every existing number appears twice (index and array element) and cancels out.

### Walkthrough
- Initialize `res = nums.length`.
- For `i` from 0 to `nums.length - 1`:
-   `res ^= i ^ nums[i]`.
- Return `res`.

```typescript
function missingNumber(nums: number[]): number {
  let res = nums.length;

  for (let i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i];
  }

  return res;
}
```

```python
def missingNumber(nums: list[int]) -> int:
    res = len(nums)
    for i, num in enumerate(nums):
        res ^= i ^ num
    return res
```

## Solution: Gauss Sum Formula
- time: O(n)
- space: O(1)

### Explanation
Calculate expected sum `n * (n + 1) / 2` and subtract the actual sum of elements in `nums`.

### Walkthrough
- Let `n = nums.length`.
- `expectedSum = n * (n + 1) / 2`.
- `actualSum = sum(nums)`.
- Return `expectedSum - actualSum`.

```typescript
function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((a, b) => a + b, 0);

  return expectedSum - actualSum;
}
```

```python
def missingNumber(nums: list[int]) -> int:
    n = len(nums)
    return (n * (n + 1)) // 2 - sum(nums)
```
