---
title: Two Sum II - Input Array Is Sorted
number: 167
source: LeetCode
category: Two Pointers
difficulty: Medium
tags: Array, Two Pointers, Binary Search
url: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
---

## Problem
Given a **1-indexed** array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2, where `1 <= index1 < index2 <= numbers.length`.

You may assume that each input has exactly one solution, and you may not use the same element twice. Your solution must use only constant extra space.

**Example 1:**
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
```
Explanation: `numbers[0] + numbers[1] = 2 + 7 = 9`, so `index1 = 1, index2 = 2`.

**Example 2:**
```
Input: numbers = [2,3,4], target = 6
Output: [1,3]
```

**Example 3:**
```
Input: numbers = [-1,0], target = -1
Output: [1,2]
```

**Constraints:**
- `2 <= numbers.length <= 3 * 10^4`
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted in non-decreasing order.
- `-1000 <= target <= 1000`
- Exactly one valid answer exists.

## Hints
- Since the array is sorted, a Hash Map still works but ignores the useful sorted-order structure of the input.
- The array being sorted means: if the current pair's sum is too small, moving the left pointer rightward strictly increases the sum; if the sum is too large, moving the right pointer leftward strictly decreases it.
- This "shrinking window" behavior is exactly what the Two Pointers technique exploits, letting you scan the array once from both ends, achieving O(n) time and O(1) extra space (better than a Hash Map's O(n) space).

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function twoSum(numbers: number[], target: number): number[] {
  // TODO
  return [];
}
```

## Solution: Hash Map
- time: O(n)
- space: O(n)

### Explanation
This is the same approach as the original Two Sum problem, ignoring the fact that the array is sorted: store each visited value with its index in a Hash Map, and for each new element check whether its complement (`target - value`) has already been seen. It works correctly here too, but doesn't take advantage of the sorted property, and uses more memory than necessary.

### Walkthrough
- Initialize an empty Hash Map `seen` mapping value → 1-indexed position.
- For each index `i` (0-indexed) in `numbers`:
  - Compute `complement = target - numbers[i]`.
  - If `complement` is in `seen`, return `[seen[complement], i + 1]` (sorted ascending since `seen[complement]` was recorded earlier).
  - Otherwise, store `numbers[i] → i + 1` in `seen`.

```typescript
function twoSum(numbers: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (seen.has(complement)) {
      return [seen.get(complement)!, i + 1];
    }
    seen.set(numbers[i], i + 1);
  }

  return [];
}
```

## Solution: Two Pointers
- time: O(n)
- space: O(1)

### Explanation
Because `numbers` is sorted, we can use two pointers — `left` starting at the first element and `right` starting at the last. At each step, we look at `numbers[left] + numbers[right]`: if it's exactly `target`, we're done. If it's too small, the only way to increase the sum (given the array is sorted) is to move `left` rightward to a larger value. If it's too large, we move `right` leftward to a smaller value. Each step eliminates at least one candidate pair, so the pointers meet after at most O(n) steps, using no extra space beyond the two pointer variables.

### Walkthrough
- Initialize `left = 0` and `right = numbers.length - 1`.
- While `left < right`:
  - Compute `sum = numbers[left] + numbers[right]`.
  - If `sum === target`, return `[left + 1, right + 1]` (converting to 1-indexed).
  - If `sum < target`, increment `left`.
  - If `sum > target`, decrement `right`.

```typescript
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
```

## Solution: Binary Search per Element
- time: O(n log n)
- space: O(1)

### Explanation
Another way to exploit the sorted order is to fix each element `numbers[i]` in turn and binary search for its required complement `target - numbers[i]` within the remaining part of the array. This is slower than the two-pointer approach (O(n log n) instead of O(n)) since it repeats a search for every element, but it's a useful pattern to know since it generalizes to problems where a two-pointer sweep isn't directly applicable.

### Walkthrough
- For each index `i` from `0` to `n - 2`:
  - Compute `complement = target - numbers[i]`.
  - Binary search for `complement` within `numbers[i + 1 .. n - 1]`.
  - If found at position `j`, return `[i + 1, j + 1]`.
- (The problem guarantees a solution exists, so this loop will always find a match before finishing.)

```typescript
function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;

  const binarySearch = (start: number, end: number, value: number): number => {
    let lo = start;
    let hi = end;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (numbers[mid] === value) return mid;
      if (numbers[mid] < value) lo = mid + 1;
      else hi = mid - 1;
    }
    return -1;
  };

  for (let i = 0; i < n - 1; i++) {
    const complement = target - numbers[i];
    const j = binarySearch(i + 1, n - 1, complement);
    if (j !== -1) {
      return [i + 1, j + 1];
    }
  }

  return [];
}
```
