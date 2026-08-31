---
title: Maximum Product Subarray
number: 57
source: NeetCode
category: 1-D Dynamic Programming
difficulty: Medium
tags: Array, Dynamic Programming
url: https://neetcode.io/problems/maximum-product-subarray
---

## Problem
Given an integer array `nums`, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a **32-bit** integer.

### Examples

**Example 1:**
```text
Input: nums = [2, 3, -2, 4]
Output: 6
Explanation: [2, 3] has the largest product 6.
```

**Example 2:**
```text
Input: nums = [-2, 0, -1]
Output: 0
Explanation: The result cannot be 2, because [-2, -1] is not a subarray.
```

### Constraints
- `1 <= nums.length <= 2 * 10^4`
- `-10 <= nums[i] <= 10`
- The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

## Hints
- Multiplying by a negative number can turn a minimum product into a maximum product.
- Track BOTH `currentMax` and `currentMin` at each step.
- When encountering a negative number, swap `currentMax` and `currentMin`.

## Template
```typescript
function maxProduct(nums: number[]): number {
  // TODO
}
```

```python
def maxProduct(nums: list[int]) -> int:
    # TODO
    pass
```

## Solution: Kadane-like Min/Max Tracking (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Maintain running min and max products. When encountering a negative number, they swap roles.

### Walkthrough
- Initialize `res = max(nums)`, `curMin = 1`, `curMax = 1`.
- For each `n` in `nums`:
-   If `n === 0`, reset `curMin = 1, curMax = 1`, continue.
-   `tempMax = curMax * n`.
-   `curMax = max(n * curMax, n * curMin, n)`.
-   `curMin = min(tempMax, n * curMin, n)`.
-   `res = max(res, curMax)`.
- Return `res`.

```typescript
function maxProduct(nums: number[]): number {
  let res = Math.max(...nums);
  let curMin = 1;
  let curMax = 1;

  for (const n of nums) {
    if (n === 0) {
      curMin = 1;
      curMax = 1;
      continue;
    }

    const temp = curMax * n;
    curMax = Math.max(n * curMax, n * curMin, n);
    curMin = Math.min(temp, n * curMin, n);

    res = Math.max(res, curMax);
  }

  return res;
}
```

```python
def maxProduct(nums: list[int]) -> int:
    res = max(nums)
    cur_min, cur_max = 1, 1
    
    for n in nums:
        if n == 0:
            cur_min, cur_max = 1, 1
            continue
            
        temp = cur_max * n
        cur_max = max(n * cur_max, n * cur_min, n)
        cur_min = min(temp, n * cur_min, n)
        
        res = max(res, cur_max)
        
    return res
```
