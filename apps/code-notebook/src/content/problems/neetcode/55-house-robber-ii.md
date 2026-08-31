---
title: House Robber II
number: 55
source: NeetCode
category: 1-D Dynamic Programming
difficulty: Medium
tags: Array, Dynamic Programming
url: https://neetcode.io/problems/house-robber-ii
---

## Problem
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are **arranged in a circle**. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight **without alerting the police**.

### Examples

**Example 1:**
```text
Input: nums = [2, 3, 2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
```

**Example 2:**
```text
Input: nums = [1, 2, 3, 1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 4.
```

**Example 3:**
```text
Input: nums = [1, 2, 3]
Output: 3
```

### Constraints
- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

## Hints
- Because the houses are in a circle, you cannot rob both the first house and the last house.
- Run House Robber I on two sub-arrays: `nums[0...n-2]` (exclude last) and `nums[1...n-1]` (exclude first).
- Return `max(nums[0], robLinear(nums[0...n-2]), robLinear(nums[1...n-1]))`.

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

## Solution: Two Passes of Linear House Robber (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Since house 0 and house n - 1 are adjacent, compute max loot for slicing out the first house vs slicing out the last house.

### Walkthrough
- If `nums.length === 1`, return `nums[0]`.
- Define helper `robLinear(arr)`.
- Return `max(robLinear(nums without last), robLinear(nums without first))`.

```typescript
function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  function robLinear(arr: number[]): number {
    let rob1 = 0;
    let rob2 = 0;
    for (const n of arr) {
      const temp = Math.max(n + rob1, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }

  return Math.max(
    robLinear(nums.slice(0, nums.length - 1)),
    robLinear(nums.slice(1))
  );
}
```

```python
def rob(nums: list[int]) -> int:
    if len(nums) == 1:
        return nums[0]
        
    def rob_linear(arr):
        rob1, rob2 = 0, 0
        for n in arr:
            temp = max(n + rob1, rob2)
            rob1 = rob2
            rob2 = temp
        return rob2
        
    return max(rob_linear(nums[:-1]), rob_linear(nums[1:]))
```
