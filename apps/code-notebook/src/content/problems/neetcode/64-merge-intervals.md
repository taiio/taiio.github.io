---
title: Merge Intervals
number: 64
source: NeetCode
category: Intervals
difficulty: Medium
tags: Array, Sorting
url: https://neetcode.io/problems/merge-overlapping-intervals
---

## Problem
Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

### Examples

**Example 1:**
```text
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

**Example 2:**
```text
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

### Constraints
- `1 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10^4`

## Hints
- Sort intervals by their start times.
- Compare current interval start with the end of the last interval in your output list.
- If `start <= last.end`, merge by updating `last.end = max(last.end, end)`.

## Template
```typescript
function merge(intervals: number[][]): number[][] {
  // TODO
}
```

```python
def merge(intervals: list[list[int]]) -> list[list[int]]:
    # TODO
    pass
```

## Solution: Sorting + Merge (Optimal)
- time: O(n log n)
- space: O(n) for sorted array

### Explanation
Sort intervals by start time. Iterate through sorted intervals, merging overlapping intervals with the tail of the output list.

### Walkthrough
- Sort `intervals` by `interval[0]`.
- Initialize `result = [intervals[0]]`.
- For each subsequent `[start, end]` in intervals:
-   `lastEnd = result[result.length - 1][1]`.
-   If `start <= lastEnd`:
-     `result[result.length - 1][1] = max(lastEnd, end)`.
-   Else:
-     `result.push([start, end])`.
- Return `result`.

```typescript
function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const prev = result[result.length - 1];

    if (start <= prev[1]) {
      prev[1] = Math.max(prev[1], end);
    } else {
      result.push([start, end]);
    }
  }

  return result;
}
```

```python
def merge(intervals: list[list[int]]) -> list[list[int]]:
    if not intervals:
        return []
        
    intervals.sort(key=lambda x: x[0])
    result = [intervals[0]]
    
    for start, end in intervals[1:]:
        last_end = result[-1][1]
        if start <= last_end:
            result[-1][1] = max(last_end, end)
        else:
            result.append([start, end])
            
    return result
```
