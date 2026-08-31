---
title: Product of Array Except Self
number: 6
source: NeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Prefix Sum
url: https://neetcode.io/problems/products-of-array-discluding-self
---

## Problem
Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

### Examples

**Example 1:**
```text
Input: nums = [1, 2, 3, 4]
Output: [24, 12, 8, 6]
```

**Example 2:**
```text
Input: nums = [-1, 1, 0, -3, 3]
Output: [0, 0, 9, 0, 0]
```

### Constraints
- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix is guaranteed to fit in a 32-bit integer.

## Hints
- Think about dividing the product into two parts: prefix product (everything before i) and suffix product (everything after i).
- Can we compute all prefix products in one forward pass and suffix products in one backward pass?
- Can we use the output array to store prefixes and maintain a running suffix variable to achieve O(1) extra space?

## Template
```typescript
function productExceptSelf(nums: number[]): number[] {
  // TODO
}
```

```python
def productExceptSelf(nums: list[int]) -> list[int]:
    # TODO
    pass
```

## Solution: Prefix and Suffix Arrays
- time: O(n)
- space: O(n)

### Explanation
Create two arrays `prefix` and `suffix` where `prefix[i]` is product of elements before i and `suffix[i]` is product of elements after i.

### Walkthrough
- Allocate `prefix` and `suffix` arrays of size n.
- Fill `prefix` from left to right: prefix[i] = prefix[i-1] * nums[i-1].
- Fill `suffix` from right to left: suffix[i] = suffix[i+1] * nums[i+1].
- Output[i] = prefix[i] * suffix[i].

```typescript
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const prefix = new Array(n).fill(1);
  const suffix = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  const res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = prefix[i] * suffix[i];
  }
  return res;
}
```

```python
def productExceptSelf(nums: list[int]) -> list[int]:
    n = len(nums)
    prefix = [1] * n
    suffix = [1] * n
    
    for i in range(1, n):
        prefix[i] = prefix[i - 1] * nums[i - 1]
        
    for i in range(n - 2, -1, -1):
        suffix[i] = suffix[i + 1] * nums[i + 1]
        
    return [prefix[i] * suffix[i] for i in range(n)]
```

## Solution: Prefix Product with Constant Extra Space (Optimal)
- time: O(n)
- space: O(1) extra space (excluding output array)

### Explanation
Store prefix products directly in the output array, then traverse backwards using a single scalar variable for suffix products.

### Walkthrough
- Initialize output array `res` of length n with `res[0] = 1`.
- Pass 1 (Left to Right): `res[i] = res[i - 1] * nums[i - 1]` to store prefix product.
- Initialize `suffix = 1`.
- Pass 2 (Right to Left): Multiply `res[i] *= suffix`, then update `suffix *= nums[i]`.
- Return `res`.

```typescript
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const res = new Array(n);

  res[0] = 1;
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
}
```

```python
def productExceptSelf(nums: list[int]) -> list[int]:
    n = len(nums)
    res = [1] * n
    
    for i in range(1, n):
        res[i] = res[i - 1] * nums[i - 1]
        
    suffix = 1
    for i in range(n - 1, -1, -1):
        res[i] *= suffix
        suffix *= nums[i]
        
    return res
```
