---
title: Binary Search
number: 704
source: LeetCode
category: Binary Search
difficulty: Easy
tags: Array, Binary Search
url: https://leetcode.com/problems/binary-search/
---

## Problem
Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**
```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
```
Explanation: 9 exists in nums and its index is 4.

**Example 2:**
```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
```
Explanation: 2 does not exist in nums so return -1.

**Constraints:**
- `1 <= nums.length <= 10^4`
- `-10^4 < nums[i], target < 10^4`
- All the integers in `nums` are unique.
- `nums` is sorted in ascending order.

## Hints
- Scanning the array one element at a time works but is O(n), which doesn't meet the required O(log n) time.
- Since the array is sorted, you can repeatedly check the middle element and eliminate half of the remaining search space each time — this is the classic **Binary Search** pattern.
- Maintain `left` and `right` boundaries; compare `nums[mid]` to `target` to decide whether to search the left half or the right half next, and stop when the target is found or the search space is empty.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function search(nums: number[], target: number): number {
  // TODO
  return -1;
}
```

## Solution: Binary Search
- time: O(log n)
- space: O(1)

### Explanation
Since `nums` is sorted, we can repeatedly narrow down the search range by checking the middle element. If the middle element equals the target, we're done. If the middle element is smaller than the target, the target (if present) must be in the right half, so we discard the left half. If the middle element is larger, we discard the right half. Each step halves the remaining search space, giving O(log n) total comparisons.

### Walkthrough
- Initialize `left = 0` and `right = nums.length - 1`.
- While `left <= right`:
  - Compute `mid = Math.floor((left + right) / 2)`.
  - If `nums[mid] === target`, return `mid`.
  - If `nums[mid] < target`, set `left = mid + 1` (search the right half).
  - Otherwise, set `right = mid - 1` (search the left half).
- If the loop ends without finding the target, return `-1`.

```typescript
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

## Solution: Recursive Binary Search
- time: O(log n)
- space: O(log n) due to the recursion call stack

### Explanation
The same halving logic can be expressed recursively instead of with an explicit loop: at each call, we check the middle element of the current `[left, right]` range and recurse into either the left or right half depending on the comparison, until the target is found or the range becomes empty. This is equivalent in behavior to the iterative version, trading O(1) space for a more directly "divide and conquer"-style structure, at the cost of O(log n) stack space.

### Walkthrough
- Define a recursive helper `binarySearch(left, right)`:
  - If `left > right`, return `-1` (search space exhausted).
  - Compute `mid = Math.floor((left + right) / 2)`.
  - If `nums[mid] === target`, return `mid`.
  - If `nums[mid] < target`, recurse on `binarySearch(mid + 1, right)`.
  - Otherwise, recurse on `binarySearch(left, mid - 1)`.
- Call `binarySearch(0, nums.length - 1)` and return its result.

```typescript
function search(nums: number[], target: number): number {
  function binarySearch(left: number, right: number): number {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      return binarySearch(mid + 1, right);
    } else {
      return binarySearch(left, mid - 1);
    }
  }

  return binarySearch(0, nums.length - 1);
}
```
