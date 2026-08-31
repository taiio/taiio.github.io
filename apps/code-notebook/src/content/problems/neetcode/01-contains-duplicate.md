---
title: Contains Duplicate
number: 1
source: NeetCode
category: Arrays & Hashing
difficulty: Easy
tags: Array, Hash Table, Sorting
url: https://neetcode.io/problems/duplicate-integer
---

## Problem
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

### Examples

**Example 1:**
```text
Input: nums = [1, 2, 3, 1]
Output: true
```

**Example 2:**
```text
Input: nums = [1, 2, 3, 4]
Output: false
```

**Example 3:**
```text
Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
```

### Constraints
- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Hints
- A brute-force approach compares each element with every other element, taking O(n^2) time.
- Sorting the array brings duplicates next to each other in O(n log n) time.
- Using a Hash Set allows checking whether an element has been seen in O(1) average time.

## Template
```typescript
function containsDuplicate(nums: number[]): boolean {
  // TODO
}
```

```python
def containsDuplicate(nums: list[int]) -> bool:
    # TODO
    pass
```

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
Compare every pair of elements in the array using two nested loops. If any pair has identical values, return true.

### Walkthrough
- Iterate through the array with outer index i from 0 to n - 1.
- Iterate through the array with inner index j from i + 1 to n - 1.
- If nums[i] equals nums[j], duplicate found; return true.
- If loops finish without finding a match, return false.

```typescript
function containsDuplicate(nums: number[]): boolean {
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

```python
def containsDuplicate(nums: list[int]) -> bool:
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] == nums[j]:
                return True
    return False
```

## Solution: Sorting
- time: O(n log n)
- space: O(1) or O(n) depending on sort implementation

### Explanation
Sort the array in ascending order. If duplicate elements exist, they will become adjacent.

### Walkthrough
- Sort the array in place or create a sorted copy.
- Iterate through the sorted array from index 0 to n - 2.
- Compare nums[i] with nums[i + 1]. If they are equal, return true.
- If no adjacent elements match, return false.

```typescript
function containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}
```

```python
def containsDuplicate(nums: list[int]) -> bool:
    nums.sort()
    for i in range(len(nums) - 1):
        if nums[i] == nums[i + 1]:
            return True
    return False
```

## Solution: Hash Set (Optimal)
- time: O(n)
- space: O(n)

### Explanation
Store elements in a Hash Set as we iterate through the array. If an element is already present in the set, a duplicate exists.

### Walkthrough
- Initialize an empty Hash Set `seen`.
- Iterate through each number `num` in `nums`.
- Check if `seen` contains `num`. If yes, return true.
- Otherwise, add `num` to `seen`.
- If the loop completes, return false.

```typescript
function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
```

```python
def containsDuplicate(nums: list[int]) -> bool:
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False
```
