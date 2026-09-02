---
title: Largest Rectangle in Histogram
number: 84
source: LeetCode
category: Stack
difficulty: Hard
tags: Array, Stack, Monotonic Stack
url: https://leetcode.com/problems/largest-rectangle-in-histogram/
---

## Problem
Given an array of integers `heights` representing the histogram's bar heights where the width of each bar is 1, return the area of the largest rectangle in the histogram.

**Example 1:**
```
Input: heights = [2,1,5,6,2,3]
Output: 10
```
Explanation: the largest rectangle has area 10, formed by the bars of height 5 and 6 (indices 2 and 3), using height 5 and width 2.

**Example 2:**
```
Input: heights = [2,4]
Output: 4
```

**Constraints:**
- `1 <= heights.length <= 10^5`
- `0 <= heights[i] <= 10^4`

## Hints
- For any bar `i`, imagine it as the shortest bar in some rectangle — that rectangle can extend left and right until it hits a bar shorter than `heights[i]`. The brute force approach checks this directly for every bar, giving O(n²).
- A **Monotonic Stack** approach processes bars left to right, maintaining a stack of indices with increasing heights. When a shorter bar is encountered, it means the bars on top of the stack can't extend any further right, so we "resolve" them one by one, computing the max rectangle achievable with each as the shortest bar.
- When resolving a bar popped from the stack, its rectangle's width spans from just after the new stack top (its nearest shorter bar to the left) to just before the current index (its nearest shorter bar to the right, exclusive).

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function largestRectangleArea(heights: number[]): number {
  // TODO
  return 0;
}
```

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
For every bar, treat it as the shortest bar of a candidate rectangle, then expand left and right as far as possible while every bar in that range is at least as tall. The area of that rectangle is `heights[i] * width`, and we track the maximum area found across all bars.

### Walkthrough
- Initialize `maxArea = 0`.
- For each index `i` from `0` to `n - 1`:
  - Expand `left` from `i` leftward while `heights[left - 1] >= heights[i]`.
  - Expand `right` from `i` rightward while `heights[right + 1] >= heights[i]`.
  - Compute `width = right - left + 1` and `area = heights[i] * width`.
  - Update `maxArea = max(maxArea, area)`.
- Return `maxArea`.

```typescript
function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    let left = i;
    while (left > 0 && heights[left - 1] >= heights[i]) {
      left--;
    }

    let right = i;
    while (right < n - 1 && heights[right + 1] >= heights[i]) {
      right++;
    }

    const width = right - left + 1;
    maxArea = Math.max(maxArea, heights[i] * width);
  }

  return maxArea;
}
```

## Solution: Monotonic Stack
- time: O(n)
- space: O(n)

### Explanation
We process bars left to right while maintaining a stack of `[index, height]` pairs with heights in strictly increasing order from bottom to top. When we reach a bar shorter than the height at the top of the stack, it means the bar on top of the stack can never extend further right than the current position — so we "resolve" it: pop it off and compute the maximum rectangle achievable using that height, where the width spans from the index now exposed at the new top of the stack (exclusive) to the current index (exclusive). We keep popping and resolving as long as the current bar is shorter than the stack's top. After resolving, we push the current bar — but using the index of the last bar we popped as its effective left boundary, so it "absorbs" the width of the shorter bars that came before it. Any bars still on the stack after the full scan are resolved against the end of the array.

### Walkthrough
- Initialize an empty stack of `[index, height]` pairs and `maxArea = 0`.
- For each index `i` from `0` to `n - 1`:
  - Let `start = i`.
  - While the stack is non-empty and `stack.top().height > heights[i]`:
    - Pop `[poppedIndex, poppedHeight]` from the stack.
    - Compute `area = poppedHeight * (i - poppedIndex)`, update `maxArea = max(maxArea, area)`.
    - Set `start = poppedIndex` (this bar's rectangle can extend back to where the popped bar started).
  - Push `[start, heights[i]]` onto the stack.
- After the loop, resolve any bars remaining on the stack against the end of the array (`n`):
  - For each `[index, height]` remaining on the stack, compute `area = height * (n - index)`, update `maxArea`.
- Return `maxArea`.

```typescript
function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  const stack: [number, number][] = []; // [startIndex, height]
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    let start = i;

    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [poppedIndex, poppedHeight] = stack.pop()!;
      const area = poppedHeight * (i - poppedIndex);
      maxArea = Math.max(maxArea, area);
      start = poppedIndex;
    }

    stack.push([start, heights[i]]);
  }

  for (const [index, height] of stack) {
    const area = height * (n - index);
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}
```
