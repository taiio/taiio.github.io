# Problem 1 — Two Sum

---
title: Two Sum
number: 1
source: LeetCode
category: Arrays & Hashing
difficulty: Easy
tags: Array, Hash Table, Two Pointers, Sorting
url: https://leetcode.com/problems/two-sum/description/
---

## Problem

You are given an integer array `nums` and an integer `target`. Find the indices of two different elements whose values add up to `target`.

The problem guarantees that exactly one valid pair exists, and the same array element cannot be used twice. The two returned indices may be in either order.

### Examples

**Example 1**

```text
Input:
nums = [2, 7, 11, 15]
target = 9

Output:
[0, 1]

Explanation:
nums[0] + nums[1] = 2 + 7 = 9.
```

**Example 2**

```text
Input:
nums = [3, 2, 4]
target = 6

Output:
[1, 2]
```

**Example 3**

```text
Input:
nums = [3, 3]
target = 6

Output:
[0, 1]
```

### Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Exactly one valid answer exists.

### Core Insight

For a value `x`, its required partner is:

```text
needed = target - x
```

The main question is therefore not "which pair should I try?", but:

> How quickly can I determine whether `needed` exists, and where it occurs?

This leads naturally from brute force to sorting/two-pointers and finally to hash-table solutions.

## Hints

- **Hint 1:** Start with the simplest solution: try every pair of indices.
- **Hint 2:** If you fix `nums[i]`, you only need to search for `target - nums[i]`.
- **Hint 3:** Searching the entire array for the partner repeatedly is expensive. Consider a data structure that gives near-constant-time lookup.
- **Hint 4:** A `Map` can store a value together with the index where you saw it.
- **Hint 5:** You can also sort the values and use two pointers, but remember that sorting destroys the original index positions unless you store them.

## Template

```typescript
function solve(nums: number[], target: number): number[] {
  // TODO
  return [];
}
```

## Solution: Brute Force

- time: `O(n^2)`
- space: `O(1)` auxiliary space

### Explanation

Check every pair `(i, j)` where `i < j`.

For each pair, calculate:

```text
nums[i] + nums[j]
```

If the sum equals `target`, return the two original indices.

This is the most direct solution. It is also an important baseline because it makes the optimization target obvious: we want to avoid repeatedly checking all remaining elements.

### Walkthrough

For:

```text
nums = [2, 7, 11, 15]
target = 9
```

1. Check `2 + 7`.
2. The result is `9`.
3. Return `[0, 1]`.

### TypeScript

```typescript
function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}
```

---

## Solution: Sorting + Two Pointers

- time: `O(n log n)`
- space: `O(n)` because we preserve original indices

### Explanation

Create pairs containing both the value and its original index:

```text
[value, originalIndex]
```

Sort these pairs by value.

Then use two pointers:

- `left` starts at the smallest value.
- `right` starts at the largest value.

If their sum is too small, increase `left`.

If their sum is too large, decrease `right`.

If their sum equals `target`, return the stored original indices.

### Walkthrough

For:

```text
nums = [3, 2, 4]
target = 6
```

Create:

```text
[(3, 0), (2, 1), (4, 2)]
```

After sorting:

```text
[(2, 1), (3, 0), (4, 2)]
```

1. `2 + 4 = 6`.
2. The stored indices are `1` and `2`.
3. Return `[1, 2]`.

### TypeScript

```typescript
function twoSumTwoPointers(
  nums: number[],
  target: number
): number[] {
  const items = nums.map((value, index) => ({
    value,
    index,
  }));

  items.sort((a, b) => a.value - b.value);

  let left = 0;
  let right = items.length - 1;

  while (left < right) {
    const sum = items[left].value + items[right].value;

    if (sum === target) {
      return [items[left].index, items[right].index];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
```

---

## Solution: Two-Pass Hash Map

- time: `O(n)` average
- space: `O(n)`

### Explanation

First store every value and its index in a `Map`.

Then scan the array again. For each value `x`, calculate:

```text
target - x
```

If that required value is already in the map, we have found the answer.

The two-pass version separates:

1. building the lookup table;
2. performing the lookup.

This makes the logic easy to reason about.

### Walkthrough

For:

```text
nums = [2, 7, 11, 15]
target = 9
```

The map becomes:

```text
2  -> 0
7  -> 1
11 -> 2
15 -> 3
```

For `2`:

```text
needed = 9 - 2 = 7
```

`7` exists at index `1`, so return `[0, 1]`.

### TypeScript

```typescript
function twoSumTwoPassMap(
  nums: number[],
  target: number
): number[] {
  const indexByValue = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    indexByValue.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    const partnerIndex = indexByValue.get(needed);

    if (
      partnerIndex !== undefined &&
      partnerIndex !== i
    ) {
      return [i, partnerIndex];
    }
  }

  return [];
}
```

---

## Solution: One-Pass Hash Map

- time: `O(n)` average
- space: `O(n)`

### Explanation

We can improve the two-pass solution by combining the lookup and insertion into one scan.

At index `i`:

1. Compute `needed = target - nums[i]`.
2. Check whether `needed` has already appeared.
3. If yes, return the previous index and `i`.
4. Otherwise store `nums[i] -> i`.

The crucial detail is that we check before inserting the current element. This guarantees that we never use the same array position twice.

### Walkthrough

For:

```text
nums = [3, 3]
target = 6
```

- At index `0`, needed is `3`. It is not in the map. Store `3 -> 0`.
- At index `1`, needed is `3`. It is already in the map at index `0`.
- Return `[0, 1]`.

### TypeScript

```typescript
function twoSumOnePassMap(
  nums: number[],
  target: number
): number[] {
  const indexByValue = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (indexByValue.has(needed)) {
      return [indexByValue.get(needed)!, i];
    }

    indexByValue.set(nums[i], i);
  }

  return [];
}
```

### Approach Comparison

| Approach | Time | Space | Main Idea |
|---|---:|---:|---|
| Brute Force | `O(n^2)` | `O(1)` | Try every pair |
| Sorting + Two Pointers | `O(n log n)` | `O(n)` | Sort values while preserving indices |
| Two-Pass Map | `O(n)` avg. | `O(n)` | Build lookup, then search |
| One-Pass Map | `O(n)` avg. | `O(n)` | Lookup and insert in one scan |

---
