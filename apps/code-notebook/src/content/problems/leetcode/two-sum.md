---
title: Two Sum
number: 1
source: LeetCode
category: Array & Hashing
difficulty: Easy
tags: Array, Hash Table
url: https://leetcode.com/problems/two-sum/
---

## Problem
Given an array of integers `nums` and an integer `target`, return the indices of the **two numbers** such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

**Example:**
```text
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Hints
- Can we solve this faster than O(n²)?
- For each element, what is the required complement (target - nums[i]) — how can we look it up efficiently?
- An O(1) lookup data structure such as a Hash Map will significantly improve performance.

## Template
```typescript
function twoSum(nums: number[], target: number): number[] {
  // TODO: implement your solution here
  return [];
}
```

```python
def two_sum(nums: list[int], target: int) -> list[int]:
    # TODO: implement your solution here
    pass
```

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
Try all pairs `(i, j)` with `i < j` and check if their sum equals `target`. Simple, but slow for large arrays.

### Walkthrough
- Outer loop iterates `i` from 0 to `n-1`, inner loop iterates `j` from `i+1` to `n-1` — ensures every pair is checked once and no element is used twice.
- For each pair `(i, j)`, check if `nums[i] + nums[j] === target`.
- Return `[i, j]` immediately when a match is found.
- If no pair matches after scanning all elements, return an empty array.

```typescript
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}
```

```python
def two_sum(nums: list[int], target: int) -> list[int]:
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
```

## Solution: Hash Map
- time: O(n)
- space: O(n)

### Explanation
Iterate through the array once. For each element, check if `target - nums[i]` already exists in our hash map. If found, return the pair of indices immediately.

### Walkthrough
- Initialize an empty hash map `seen` storing `{value: index}`.
- For each element `nums[i]`, compute `need = target - nums[i]`.
- If `need` exists in `seen`, return `[seen.get(need), i]` immediately.
- Otherwise, record `nums[i]` with its index in `seen` and continue.

```typescript
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need)!, i];
    seen.set(nums[i], i);
  }
  return [];
}
```

```python
def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, n in enumerate(nums):
        need = target - n
        if need in seen:
            return [seen[need], i]
        seen[n] = i
    return []
```
