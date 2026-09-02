---
title: Contains Duplicate
number: 217
source: LeetCode
category: Arrays & Hashing
difficulty: Easy
tags: Array, Hash Table
url: https://leetcode.com/problems/contains-duplicate/
---

## Problem
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**Example 1:**
```
Input: nums = [1, 2, 3, 1]
Output: true
```
Explanation: the value 1 appears at index 0 and index 3.

**Example 2:**
```
Input: nums = [1, 2, 3, 4]
Output: false
```
Explanation: all elements are distinct.

**Example 3:**
```
Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
```

**Constraints:**
- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Hints
- The slowest approach is comparing every pair of elements (brute force) — O(n²), not great for large arrays.
- If you sort the array first, duplicate values end up next to each other, so a single pass can detect them.
- Using a data structure with O(1) average lookup (a Hash Set) to track values you've already seen is the fastest approach, needing only one pass through the array.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function hasDuplicate(nums: number[]): boolean {
  // TODO
  return false;
}
```

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
The most direct approach is to compare every element against every other element that comes after it. If any pair matches, a duplicate exists.

### Walkthrough
- For each index `i`, loop through every index `j > i`.
- If `nums[i] === nums[j]`, return `true`.
- If no match is found after checking all pairs, return `false`.

```typescript
function hasDuplicate(nums: number[]): boolean {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}
```

## Solution: Sorting
- time: O(n log n)
- space: O(1) (excluding space used by the sort algorithm itself)

### Explanation
If we sort the array in ascending order, two equal elements (if any) must end up adjacent to each other. So after sorting, we only need one pass, comparing each element to the one right before it.

### Walkthrough
- Sort `nums` in ascending order.
- Iterate from index 1 to the end.
- If `nums[i] === nums[i - 1]`, a duplicate exists, so return `true`.
- If the loop finishes without finding a match, return `false`.

```typescript
function hasDuplicate(nums: number[]): boolean {
  const sorted = [...nums].sort((a, b) => a - b);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      return true;
    }
  }
  return false;
}
```

## Solution: Hash Set
- time: O(n)
- space: O(n)

### Explanation
We use a Hash Set to keep track of values seen so far while scanning the array. For each new element, we check whether it's already in the set: if so, we've found a duplicate and return `true` immediately; otherwise we add it and continue. Since Hash Set lookups and insertions are O(1) on average, the whole algorithm only needs a single O(n) pass.

### Walkthrough
- Initialize an empty set `seen`.
- For each number `n` in `nums`:
  - If `n` is already in `seen`, return `true`.
  - Otherwise, add `n` to `seen`.
- If the loop finishes with no duplicate found, return `false`.

```typescript
function hasDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const n of nums) {
    if (seen.has(n)) {
      return true;
    }
    seen.add(n);
  }
  return false;
}
```

## Solution: Length Comparison Shortcut (Set Size Trick)
- time: O(n)
- space: O(n)

### Explanation
A Hash Set can never contain duplicate values by definition. So if we convert the whole array into a Set, the resulting Set will only be smaller than the original array if at least one duplicate was removed during the conversion. This gives a very short one-line-style check, at the cost of always building the full set even when a duplicate is found early (so it doesn't short-circuit like the previous solution).

### Walkthrough
- Build a `Set` from all elements in `nums`.
- Compare `set.size` to `nums.length`.
- If they differ, a duplicate existed, so return `true`; otherwise return `false`.

```typescript
function hasDuplicate(nums: number[]): boolean {
  const uniqueValues = new Set(nums);
  return uniqueValues.size !== nums.length;
}
```
