---
title: Product of Array Except Self
number: 238
source: LeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Prefix Sum
url: https://leetcode.com/problems/product-of-array-except-self/
---

## Problem
Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all elements of `nums` except `nums[i]`.

The algorithm must run in O(n) time, and you must solve it **without using the division operator**.

**Example 1:**
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

**Example 2:**
```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

**Constraints:**
- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

## Hints
- If division were allowed, you could compute the total product and divide by `nums[i]` for each position — but division is off the table here, and it also breaks when `nums` contains a zero.
- For each index `i`, the answer is the product of everything to its left multiplied by the product of everything to its right. Try computing "prefix products" and "suffix products" separately.
- You can avoid using extra arrays for prefix and suffix products by building the prefix products directly into the output array, then doing a second pass from the right, multiplying in the suffix product as you go — this keeps the algorithm at O(1) extra space (besides the output array).

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function productExceptSelf(nums: number[]): number[] {
  // TODO
  return [];
}
```

## Solution: Brute Force
- time: O(n²)
- space: O(1) extra space (not counting the output array)

### Explanation
The simplest approach directly follows the problem statement: for each index `i`, multiply together every element except `nums[i]`. This means, for every index, doing an inner loop over the rest of the array, which is quadratic overall.

### Walkthrough
- For each index `i` in `nums`:
  - Initialize `product = 1`.
  - Loop over every index `j`; if `j !== i`, multiply `product` by `nums[j]`.
  - Store `product` in `result[i]`.
- Return `result`.

```typescript
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i) {
        product *= nums[j];
      }
    }
    result[i] = product;
  }

  return result;
}
```

## Solution: Prefix and Suffix Arrays
- time: O(n)
- space: O(n)

### Explanation
For each index `i`, the answer is `(product of everything before i) * (product of everything after i)`. We can precompute a `prefix` array where `prefix[i]` holds the product of all elements before index `i`, and a `suffix` array where `suffix[i]` holds the product of all elements after index `i`. The final answer at each index is simply `prefix[i] * suffix[i]`.

### Walkthrough
- Build `prefix`, where `prefix[0] = 1` and `prefix[i] = prefix[i - 1] * nums[i - 1]` for `i > 0`.
- Build `suffix`, where `suffix[n - 1] = 1` and `suffix[i] = suffix[i + 1] * nums[i + 1]` for `i < n - 1`.
- Return an array where each element is `prefix[i] * suffix[i]`.

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

  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }
  return result;
}
```

## Solution: Single Output Array, O(1) Extra Space
- time: O(n)
- space: O(1) extra space (not counting the output array)

### Explanation
We can eliminate the separate `prefix` and `suffix` arrays entirely. First, fill the output array with prefix products (everything to the left of each index) directly. Then, in a second pass moving from right to left, keep a running suffix product variable and multiply it into each output cell as we go. This gives the same result while only using a single extra variable rather than two extra arrays, meeting the space-optimal version of the O(n) time requirement.

### Walkthrough
- Initialize `result` where `result[0] = 1`, then for `i` from `1` to `n - 1`, set `result[i] = result[i - 1] * nums[i - 1]` (this fills in prefix products).
- Initialize a running variable `suffix = 1`.
- Iterate `i` from `n - 1` down to `0`: multiply `result[i]` by `suffix`, then update `suffix *= nums[i]`.
- Return `result`.

```typescript
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}
```
