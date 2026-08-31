---
title: Find Minimum in Rotated Sorted Array
number: 17
source: NeetCode
category: Binary Search
difficulty: Medium
tags: Array, Binary Search
url: https://neetcode.io/problems/find-minimum-in-rotated-sorted-array
---

## Problem
Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times.

Given the sorted rotated array `nums` of **unique** elements, return the **minimum element** of this array.

You must write an algorithm that runs in `O(log n)` time.

### Examples

**Example 1:**
```text
Input: nums = [3, 4, 5, 1, 2]
Output: 1
Explanation: The original array was [1, 2, 3, 4, 5] rotated 3 times.
```

**Example 2:**
```text
Input: nums = [4, 5, 6, 7, 0, 1, 2]
Output: 0
Explanation: The original array was [0, 1, 2, 4, 5, 6, 7] and it was rotated 4 times.
```

**Example 3:**
```text
Input: nums = [11, 13, 15, 17]
Output: 11
Explanation: The original array was [11, 13, 15, 17] and it was rotated 4 times.
```

### Constraints
- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- All the integers of `nums` are **unique**.

## Hints
- Compare `nums[mid]` with `nums[right]`.
- If `nums[mid] > nums[right]`, the minimum must be in the right half `[mid + 1, right]`.
- If `nums[mid] <= nums[right]`, the minimum is at `mid` or to the left `[left, mid]`.

## Template
```typescript
function findMin(nums: number[]): number {
  // TODO
}
```

```python
def findMin(nums: list[int]) -> int:
    # TODO
    pass
```

## Solution: Binary Search (Optimal)
- time: O(log n)
- space: O(1)

### Explanation
Compare the middle element with the rightmost element. Since elements are distinct, this determines which half contains the inflection point (minimum).

### Walkthrough
- Set `left = 0`, `right = nums.length - 1`.
- While `left < right`:
-   `mid = Math.floor((left + right) / 2)`.
-   If `nums[mid] > nums[right]`, inflection point is to the right: `left = mid + 1`.
-   Else inflection point is at `mid` or to the left: `right = mid`.
- Return `nums[left]`.

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

```python
def findMin(nums: list[int]) -> int:
    left, right = 0, len(nums) - 1
    
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
            
    return nums[left]
```
