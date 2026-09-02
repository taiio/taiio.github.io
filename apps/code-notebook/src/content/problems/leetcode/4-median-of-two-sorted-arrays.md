---
title: Median of Two Sorted Arrays
number: 4
source: LeetCode
category: Binary Search
difficulty: Hard
tags: Array, Binary Search, Divide and Conquer
url: https://leetcode.com/problems/median-of-two-sorted-arrays/
---

## Problem
Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

**Example 1:**
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
```
Explanation: merged array = [1,2,3] and median is 2.

**Example 2:**
```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
```
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

**Constraints:**
- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

## Hints
- Merging the two arrays and finding the middle element(s) works and is easy to reason about, but takes O(m + n) time, which doesn't meet the required O(log(m+n)).
- The median splits a sorted sequence into a left half and a right half of (nearly) equal size, where every element in the left half is `<=` every element in the right half. The goal is to find a "partition" of both arrays combined that achieves this property, without actually merging them.
- Binary search on the **partition point** within the smaller of the two arrays: for a candidate partition index in `nums1`, there's exactly one corresponding partition index in `nums2` that keeps the total left-half size correct. Check whether the four boundary elements around this combined partition satisfy the "everything on the left `<=` everything on the right" property; if not, shift the partition in `nums1` left or right using binary search.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // TODO
  return 0;
}
```

## Solution: Merge and Find Middle (Baseline)
- time: O(m + n)
- space: O(m + n)

### Explanation
The most straightforward approach merges both sorted arrays into one sorted array (using the standard merge step from merge sort), then directly reads off the median from the middle of the merged result — the single middle element if the combined length is odd, or the average of the two middle elements if it's even. This is easy to reason about but doesn't meet the problem's required O(log(m+n)) time complexity, so it's presented as a baseline before the optimal solution.

### Walkthrough
- Merge `nums1` and `nums2` into a single sorted array `merged`, using two pointers that advance through each array, always taking the smaller of the two current elements.
- Let `total = merged.length`.
- If `total` is odd, return `merged[Math.floor(total / 2)]`.
- If `total` is even, return the average of `merged[total / 2 - 1]` and `merged[total / 2]`.

```typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }
  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  const total = merged.length;
  if (total % 2 === 1) {
    return merged[Math.floor(total / 2)];
  }
  return (merged[total / 2 - 1] + merged[total / 2]) / 2;
}
```

## Solution: Binary Search on Partition
- time: O(log(min(m, n)))
- space: O(1)

### Explanation
We binary search over how to "partition" the smaller array (call it `nums1`, swapping if needed so it's the smaller one) into a left portion and a right portion. For any chosen partition size `i` in `nums1`, there's exactly one corresponding partition size `j` in `nums2` that makes the combined left portion contain exactly half (or half, rounded up, if the total is odd) of all elements: `j = Math.floor((m + n + 1) / 2) - i`. A valid partition is one where every element just left of the partition (in either array) is `<=` every element just right of the partition (in either array) — checked via four boundary comparisons. If the partition is invalid because `nums1`'s left boundary is too large, we need a smaller `i` (search left); if `nums2`'s left boundary is too large, we need a larger `i` (search right). Once a valid partition is found, the median can be read directly off the four boundary values.

### Walkthrough
- Ensure `nums1` is the smaller array (swap with `nums2` if not), with lengths `m <= n`.
- Initialize `left = 0` and `right = m` (the number of elements from `nums1` in the left partition can range from 0 to m).
- While `left <= right`:
  - Compute `i = Math.floor((left + right) / 2)` (partition size in `nums1`).
  - Compute `j = Math.floor((m + n + 1) / 2) - i` (partition size in `nums2`).
  - Define the four boundary values, using `-Infinity`/`+Infinity` as sentinels when a partition falls at an array's edge:
    - `left1 = i === 0 ? -Infinity : nums1[i - 1]`
    - `right1 = i === m ? Infinity : nums1[i]`
    - `left2 = j === 0 ? -Infinity : nums2[j - 1]`
    - `right2 = j === n ? Infinity : nums2[j]`
  - If `left1 <= right2 && left2 <= right1`, this partition is valid:
    - If `(m + n)` is odd, return `max(left1, left2)`.
    - Otherwise, return `(max(left1, left2) + min(right1, right2)) / 2`.
  - Else if `left1 > right2`, the partition in `nums1` is too far right: set `right = i - 1`.
  - Else, the partition in `nums1` is too far left: set `left = i + 1`.

```typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let a = nums1;
  let b = nums2;
  if (a.length > b.length) {
    [a, b] = [b, a];
  }

  const m = a.length;
  const n = b.length;
  let left = 0;
  let right = m;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const left1 = i === 0 ? -Infinity : a[i - 1];
    const right1 = i === m ? Infinity : a[i];
    const left2 = j === 0 ? -Infinity : b[j - 1];
    const right2 = j === n ? Infinity : b[j];

    if (left1 <= right2 && left2 <= right1) {
      if ((m + n) % 2 === 1) {
        return Math.max(left1, left2);
      }
      return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
    } else if (left1 > right2) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }

  throw new Error("Input arrays are not sorted correctly");
}
```
