---
title: Search in Rotated Sorted Array
number: 33
source: LeetCode
category: Binary Search
difficulty: Medium
tags: Array, Binary Search
url: https://leetcode.com/problems/search-in-rotated-sorted-array/
---

## Problem
There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k`.

Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**
```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**
```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

**Example 3:**
```
Input: nums = [1], target = 0
Output: -1
```

**Constraints:**
- `1 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- All values of `nums` are unique.
- `nums` is an ascending array that is possibly rotated.
- `-10^4 <= target <= 10^4`

## Hints
- A linear scan works but is O(n), which doesn't meet the O(log n) requirement — the sorted-and-rotated structure of the array should be exploited instead.
- At any point during a binary search on this array, at least one of the two halves (`[left, mid]` or `[mid, right]`) is guaranteed to be normally sorted (no rotation break within it), even though the whole array isn't. Figuring out which half is sorted tells you whether the target could be in that half.
- Compare `nums[left]` to `nums[mid]` to determine which half is sorted. Then, check whether `target` falls within the range of the sorted half — if it does, search that half; otherwise, search the other half.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function search(nums: number[], target: number): number {
  // TODO
  return -1;
}
```

## Solution: Modified Binary Search
- time: O(log n)
- space: O(1)

### Explanation
Even though the array as a whole isn't sorted, at every step of the binary search, at least one of the two halves around `mid` must be fully sorted (with no rotation break inside it) — because there's only one rotation break point in the entire array. We determine which half is sorted by comparing `nums[left]` to `nums[mid]`: if `nums[left] <= nums[mid]`, the left half `[left, mid]` is sorted; otherwise, the right half `[mid, right]` is sorted. Once we know which half is sorted, we can check whether `target` falls within that sorted half's value range using simple comparisons. If it does, we search there; if not, the target (if present at all) must be in the other half, so we search that side instead. This still halves the search space each iteration, preserving O(log n) time.

### Walkthrough
- Initialize `left = 0` and `right = nums.length - 1`.
- While `left <= right`:
  - Compute `mid = Math.floor((left + right) / 2)`.
  - If `nums[mid] === target`, return `mid`.
  - If `nums[left] <= nums[mid]` (left half `[left, mid]` is sorted):
    - If `nums[left] <= target < nums[mid]`, the target is in the left half: set `right = mid - 1`.
    - Otherwise, search the right half: set `left = mid + 1`.
  - Otherwise (right half `[mid, right]` is sorted):
    - If `nums[mid] < target <= nums[right]`, the target is in the right half: set `left = mid + 1`.
    - Otherwise, search the left half: set `right = mid - 1`.
- If the loop ends without finding the target, return `-1`.

```typescript
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      // left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
```

## Solution: Find Rotation Point, Then Binary Search
- time: O(log n)
- space: O(1)

### Explanation
An alternative two-phase approach: first, binary search to find the index of the minimum element (the rotation point), exactly as in the "Find Minimum in Rotated Sorted Array" problem. This index effectively splits the array into two sorted segments. Then, determine which of the two segments could contain `target` by comparing it to the value at the rotation point and the value at the end of the array, and run a standard binary search restricted to that segment.

### Walkthrough
**Find the rotation point (index of the minimum element):**
- Use the same binary search as in Find Minimum in Rotated Sorted Array to find `pivot`, the index of the smallest element.

**Decide which segment to search:**
- If `target >= nums[pivot]` and `target <= nums[nums.length - 1]`, the target (if present) is in the segment `[pivot, nums.length - 1]`.
- Otherwise, the target (if present) is in the segment `[0, pivot - 1]`.

**Standard binary search within the chosen segment:**
- Run a normal binary search restricted to the chosen `[start, end]` range, returning the index if found, or `-1` otherwise.

```typescript
function search(nums: number[], target: number): number {
  const n = nums.length;

  const findPivot = (): number => {
    let left = 0;
    let right = n - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };

  const binarySearch = (start: number, end: number): number => {
    let left = start;
    let right = end;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  };

  const pivot = findPivot();

  if (target >= nums[pivot] && target <= nums[n - 1]) {
    return binarySearch(pivot, n - 1);
  } else {
    return binarySearch(0, pivot - 1);
  }
}
```
