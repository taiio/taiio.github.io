---
title: Trapping Rain Water
number: 42
source: LeetCode
category: Two Pointers
difficulty: Hard
tags: Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack
url: https://leetcode.com/problems/trapping-rain-water/
---

## Problem
Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

**Example 1:**
```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```
Explanation: the elevation map traps 6 units of rain water between the bars.

**Example 2:**
```
Input: height = [4,2,0,3,2,5]
Output: 9
```

**Constraints:**
- `n == height.length`
- `1 <= n <= 2 * 10^5`
- `0 <= height[i] <= 10^5`

## Hints
- The amount of water trapped above any single bar at index `i` is determined by `min(tallest bar to its left, tallest bar to its right) - height[i]` (and never less than 0).
- A direct way to compute this is to precompute, for every index, the maximum height to its left and the maximum height to its right, then apply the formula above at each position.
- A more space-efficient approach uses two pointers moving inward from both ends, along with two running "max so far" values (one from the left, one from the right) — at each step, you can always safely resolve the side with the smaller running max, since that side's water level is fully determined regardless of what's further away on the other side.
- A Monotonic Stack approach is also possible: process bars left to right, using a decreasing stack of indices, and whenever a taller bar is found, "pop and fill" the trapped water for the dip that was just closed off.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function trap(height: number[]): number {
  // TODO
  return 0;
}
```

## Solution: Prefix and Suffix Max Arrays (Dynamic Programming)
- time: O(n)
- space: O(n)

### Explanation
For every index `i`, the water level above it is capped by the shorter of the tallest wall to its left and the tallest wall to its right — water would simply overflow past whichever side is lower. We can precompute `leftMax[i]` (the tallest bar from the start up to and including `i`) and `rightMax[i]` (the tallest bar from `i` to the end) in two linear passes, then compute the trapped water at each index as `min(leftMax[i], rightMax[i]) - height[i]`, summing these up (never letting an individual amount go below 0, though it naturally won't given how `leftMax`/`rightMax` are built).

### Walkthrough
- Build `leftMax`, where `leftMax[i] = max(leftMax[i - 1], height[i])`, starting with `leftMax[0] = height[0]`.
- Build `rightMax`, where `rightMax[i] = max(rightMax[i + 1], height[i])`, starting with `rightMax[n - 1] = height[n - 1]`.
- Sum up `min(leftMax[i], rightMax[i]) - height[i]` for every index `i`.
- Return the total sum.

```typescript
function trap(height: number[]): number {
  const n = height.length;
  if (n === 0) return 0;

  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let total = 0;
  for (let i = 0; i < n; i++) {
    total += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return total;
}
```

## Solution: Two Pointers
- time: O(n)
- space: O(1)

### Explanation
We can avoid the extra arrays by using two pointers, `left` and `right`, moving inward from both ends, along with two running maximums, `leftMax` and `rightMax`. At each step, we compare `leftMax` and `rightMax`: whichever is smaller determines which side we can safely resolve, because that side's trapped water is only limited by its own running max — the far side is guaranteed to have an equal or taller wall somewhere, so it can't be the bottleneck. This lets us compute and add trapped water one bar at a time while only tracking a couple of extra variables, achieving O(1) extra space.

### Walkthrough
- Initialize `left = 0`, `right = n - 1`, `leftMax = 0`, `rightMax = 0`, and `total = 0`.
- While `left < right`:
  - If `height[left] < height[right]`:
    - Update `leftMax = max(leftMax, height[left])`.
    - Add `leftMax - height[left]` to `total`.
    - Move `left` forward.
  - Otherwise:
    - Update `rightMax = max(rightMax, height[right])`.
    - Add `rightMax - height[right]` to `total`.
    - Move `right` backward.
- Return `total`.

```typescript
function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let total = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      total += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      total += rightMax - height[right];
      right--;
    }
  }

  return total;
}
```

## Solution: Monotonic Stack
- time: O(n)
- space: O(n)

### Explanation
We can also solve this with a decreasing Monotonic Stack of indices as we scan left to right. The stack holds indices whose bar heights are decreasing from bottom to top. When we encounter a bar taller than the one at the top of the stack, it means a "dip" has just been closed off on both sides — we pop the dip's bottom off the stack and compute how much water it held, bounded above by the shorter of the new bar and the bar now exposed underneath the popped one, and bounded below by the popped bar's own height. This is repeated as long as the current bar keeps closing off dips, and then the current index is pushed onto the stack.

### Walkthrough
- Initialize an empty stack of indices and `total = 0`.
- For each index `i` in `height`:
  - While the stack isn't empty and `height[i] > height[stack.top]`:
    - Pop the top index as `bottom`.
    - If the stack is now empty, break (no left wall to trap water against).
    - Let `left = stack.top` (the new top after popping `bottom`).
    - Compute `boundedHeight = min(height[left], height[i]) - height[bottom]`.
    - Compute `width = i - left - 1`.
    - Add `boundedHeight * width` to `total`.
  - Push `i` onto the stack.
- Return `total`.

```typescript
function trap(height: number[]): number {
  const stack: number[] = [];
  let total = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const bottom = stack.pop()!;

      if (stack.length === 0) break;

      const left = stack[stack.length - 1];
      const boundedHeight = Math.min(height[left], height[i]) - height[bottom];
      const width = i - left - 1;
      total += boundedHeight * width;
    }

    stack.push(i);
  }

  return total;
}
```
