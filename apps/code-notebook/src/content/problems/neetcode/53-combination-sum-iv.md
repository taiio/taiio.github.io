---
title: Combination Sum IV
number: 53
source: NeetCode
category: 1-D Dynamic Programming
difficulty: Medium
tags: Array, Dynamic Programming, Memoization
url: https://neetcode.io/problems/combination-sum-iv
---

## Problem
Given an array of **distinct** integers `nums` and a target integer `target`, return the number of possible combinations that add up to `target`.

The test cases are generated so that the answer can fit in a **32-bit** integer.

Note that different permutations are counted as different combinations.

### Examples

**Example 1:**
```text
Input: nums = [1, 2, 3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
```

**Example 2:**
```text
Input: nums = [9], target = 3
Output: 0
```

### Constraints
- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 1000`
- All the elements of `nums` are **unique**.
- `1 <= target <= 1000`

## Hints
- Let `dp[total]` be the number of valid sequences summing to `total`.
- Base case: `dp[0] = 1`.
- For each `i` from 1 to `target`: `dp[i] = sum(dp[i - num])` for all `num <= i`.

## Template
```typescript
function combinationSum4(nums: number[], target: number): number {
  // TODO
}
```

```python
def combinationSum4(nums: list[int], target: int) -> int:
    # TODO
    pass
```

## Solution: Bottom-Up DP (Optimal)
- time: O(target * n)
- space: O(target)

### Explanation
Compute number of ways to reach every sub-target sum from 1 to `target` by summing ways from `target - num`.

### Walkthrough
- Initialize array `dp` of size `target + 1` with 0.
- Set `dp[0] = 1`.
- For `i` from 1 to `target`:
-   For each `num` in `nums`:
-     If `i - num >= 0`:
-       `dp[i] += dp[i - num]`.
- Return `dp[target]`.

```typescript
function combinationSum4(nums: number[], target: number): number {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
}
```

```python
def combinationSum4(nums: list[int], target: int) -> int:
    dp = [0] * (target + 1)
    dp[0] = 1
    
    for i in range(1, target + 1):
        for num in nums:
            if i - num >= 0:
                dp[i] += dp[i - num]
                
    return dp[target]
```
