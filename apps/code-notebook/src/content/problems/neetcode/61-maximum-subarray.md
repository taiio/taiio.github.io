---
title: Maximum Subarray
number: 61
source: NeetCode
category: Greedy
difficulty: Medium
tags: Array, Divide and Conquer, Dynamic Programming
url: https://neetcode.io/problems/max-subarray
---

## Problem
Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

### Examples

**Example 1:**
```text
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

**Example 2:**
```text
Input: nums = [1]
Output: 1
```

**Example 3:**
```text
Input: nums = [5,4,-1,7,8]
Output: 23
```

### Constraints
- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## Hints
- Whenever the running sum drops below 0, it won't help future subarrays, so reset running sum to 0.
- This is Kadane's Algorithm.

## Template
```typescript
function maxSubArray(nums: number[]): number {
  // TODO
}
```

```python
def maxSubArray(nums: list[int]) -> int:
    # TODO
    pass
```

## Solution: Kadane's Algorithm (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Iterate through the array, accumulating sum. If running sum becomes negative, reset it to 0. Update max sum at each step.

### Walkthrough
- Initialize `maxSum = nums[0]` and `curSum = 0`.
- For each `n` in `nums`:
-   If `curSum < 0`, reset `curSum = 0`.
-   `curSum += n`.
-   `maxSum = max(maxSum, curSum)`.
- Return `maxSum`.

```typescript
function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let curSum = 0;

  for (const n of nums) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += n;
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
}
```

```python
def maxSubArray(nums: list[int]) -> int:
    max_sum = nums[0]
    cur_sum = 0
    
    for n in nums:
        if cur_sum < 0:
            cur_sum = 0
        cur_sum += n
        max_sum = max(max_sum, cur_sum)
        
    return max_sum
```
