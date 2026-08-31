---
title: House Robber
number: 54
source: NeetCode
category: 1-D Dynamic Programming
difficulty: Medium
tags: Array, Dynamic Programming
url: https://neetcode.io/problems/house-robber
---

## Problem
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight **without alerting the police**.

### Examples

**Example 1:**
```text
Input: nums = [1, 2, 3, 1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount = 1 + 3 = 4.
```

**Example 2:**
```text
Input: nums = [2, 7, 9, 3, 1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount = 2 + 9 + 1 = 12.
```

### Constraints
- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

## Hints
- At house `i`, you have two choices: rob house `i` (adding `nums[i] + maxRob(i - 2)`), or skip house `i` (`maxRob(i - 1)`).
- Recurrence: `dp[i] = max(dp[i - 1], nums[i] + dp[i - 2])`.
- Can be reduced to O(1) space with two variables `rob1` and `rob2`.

## Template
```typescript
function rob(nums: number[]): number {
  // TODO
}
```

```python
def rob(nums: list[int]) -> int:
    # TODO
    pass
```

## Solution: Dynamic Programming with O(1) Space (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Iterate through each house, updating two variables tracking maximum profit up to the previous house and two houses prior.

### Walkthrough
- Initialize `rob1 = 0` and `rob2 = 0`.
- For each `num` in `nums`:
-   `temp = max(num + rob1, rob2)`.
-   `rob1 = rob2`.
-   `rob2 = temp`.
- Return `rob2`.

```typescript
function rob(nums: number[]): number {
  let rob1 = 0;
  let rob2 = 0;

  for (const num of nums) {
    const temp = Math.max(num + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
}
```

```python
def rob(nums: list[int]) -> int:
    rob1, rob2 = 0, 0
    for num in nums:
        temp = max(num + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    return rob2
```
