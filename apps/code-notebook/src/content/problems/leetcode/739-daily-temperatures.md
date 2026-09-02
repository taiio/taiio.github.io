---
title: Daily Temperatures
number: 739
source: LeetCode
category: Stack
difficulty: Medium
tags: Array, Stack, Monotonic Stack
url: https://leetcode.com/problems/daily-temperatures/
---

## Problem
Given an array of integers `temperatures` representing daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after day `i` to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

**Example 1:**
```
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
```

**Example 2:**
```
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
```

**Example 3:**
```
Input: temperatures = [30,60,90]
Output: [1,1,0]
```

**Constraints:**
- `1 <= temperatures.length <= 10^5`
- `30 <= temperatures[i] <= 100`

## Hints
- The brute force approach scans forward from every day until a warmer day is found, which is O(n²) in the worst case (e.g. strictly decreasing temperatures).
- Think about it from the perspective of a **Monotonic Stack** of *unresolved* days — days that are still waiting for a warmer day to appear. As you scan left to right, whenever the current temperature is warmer than the temperature at the top of the stack, that top day's "wait" is now resolved.
- Maintain a stack of indices with strictly decreasing temperatures. When the current day's temperature is higher than the temperature at the index on top of the stack, pop that index, compute the day difference, and repeat until the stack's top temperature is higher (or the stack is empty), then push the current index.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function dailyTemperatures(temperatures: number[]): number[] {
  // TODO
  return [];
}
```

## Solution: Brute Force
- time: O(n²)
- space: O(1) extra (not counting the output array)

### Explanation
The most direct approach, for each day, scans forward through all future days until it finds one with a strictly warmer temperature, recording the distance. If no warmer day is found, the answer for that day stays 0.

### Walkthrough
- Initialize `answer` as an array of zeros, same length as `temperatures`.
- For each index `i` from `0` to `n - 1`:
  - For each index `j` from `i + 1` to `n - 1`:
    - If `temperatures[j] > temperatures[i]`, set `answer[i] = j - i` and break out of the inner loop.
- Return `answer`.

```typescript
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (temperatures[j] > temperatures[i]) {
        answer[i] = j - i;
        break;
      }
    }
  }

  return answer;
}
```

## Solution: Monotonic Stack
- time: O(n)
- space: O(n)

### Explanation
We maintain a stack of indices representing days whose "warmer day" hasn't been found yet, kept in an order where the corresponding temperatures are strictly decreasing from bottom to top. As we scan through each day, we compare the current temperature to the temperature at the index on top of the stack. If the current day is warmer, it resolves that stacked day's wait — we pop it and record the day difference as the answer for that popped index. We keep popping and resolving as long as the current temperature keeps being warmer than what's now on top. Finally, we push the current day's index onto the stack (it becomes a new unresolved day, waiting for something warmer). Each index is pushed and popped from the stack at most once, giving O(n) total time.

### Walkthrough
- Initialize `answer` as an array of zeros, same length as `temperatures`, and an empty stack of indices.
- For each index `i` from `0` to `n - 1`:
  - While the stack isn't empty and `temperatures[i] > temperatures[stack.top]`:
    - Pop the top index as `prevIndex`.
    - Set `answer[prevIndex] = i - prevIndex`.
  - Push `i` onto the stack.
- Return `answer`.

```typescript
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack: number[] = []; // indices with decreasing temperatures

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prevIndex = stack.pop()!;
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
}
```
