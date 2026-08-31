---
title: Longest Increasing Subsequence
number: 51
source: NeetCode
category: 1-D Dynamic Programming
difficulty: Medium
tags: Array, Binary Search, Dynamic Programming
url: https://neetcode.io/problems/longest-increasing-subsequence
---

## Problem
Given an integer array `nums`, return the length of the longest **strictly increasing subsequence**.

### Examples

**Example 1:**
```text
Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]
Output: 4
Explanation: The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4.
```

**Example 2:**
```text
Input: nums = [0, 1, 0, 3, 2, 3]
Output: 4
```

**Example 3:**
```text
Input: nums = [7, 7, 7, 7, 7, 7, 7]
Output: 1
```

### Constraints
- `1 <= nums.length <= 2500`
- `-10^4 <= nums[i] <= 10^4`

## Hints
- Standard DP: `dp[i]` is length of longest increasing subsequence ending at index i, giving O(n^2).
- Patience Sorting / Binary Search achieves O(n log n) by maintaining the smallest tail of all increasing subsequences of various lengths.

## Template
```typescript
function lengthOfLIS(nums: number[]): number {
  // TODO
}
```

```python
def lengthOfLIS(nums: list[int]) -> int:
    # TODO
    pass
```

## Solution: Dynamic Programming
- time: O(n²)
- space: O(n)

### Explanation
Let `dp[i]` be the length of the LIS ending at index `i`. Check all `j < i` where `nums[j] < nums[i]`.

### Walkthrough
- Initialize `dp` array of size `n` with 1s.
- For `i` from 1 to `n - 1`:
-   For `j` from 0 to `i - 1`:
-     If `nums[j] < nums[i]`, `dp[i] = max(dp[i], dp[j] + 1)`.
- Return `max(dp)`.

```typescript
function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}
```

```python
def lengthOfLIS(nums: list[int]) -> int:
    dp = [1] * len(nums)
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)
```

## Solution: Binary Search / Patience Sorting (Optimal)
- time: O(n log n)
- space: O(n)

### Explanation
Maintain an array `tails` where `tails[i]` stores the smallest tail of all increasing subsequences of length `i + 1`.

### Walkthrough
- Initialize empty array `tails`.
- For each `x` in `nums`:
-   Binary search for first element in `tails >= x`.
-   If no such element, append `x` to `tails`.
-   Else replace that element with `x`.
- Return `tails.length`.

```typescript
function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];

  for (const x of nums) {
    let l = 0;
    let r = tails.length;

    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (tails[mid] < x) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }

    if (l === tails.length) {
      tails.push(x);
    } else {
      tails[l] = x;
    }
  }

  return tails.length;
}
```

```python
import bisect

def lengthOfLIS(nums: list[int]) -> int:
    tails = []
    for x in nums:
        idx = bisect.bisect_left(tails, x)
        if idx == len(tails):
            tails.append(x)
        else:
            tails[idx] = x
    return len(tails)
```
