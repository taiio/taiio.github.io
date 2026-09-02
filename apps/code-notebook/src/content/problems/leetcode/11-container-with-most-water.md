---
title: Container With Most Water
number: 11
source: LeetCode
category: Two Pointers
difficulty: Medium
tags: Array, Two Pointers, Greedy
url: https://leetcode.com/problems/container-with-most-water/
---

## Problem
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`-th line are `(i, 0)` and `(i, height[i])`.

Find two lines that, together with the x-axis, form a container that holds the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

**Example 1:**
```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
```
Explanation: the lines at index 1 (height 8) and index 8 (height 7) form a container with width `8 - 1 = 7` and height `min(8, 7) = 7`, giving area `49`, which is the maximum possible.

**Example 2:**
```
Input: height = [1,1]
Output: 1
```

**Constraints:**
- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

## Hints
- The area between two lines at indices `i` and `j` is `min(height[i], height[j]) * (j - i)` — it's limited by the shorter of the two lines, not the taller one.
- Trying every pair of lines works but is O(n²), which is too slow for the input size.
- Start with two pointers at the widest possible container (both ends of the array). At each step, moving the pointer at the **shorter** line inward is the only move that could possibly increase the area — moving the taller line's pointer inward can never help, since the width shrinks while the limiting height can only stay the same or get worse.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function maxArea(height: number[]): number {
  // TODO
  return 0;
}
```

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
The most direct approach checks every possible pair of lines `(i, j)`, computing the area `min(height[i], height[j]) * (j - i)` for each pair, and keeping track of the maximum area seen.

### Walkthrough
- Initialize `maxWater = 0`.
- For each `i` from `0` to `n - 1`:
  - For each `j` from `i + 1` to `n - 1`:
    - Compute `area = min(height[i], height[j]) * (j - i)`.
    - Update `maxWater = max(maxWater, area)`.
- Return `maxWater`.

```typescript
function maxArea(height: number[]): number {
  let maxWater = 0;
  const n = height.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      maxWater = Math.max(maxWater, area);
    }
  }

  return maxWater;
}
```

## Solution: Two Pointers (Greedy)
- time: O(n)
- space: O(1)

### Explanation
Start with the widest possible container — pointers at the very first and very last line. At each step, the area is limited by the shorter of the two current lines. The key greedy insight is: if we move the pointer at the *taller* line inward, the width strictly decreases while the limiting height can only stay the same or decrease (since it's still bounded by the shorter line) — so that move can never produce a better area. Therefore, the only move worth making is to move the pointer at the *shorter* line inward, hoping to find a taller line that could increase the limiting height enough to offset the reduced width. Repeating this until the pointers meet is guaranteed to consider the optimal container, since every "wrong" move is provably never beneficial.

### Walkthrough
- Initialize `left = 0`, `right = n - 1`, and `maxWater = 0`.
- While `left < right`:
  - Compute `area = min(height[left], height[right]) * (right - left)`.
  - Update `maxWater = max(maxWater, area)`.
  - If `height[left] < height[right]`, move `left` forward (the left line is the limiting factor).
  - Otherwise, move `right` backward (the right line is the limiting factor, or they're equal).
- Return `maxWater`.

```typescript
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}
```
