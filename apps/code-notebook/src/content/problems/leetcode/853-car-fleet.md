---
title: Car Fleet
number: 853
source: LeetCode
category: Stack
difficulty: Medium
tags: Array, Stack, Sorting, Monotonic Stack
url: https://leetcode.com/problems/car-fleet/
---

## Problem
There are `n` cars going to the same destination along a one-lane road. The destination is `target` miles away.

You are given two integer arrays `position` and `speed`, both of length `n`, where `position[i]` is the position of the `i`-th car and `speed[i]` is the speed of the `i`-th car (in miles per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. A **car fleet** is a car or cars driving bumper to bumper. The car fleet will have the same speed as the slowest car in the fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.

**Example 1:**
```
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
```
Explanation: the cars starting at 10 and 8 become a fleet, meeting each other at 12. The car starting at 0 doesn't catch up to any other car, so it's a fleet by itself. The cars starting at 5 and 3 become a fleet, meeting each other at 6.

**Example 2:**
```
Input: target = 10, position = [3], speed = [3]
Output: 1
```
Explanation: there is only one car, hence there is only one fleet.

**Example 3:**
```
Input: target = 100, position = [0,2,4], speed = [4,2,1]
Output: 1
```
Explanation: the cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2. Then the fleet (speed 2) and the car starting at 4 (speed 1) never catch up to each other, wait — the car starting at 4 is slowest and ahead, so the faster cars behind it must slow down to its speed once they catch up, forming one large fleet.

**Constraints:**
- `n == position.length == speed.length`
- `1 <= n <= 10^5`
- `0 <= target <= 10^6`
- `0 <= speed[i] <= 10^6`
- `0 <= position[i] < target`
- Each value of `position[i]` is unique.

## Hints
- Since cars can never pass each other, it helps to process them in order from the car **closest to the target** to the car **farthest away**, because a car can only ever be blocked by (and merge into a fleet with) a car ahead of it, never behind it.
- For each car, compute the time it would take to reach the target if driving alone: `(target - position[i]) / speed[i]`.
- This becomes a **Monotonic Stack** problem in disguise: process cars from closest-to-target to farthest, keeping a stack of "arrival times" representing distinct fleets found so far. If the current car's arrival time is less than or equal to the time of the fleet immediately ahead of it (the top of the stack), it catches up and merges into that fleet (don't push a new entry). Otherwise, it forms its own new fleet (push its time).

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function carFleet(target: number, position: number[], speed: number[]): number {
  // TODO
  return 0;
}
```

## Solution: Sorting + Monotonic Stack
- time: O(n log n), dominated by sorting the cars by position
- space: O(n)

### Explanation
We first pair up each car's position and speed, then sort these pairs by position in *descending* order — so we process the car closest to the target first, then work backward toward the car farthest away. For each car, we compute how long it would take to reach the target driving alone: `(target - position) / speed`. We maintain a stack representing the arrival times of the distinct fleets identified so far, ordered from closest-to-target to farthest. As we process each car (in closest-to-farthest order), if this car's solo arrival time is less than or equal to the time on top of the stack, it means this car will catch up to the fleet ahead of it before (or exactly at) the target, so it merges into that fleet — we don't push a new time. Otherwise, this car will still be behind the fleet ahead when it reaches the target (it's slower or too far back to catch up), so it forms a brand new fleet — we push its own arrival time onto the stack. The final size of the stack is the number of distinct fleets.

### Walkthrough
- Pair each car's `position[i]` and `speed[i]` together, and sort the pairs by position in descending order (closest to target first).
- Initialize an empty stack representing arrival times of fleets identified so far, from closest to farthest.
- For each car (in sorted order):
  - Compute `time = (target - position) / speed`.
  - If the stack is empty, or `time > stack.top()` (this car is strictly slower than the fleet ahead and won't catch up), push `time` onto the stack — it's a new fleet.
  - Otherwise (`time <= stack.top()`), this car catches up to the fleet ahead and merges with it — do nothing (don't push).
- Return the size of the stack.

```typescript
function carFleet(target: number, position: number[], speed: number[]): number {
  const n = position.length;
  const cars: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    cars.push([position[i], speed[i]]);
  }

  cars.sort((a, b) => b[0] - a[0]); // descending by position (closest to target first)

  const stack: number[] = [];

  for (const [pos, spd] of cars) {
    const time = (target - pos) / spd;

    if (stack.length === 0 || time > stack[stack.length - 1]) {
      stack.push(time);
    }
    // otherwise, this car merges into the fleet ahead (top of stack) — do nothing
  }

  return stack.length;
}
```

## Solution: Sorting + Running Maximum (No Explicit Stack)
- time: O(n log n)
- space: O(n) for sorting (O(1) extra beyond that, not counting the output)

### Explanation
We can achieve the same result without maintaining an actual stack data structure, since we only ever need to compare against the *most recent* fleet's arrival time (the top of the stack) — we never need to look further back or pop multiple entries. So instead of a stack, we can just track a single running variable, `lastFleetTime`, representing the arrival time of the most recently formed fleet (the one closest to the target processed so far). Each car either merges into it (if its own solo time is less than or equal to `lastFleetTime`) or starts a new fleet and updates `lastFleetTime` to its own time.

### Walkthrough
- Pair and sort cars by position in descending order, same as before.
- Initialize `fleetCount = 0` and `lastFleetTime = -Infinity` (or use a sentinel indicating "no fleet yet").
- For each car (in sorted order):
  - Compute `time = (target - position) / speed`.
  - If `time > lastFleetTime`, this car forms a new fleet: increment `fleetCount` and update `lastFleetTime = time`.
  - Otherwise, it merges into the existing most-recent fleet — do nothing.
- Return `fleetCount`.

```typescript
function carFleet(target: number, position: number[], speed: number[]): number {
  const n = position.length;
  const cars: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    cars.push([position[i], speed[i]]);
  }

  cars.sort((a, b) => b[0] - a[0]);

  let fleetCount = 0;
  let lastFleetTime = -Infinity;

  for (const [pos, spd] of cars) {
    const time = (target - pos) / spd;

    if (time > lastFleetTime) {
      fleetCount++;
      lastFleetTime = time;
    }
  }

  return fleetCount;
}
```
