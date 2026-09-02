---
title: Longest Consecutive Sequence
number: 128
source: LeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, Union Find
url: https://leetcode.com/problems/longest-consecutive-sequence/
---

## Problem
Given an unsorted array of integers `nums`, return the length of the longest sequence of consecutive integers (numbers that follow each other with a difference of 1) that can be formed using elements from `nums`.

You must write an algorithm that runs in **O(n)** time.

**Example 1:**
```
Input: nums = [100,4,200,1,3,2]
Output: 4
```
Explanation: the longest consecutive sequence is `[1, 2, 3, 4]`, which has length 4.

**Example 2:**
```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```
Explanation: the longest consecutive sequence is `[0, 1, 2, 3, 4, 5, 6, 7, 8]`, which has length 9.

**Constraints:**
- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Hints
- Sorting the array first would let you find consecutive runs easily, but sorting costs O(n log n), which doesn't meet the required O(n) time.
- Put all numbers into a Hash Set for O(1) lookups. For each number, check whether `number - 1` exists in the set — if it doesn't, this number is the **start** of a potential sequence.
- Only start counting a sequence's length from numbers that are confirmed sequence starts (i.e. `number - 1` is not in the set). This guarantees that each number is only ever the starting point of at most one sequence-counting walk, which is what keeps the overall algorithm at O(n) instead of degrading to O(n²).

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function longestConsecutive(nums: number[]): number {
  // TODO
  return 0;
}
```

## Solution: Sorting
- time: O(n log n)
- space: O(n) (or O(1) extra if sorting in place and duplicates are handled without extra structures)

### Explanation
Even though it doesn't meet the strict O(n) requirement, sorting is the most natural first approach to understand. Once the array is sorted, consecutive integers become adjacent (aside from duplicates, which we skip). We can then scan once, tracking the length of the current consecutive run and resetting it whenever there's a gap greater than 1.

### Walkthrough
- If `nums` is empty, return 0.
- Sort `nums` in ascending order.
- Initialize `longest = 1` and `current = 1`.
- Iterate from index 1 to the end:
  - If `nums[i] === nums[i - 1]`, skip (duplicate, doesn't break or extend the run).
  - Else if `nums[i] === nums[i - 1] + 1`, increment `current` and update `longest = max(longest, current)`.
  - Otherwise, reset `current = 1` (the run is broken).
- Return `longest`.

```typescript
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  const sorted = [...nums].sort((a, b) => a - b);
  let longest = 1;
  let current = 1;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      continue;
    } else if (sorted[i] === sorted[i - 1] + 1) {
      current++;
      longest = Math.max(longest, current);
    } else {
      current = 1;
    }
  }

  return longest;
}
```

## Solution: Hash Set with Sequence-Start Detection
- time: O(n)
- space: O(n)

### Explanation
First, we put every number into a Hash Set so we can check membership in O(1). Then, for each number in the set, we ask: "is this number the start of a sequence?" It's a start exactly when `number - 1` is **not** in the set — meaning there's nothing extending the sequence to the left. For each such start, we count forward (`number + 1`, `number + 2`, ...) as long as those values exist in the set, tracking how long the run is. Because we only ever start counting from true sequence starts, every number in the array gets visited by the inner counting loop at most once across the entire algorithm, keeping the total work at O(n).

### Walkthrough
- Put all numbers from `nums` into a Hash Set `numSet`.
- Initialize `longest = 0`.
- For each `num` in `numSet`:
  - If `num - 1` is in `numSet`, skip it — it's not a sequence start.
  - Otherwise, this is a sequence start. Set `length = 1` and `current = num`.
  - While `current + 1` is in `numSet`, increment `current` and increment `length`.
  - Update `longest = max(longest, length)`.
- Return `longest`.

```typescript
function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    if (numSet.has(num - 1)) {
      continue;
    }

    let length = 1;
    let current = num;
    while (numSet.has(current + 1)) {
      current++;
      length++;
    }

    longest = Math.max(longest, length);
  }

  return longest;
}
```

## Solution: Union-Find (Disjoint Set Union)
- time: O(n * α(n)), where α is the inverse Ackermann function — effectively O(n) in practice
- space: O(n)

### Explanation
We can model the problem as a graph-connectivity question: treat each number as its own node, and whenever two numbers `x` and `x + 1` both exist in the array, union their sets together. After processing every number this way, each connected component represents one consecutive run, and the size of the largest component is the answer. A Union-Find (Disjoint Set Union) structure with path compression and union by size/rank makes each union and find operation nearly O(1) amortized, so the overall algorithm is nearly linear.

### Walkthrough
- Deduplicate `nums` into a list of unique values, and map each value to an index for the Union-Find structure.
- Initialize `parent[i] = i` and `size[i] = 1` for every unique value's index.
- For each unique value `x`, if `x + 1` also exists in the map, union the set containing `x` with the set containing `x + 1`.
- After all unions, find the root of every element and track the maximum `size[root]` seen — this is the length of the longest consecutive sequence.
- If `nums` is empty, return 0 directly.

```typescript
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  const uniqueValues = Array.from(new Set(nums));
  const indexOf = new Map<number, number>();
  uniqueValues.forEach((value, i) => indexOf.set(value, i));

  const parent = uniqueValues.map((_, i) => i);
  const size = new Array(uniqueValues.length).fill(1);

  function find(i: number): number {
    while (parent[i] !== i) {
      parent[i] = parent[parent[i]]; // path compression
      i = parent[i];
    }
    return i;
  }

  function union(i: number, j: number): void {
    const rootI = find(i);
    const rootJ = find(j);
    if (rootI === rootJ) return;

    if (size[rootI] < size[rootJ]) {
      parent[rootI] = rootJ;
      size[rootJ] += size[rootI];
    } else {
      parent[rootJ] = rootI;
      size[rootI] += size[rootJ];
    }
  }

  for (const value of uniqueValues) {
    const nextIndex = indexOf.get(value + 1);
    if (nextIndex !== undefined) {
      union(indexOf.get(value)!, nextIndex);
    }
  }

  let longest = 0;
  for (let i = 0; i < uniqueValues.length; i++) {
    longest = Math.max(longest, size[find(i)]);
  }

  return longest;
}
```
