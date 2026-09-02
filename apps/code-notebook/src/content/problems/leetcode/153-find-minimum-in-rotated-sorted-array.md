---
title: Find Minimum in Rotated Sorted Array
number: 153
source: LeetCode
category: Binary Search
difficulty: Medium
tags: Array, Binary Search
url: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
---

## Problem
Suppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]` if it was rotated 4 times, or `[0,1,2,4,5,6,7]` if it was rotated 7 times.

Given the sorted rotated array `nums` of unique elements, return the minimum element of this array.

You must write an algorithm that runs in `O(log n)` time.

**Example 1:**
```
Input: nums = [3,4,5,1,2]
Output: 1
```
Explanation: the original array was [1,2,3,4,5] rotated 3 times.

**Example 2:**
```
Input: nums = [4,5,6,7,0,1,2]
Output: 0
```
Explanation: the original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

**Example 3:**
```
Input: nums = [11,13,15,17]
Output: 11
```
Explanation: the original array was [11,13,15,17] and it was rotated 4 times.

**Constraints:**
- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- All the integers of `nums` are unique.
- `nums` is sorted and rotated between `1` and `n` times.

## Hints
- Scanning the array to find the minimum works but is O(n), which doesn't meet the O(log n) requirement — we need to exploit the fact that the array is a rotation of a sorted array.
- In a rotated sorted array, there's exactly one point where the order "breaks" (where an element is smaller than the one before it) — that break point is the minimum. Everything before the break is part of a sorted run starting at the original first element; everything from the break onward is part of a sorted run ending at the original last element.
- Use Binary Search: compare `nums[mid]` to `nums[right]`. If `nums[mid] > nums[right]`, the minimum must be somewhere in the right half (the break point hasn't been reached yet), so move `left` past `mid`. If `nums[mid] < nums[right]`, the right half is fully sorted, so the minimum is at `mid` or somewhere in the left half, so move `right` to `mid`.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function findMin(nums: number[]): number {
  // TODO
  return 0;
}
```

## Solution: Binary Search on the Rotation Point
- time: O(log n)
- space: O(1)

### Explanation
A rotated sorted array consists of two sorted runs: a segment from the original start up to the rotation point, and a segment from the rotation point to the original end, with the rotation point marking where the values "wrap around" and drop down to the smallest value. We can binary search for this rotation point by comparing the middle element to the rightmost element of the current search range. If `nums[mid] > nums[right]`, the array must "wrap around" somewhere between `mid` and `right`, meaning the minimum is in the right half, strictly after `mid` (so `mid` itself can be excluded, since we know it's not the minimum — something smaller lies ahead). If `nums[mid] <= nums[right]`, the segment from `mid` to `right` is entirely sorted with no wrap-around, meaning the minimum is either `mid` itself or somewhere in the left half, so we keep `mid` as a candidate and search `[left, mid]`.

### Walkthrough
- Initialize `left = 0` and `right = nums.length - 1`.
- While `left < right`:
  - Compute `mid = Math.floor((left + right) / 2)`.
  - If `nums[mid] > nums[right]`, the minimum is strictly after `mid`, so set `left = mid + 1`.
  - Otherwise, the minimum is at `mid` or before it, so set `right = mid`.
- Once `left === right`, this index holds the minimum value. Return `nums[left]`.

```typescript
function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}
```

## Solution: Binary Search Comparing to the Leftmost Element
- time: O(log n)
- space: O(1)

### Explanation
An alternative framing of the same idea compares `nums[mid]` to `nums[0]` (the leftmost element of the whole array) instead of `nums[right]`. If `nums[mid] >= nums[0]`, then everything from the start up to `mid` is part of the same ascending run as the original array's beginning — meaning the rotation point (and thus the minimum) must be somewhere after `mid`. If `nums[mid] < nums[0]`, then the rotation point has already occurred somewhere at or before `mid`, so we search the left portion, keeping `mid` as a candidate. This version requires special care for arrays where no rotation occurred at all (already fully sorted), which the general logic below still handles correctly since it converges to index 0 in that case.

### Walkthrough
- If `nums[0] <= nums[nums.length - 1]`, the array isn't actually rotated (or was rotated a full `n` times, which is equivalent to no rotation) — return `nums[0]` immediately.
- Initialize `left = 0` and `right = nums.length - 1`.
- While `left < right`:
  - Compute `mid = Math.floor((left + right) / 2)`.
  - If `nums[mid] >= nums[0]`, the minimum is after `mid`, so set `left = mid + 1`.
  - Otherwise, the minimum is at `mid` or before it, so set `right = mid`.
- Return `nums[left]`.

```typescript
function findMin(nums: number[]): number {
  const n = nums.length;

  if (nums[0] <= nums[n - 1]) {
    return nums[0];
  }

  let left = 0;
  let right = n - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= nums[0]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}
```
