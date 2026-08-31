---
title: Container With Most Water
number: 11
source: NeetCode
category: Two Pointers
difficulty: Medium
tags: Array, Two Pointers, Greedy
url: https://neetcode.io/problems/max-water-container
---

## Problem
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the **maximum amount of water** a container can store.

**Notice** that you may not slant the container.

### Examples

**Example 1:**
```text
Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
Output: 49
Explanation: The maximum area is between height[1]=8 and height[8]=7, width = 7, min(8, 7) * 7 = 49.
```

**Example 2:**
```text
Input: height = [1, 1]
Output: 1
```

### Constraints
- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

## Hints
- The area is limited by the shorter line: `min(height[l], height[r]) * (r - l)`.
- Start with the widest container using pointers at both ends.
- To find a larger container with smaller width, we must move the pointer at the shorter line inward.

## Template
```typescript
function maxArea(height: number[]): number {
  // TODO
}
```

```python
def maxArea(height: list[int]) -> int:
    # TODO
    pass
```

## Solution: Two Pointers (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Start two pointers at opposite ends. At each step, calculate the area, update max area, and move the pointer pointing to the shorter vertical bar inward.

### Walkthrough
- Initialize `left = 0`, `right = height.length - 1`, and `maxWater = 0`.
- While `left < right`:
-   Calculate `currentWater = min(height[left], height[right]) * (right - left)`.
-   Update `maxWater = max(maxWater, currentWater)`.
-   If `height[left] < height[right]`, increment `left`.
-   Else decrement `right`.
- Return `maxWater`.

```typescript
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, h * width);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}
```

```python
def maxArea(height: list[int]) -> int:
    left, right = 0, len(height) - 1
    max_water = 0
    
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        max_water = max(max_water, h * width)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
            
    return max_water
```
