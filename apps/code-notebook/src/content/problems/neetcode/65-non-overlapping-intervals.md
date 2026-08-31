---
title: Non-overlapping Intervals
number: 65
source: NeetCode
category: Intervals
difficulty: Medium
tags: Array, Dynamic Programming, Greedy, Sorting
url: https://neetcode.io/problems/non-overlapping-intervals
---

## Problem
Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

### Examples

**Example 1:**
```text
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
```

**Example 2:**
```text
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
```

**Example 3:**
```text
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
```

### Constraints
- `1 <= intervals.length <= 10^5`
- `intervals[i].length == 2`
- `-5 * 10^4 <= starti < endi <= 5 * 10^4`

## Hints
- Sort intervals by their end times (or start times).
- When two intervals overlap, greedily keep the one with the smaller end time to leave more room for subsequent intervals.

## Template
```typescript
function eraseOverlapIntervals(intervals: number[][]): number {
  // TODO
}
```

```python
def eraseOverlapIntervals(intervals: list[list[int]]) -> int:
    # TODO
    pass
```

## Solution: Greedy Sort by Start/End (Optimal)
- time: O(n log n)
- space: O(1) extra space

### Explanation
Sort intervals by start time. When an overlap occurs, increment removal count and retain the interval that ends earlier.

### Walkthrough
- Sort `intervals` by `interval[0]`.
- Initialize `count = 0`, `prevEnd = intervals[0][1]`.
- For `i` from 1 to `intervals.length - 1`:
-   `[start, end] = intervals[i]`.
-   If `start >= prevEnd`: update `prevEnd = end` (no overlap).
-   Else: overlap detected; `count++`, `prevEnd = min(prevEnd, end)` (keep the one ending sooner).
- Return `count`.

```typescript
function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      count++;
      prevEnd = Math.min(prevEnd, end);
    }
  }

  return count;
}
```

```python
def eraseOverlapIntervals(intervals: list[list[int]]) -> int:
    if not intervals:
        return 0
        
    intervals.sort(key=lambda x: x[0])
    count = 0
    prev_end = intervals[0][1]
    
    for start, end in intervals[1:]:
        if start >= prev_end:
            prev_end = end
        else:
            count += 1
            prev_end = min(prev_end, end)
            
    return count
```
