---
title: Two Sum
number: 1
source: LeetCode
category: Arrays & Hashing
difficulty: Easy
tags: Array, Hash Table
url: https://leetcode.com/problems/two-sum/
---

## Problem
Given an integer array `nums` and an integer `target`, return the indices of the two numbers in the array such that they add up to `target`.

You may assume that each input has exactly one solution, and you may not use the same element twice. You can return the answer in any order.

**Example 1:**
```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
```
Explanation: because `nums[0] + nums[1] = 2 + 7 = 9`.

**Example 2:**
```
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]
```

**Example 3:**
```
Input: nums = [3, 3], target = 6
Output: [0, 1]
```

**Constraints:**
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Exactly one valid answer exists.

## Hints
- The simplest approach is to try every pair of elements (two nested loops) — O(n²).
- For each element `nums[i]`, the number you need to complete the pair is exactly `target - nums[i]`. The question becomes: "has this value appeared somewhere in the array, and at what index?"
- Using a Hash Map to store (value → index) for elements you've already visited lets you look up the missing complement in O(1), solving the problem in a single O(n) pass.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function twoSum(nums: number[], target: number): number[] {
  // TODO
  return [];
}
```

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
The most direct approach is to try every pair of indices `(i, j)` with `i < j`, checking whether `nums[i] + nums[j]` equals `target`. Since the problem guarantees exactly one solution, we can return as soon as we find a matching pair.

### Walkthrough
- Iterate `i` from `0` to `n - 1`.
- For each `i`, iterate `j` from `i + 1` to `n - 1`.
- If `nums[i] + nums[j] === target`, return `[i, j]`.

```typescript
function twoSum(nums: number[], target: number): number[] {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
```

## Solution: Two-Pass Hash Map
- time: O(n)
- space: O(n)

### Explanation
As a stepping stone toward the fully optimized one-pass version, we can first build a Hash Map of every value to its index, then do a second pass checking, for each element, whether its complement exists in the map (making sure it isn't the same index as itself). This is a bit less elegant than the one-pass version below, but it's a natural way to arrive at the idea.

### Walkthrough
- Build a Hash Map `indexOf` mapping every value in `nums` to its index (later duplicates overwrite earlier ones, which is fine since we guard against reusing the same index).
- For each index `i`, compute `complement = target - nums[i]`.
- If `complement` is in `indexOf` and `indexOf[complement] !== i`, return `[i, indexOf[complement]]`.

```typescript
function twoSum(nums: number[], target: number): number[] {
  const indexOf = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    indexOf.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const j = indexOf.get(complement);
    if (j !== undefined && j !== i) {
      return [i, j];
    }
  }

  return [];
}
```

## Solution: One-Pass Hash Map
- time: O(n)
- space: O(n)

### Explanation
Instead of searching for the missing element with a nested loop or building the map upfront, we can store the values we've already visited, along with their indices, in a Hash Map as we go. For each new element `nums[i]`, we compute the "complement" `complement = target - nums[i]` and check whether that value has already appeared in the Hash Map. If it has, we've immediately found the answer pair without needing a second pass at all.

### Walkthrough
- Initialize an empty Hash Map `seen` mapping value → index.
- Iterate through each element `nums[i]`:
  - Compute `complement = target - nums[i]`.
  - If `complement` is already in `seen`, return `[seen[complement], i]`.
  - Otherwise, store `nums[i] → i` in `seen` and continue.

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

## Solution: Sort + Two Pointers (Index-Preserving)
- time: O(n log n)
- space: O(n)

### Explanation
If we didn't need to return original indices, sorting the array and using two pointers moving inward from both ends would solve "does a pair sum to target" in O(n log n). Since the original indices matter here, we pair each value with its original index before sorting, so we can still recover the answer positions afterward. This is slower than the Hash Map solutions but useful to know as a pattern that generalizes to problems like 3Sum.

### Walkthrough
- Build an array of `[value, originalIndex]` pairs from `nums`.
- Sort this array by value.
- Set `left = 0` and `right = n - 1`.
- While `left < right`:
  - Compute `sum = sorted[left][0] + sorted[right][0]`.
  - If `sum === target`, return the two original indices (order doesn't matter).
  - If `sum < target`, move `left` forward.
  - If `sum > target`, move `right` backward.

```typescript
function twoSum(nums: number[], target: number): number[] {
  const indexed: [number, number][] = nums.map((value, index) => [value, index]);
  indexed.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = indexed.length - 1;

  while (left < right) {
    const sum = indexed[left][0] + indexed[right][0];
    if (sum === target) {
      return [indexed[left][1], indexed[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
```
