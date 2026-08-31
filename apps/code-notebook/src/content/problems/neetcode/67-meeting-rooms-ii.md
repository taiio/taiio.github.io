---
title: Meeting Rooms II
number: 67
source: NeetCode
category: Intervals
difficulty: Medium
tags: Array, Two Pointers, Greedy, Sorting, Heap
url: https://neetcode.io/problems/meeting-schedule-ii
---

## Problem
Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of conference rooms required.

### Examples

**Example 1:**
```text
Input: intervals = [(0,40),(5,10),(15,20)]
Output: 2
Explanation:
room1: (0,40)
room2: (5,10), (15,20)
```

**Example 2:**
```text
Input: intervals = [(4,9)]
Output: 1
```

### Constraints
- `1 <= intervals.length <= 10^4`
- `0 <= starti < endi <= 10^6`

## Hints
- Separate the start times and end times into two sorted arrays.
- Use two pointers `s` and `e`. If `start[s] < end[e]`, a meeting started before another ended, needing an extra room.
- Otherwise, free up a room and advance `e`.

## Template
```typescript
function minMeetingRooms(intervals: Interval[]): number {
  // TODO
}
```

```python
def minMeetingRooms(intervals: list[Interval]) -> int:
    # TODO
    pass
```

## Solution: Two Pointers on Start/End Times (Optimal)
- time: O(n log n)
- space: O(n)

### Explanation
Extract and sort start times and end times separately. Track concurrent active meetings using two pointers.

### Walkthrough
- Extract `starts = intervals.map(i => i.start).sort()` and `ends = intervals.map(i => i.end).sort()`.
- Initialize `s = 0`, `e = 0`, `count = 0`, `maxRooms = 0`.
- While `s < starts.length`:
-   If `starts[s] < ends[e]`: increment `count`, `s++`.
-   Else: decrement `count`, `e++`.
-   `maxRooms = max(maxRooms, count)`.
- Return `maxRooms`.

```typescript
function minMeetingRooms(intervals: Interval[]): number {
  const starts = intervals.map((i) => i.start).sort((a, b) => a - b);
  const ends = intervals.map((i) => i.end).sort((a, b) => a - b);

  let s = 0;
  let e = 0;
  let count = 0;
  let maxRooms = 0;

  while (s < starts.length) {
    if (starts[s] < ends[e]) {
      count++;
      s++;
    } else {
      count--;
      e++;
    }
    maxRooms = Math.max(maxRooms, count);
  }

  return maxRooms;
}
```

```python
def minMeetingRooms(intervals: list[Interval]) -> int:
    starts = sorted([i.start for i in intervals])
    ends = sorted([i.end for i in intervals])
    
    s = e = 0
    count = max_rooms = 0
    
    while s < len(starts):
        if starts[s] < ends[e]:
            count += 1
            s += 1
        else:
            count -= 1
            e += 1
        max_rooms = max(max_rooms, count)
        
    return max_rooms
```
