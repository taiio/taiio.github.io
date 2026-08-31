---
title: Insert Interval
number: 63
source: NeetCode
category: Intervals
difficulty: Medium
tags: Array
url: https://neetcode.io/problems/insert-new-interval
---

## Problem
You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `i-th` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` after the insertion.

### Examples

**Example 1:**
```text
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

**Example 2:**
```text
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

### Constraints
- `0 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10^5`
- `intervals` is sorted by `starti` in **ascending** order.
- `newInterval.length == 2`
- `0 <= start <= end <= 10^5`

## Hints
- Three stages: 1) Add all intervals ending before newInterval starts.
- 2) Merge all intervals overlapping with newInterval by updating `newInterval = [min(start), max(end)]`.
- 3) Add all remaining intervals starting after newInterval ends.

## Template
```typescript
function insert(intervals: number[][], newInterval: number[]): number[][] {
  // TODO
}
```

```python
def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:
    # TODO
    pass
```

## Solution: Linear Scan Merge (Optimal)
- time: O(n)
- space: O(n) for output

### Explanation
Iterate through intervals once, partitioning into intervals before, overlapping with, and after newInterval.

### Walkthrough
- Initialize empty `result` array.
- For each `interval` in `intervals`:
-   If `interval[1] < newInterval[0]`: append `interval` to result.
-   Else if `interval[0] > newInterval[1]`: append `newInterval`, set `newInterval = interval`.
-   Else (overlap): `newInterval = [min(interval[0], newInterval[0]), max(interval[1], newInterval[1])]`.
- Append final `newInterval` to result.
- Return `result`.

```typescript
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[1] < newInterval[0]) {
      result.push(interval);
    } else if (interval[0] > newInterval[1]) {
      result.push(newInterval);
      newInterval = interval;
    } else {
      newInterval = [
        Math.min(interval[0], newInterval[0]),
        Math.max(interval[1], newInterval[1]),
      ];
    }
  }

  result.push(newInterval);
  return result;
}
```

```python
def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:
    result = []
    
    for interval in intervals:
        if interval[1] < newInterval[0]:
            result.append(interval)
        elif interval[0] > newInterval[1]:
            result.append(newInterval)
            newInterval = interval
        else:
            newInterval = [
                min(interval[0], newInterval[0]),
                max(interval[1], newInterval[1])
            ]
            
    result.append(newInterval)
    return result
```
