---
title: Search in Rotated Sorted Array
number: 18
source: NeetCode
category: Binary Search
difficulty: Medium
tags: Array, Binary Search
url: https://neetcode.io/problems/find-target-in-rotated-sorted-array
---

## Problem
There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` (`1 <= k < nums.length`).

Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

### Examples

**Example 1:**
```text
Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
Output: 4
```

**Example 2:**
```text
Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
Output: -1
```

**Example 3:**
```text
Input: nums = [1], target = 0
Output: -1
```

### Constraints
- `1 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- All values of `nums` are **unique**.
- `-10^4 <= target <= 10^4`

## Hints
- In a rotated sorted array, at least one half [left...mid] or [mid...right] is always normally sorted.
- Check if the left half is sorted (`nums[left] <= nums[mid]`). If so, check if target falls inside that range.
- Otherwise, the right half must be sorted. Check if target falls in the right range.

## Template
```typescript
function search(nums: number[], target: number): number {
  // TODO
}
```

```python
def search(nums: list[int], target: int) -> int:
    # TODO
    pass
```

## Solution: Modified Binary Search (Optimal)
- time: O(log n)
- space: O(1)

### Explanation
At any split, at least one half of the array is strictly sorted. Determine which half is sorted, then check if the target lies within its boundaries.

### Walkthrough
- Initialize `left = 0`, `right = nums.length - 1`.
- While `left <= right`:
-   `mid = Math.floor((left + right) / 2)`.
-   If `nums[mid] === target`, return `mid`.
-   If left half is sorted (`nums[left] <= nums[mid]`):
-     If `nums[left] <= target < nums[mid]`, search left: `right = mid - 1`.
-     Else search right: `left = mid + 1`.
-   Else right half is sorted:
-     If `nums[mid] < target <= nums[right]`, search right: `left = mid + 1`.
-     Else search left: `right = mid - 1`.
- Return -1 if target not found.

```typescript
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
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

```python
def search(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
            
        # Left half is sorted
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Right half is sorted
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
                
    return -1
```
