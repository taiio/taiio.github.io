---
title: Meeting Rooms
number: 66
source: NeetCode
category: Intervals
difficulty: Easy
tags: Array, Sorting
url: https://neetcode.io/problems/meeting-schedule
---

## Problem
Given an array of meeting time interval objects consisting of start and end times `[[start_1,end_1],[start_2,end_2],...]` (`start_i < end_i`), determine if a person could attend all meetings.

### Examples

**Example 1:**
```text
Input: intervals = [(0,30),(5,10),(15,20)]
Output: false
Explanation:
(0,30) and (5,10) overlap.
```

**Example 2:**
```text
Input: intervals = [(5,8),(9,15)]
Output: true
```

### Constraints
- `0 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti < endi <= 10^6`

## Hints
- Sort intervals by start time.
- Check if any meeting starts before the previous meeting ends (`intervals[i].start < intervals[i - 1].end`).

## Template
```typescript
class Interval {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

function canAttendMeetings(intervals: Interval[]): boolean {
  // TODO
}
```

```python
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end

def canAttendMeetings(intervals: list[Interval]) -> bool:
    # TODO
    pass
```

## Solution: Sorting (Optimal)
- time: O(n log n)
- space: O(1)

### Explanation
Sort meetings chronologically. If any adjacent pair overlaps, return false.

### Walkthrough
- Sort `intervals` by `start` time.
- Loop `i` from 1 to `intervals.length - 1`:
-   If `intervals[i].start < intervals[i - 1].end`, return false.
- Return true.

```typescript
function canAttendMeetings(intervals: Interval[]): boolean {
  intervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      return false;
    }
  }

  return true;
}
```

```python
def canAttendMeetings(intervals: list[Interval]) -> bool:
    intervals.sort(key=lambda x: x.start)
    
    for i in range(1, len(intervals)):
        if intervals[i].start < intervals[i - 1].end:
            return False
            
    return True
```
