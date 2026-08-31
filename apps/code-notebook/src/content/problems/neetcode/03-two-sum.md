---
title: Two Sum
number: 3
source: NeetCode
category: Arrays & Hashing
difficulty: Easy
tags: Array, Hash Table
url: https://neetcode.io/problems/two-integer-sum
---

## Problem
Given an array of integers `nums` and an integer `target`, return indices of the **two numbers** such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

### Examples

**Example 1:**
```text
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**
```text
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]
```

**Example 3:**
```text
Input: nums = [3, 3], target = 6
Output: [0, 1]
```

### Constraints
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

## Hints
- A brute force approach tests every pair (i, j) with i < j in O(n^2).
- For each element nums[i], we are looking for a complement value `target - nums[i]`.
- Can we look up the complement in O(1) time using a Hash Map?

## Template
```typescript
function twoSum(nums: number[], target: number): number[] {
  // TODO
}
```

```python
def twoSum(nums: list[int], target: number) -> list[int]:
    # TODO
    pass
```

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
Iterate through every pair of elements and check if their sum matches target.

### Walkthrough
- Loop index i from 0 to n - 1.
- Loop index j from i + 1 to n - 1.
- Check if nums[i] + nums[j] == target. If so, return [i, j].
- Return empty array if no pair found.

```typescript
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
```

```python
def twoSum(nums: list[int], target: int) -> list[int]:
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
```

## Solution: One-Pass Hash Map (Optimal)
- time: O(n)
- space: O(n)

### Explanation
Store value-to-index mappings in a hash map as we iterate. For each element, look up its complement `target - nums[i]`.

### Walkthrough
- Initialize an empty map `seen` storing number -> index.
- Iterate through the array with index `i` and value `nums[i]`.
- Compute `complement = target - nums[i]`.
- If `complement` exists in `seen`, return `[seen[complement], i]`.
- Otherwise, insert `nums[i] -> i` into `seen`.

```typescript
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }
    seen.set(nums[i], i);
  }
  return [];
}
```

```python
def twoSum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
```

## Solution: Two-Pass Hash Map
- time: O(n)
- space: O(n)

### Explanation
First populate the hash map with all elements, then in a second pass check for complements.

### Walkthrough
- Build a map of all element values to their indices.
- Iterate through nums again, calculate complement = target - nums[i].
- If complement is in map and map[complement] != i, return [i, map[complement]].

```typescript
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement)! !== i) {
      return [i, map.get(complement)!];
    }
  }
  return [];
}
```

```python
def twoSum(nums: list[int], target: int) -> list[int]:
    val_map = {num: i for i, num in enumerate(nums)}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in val_map and val_map[complement] != i:
            return [i, val_map[complement]]
    return []
```
