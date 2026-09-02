---
title: Koko Eating Bananas
number: 875
source: LeetCode
category: Binary Search
difficulty: Medium
tags: Array, Binary Search
url: https://leetcode.com/problems/koko-eating-bananas/
---

## Problem
Koko loves to eat bananas. There are `n` piles of bananas, the `i`-th pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer `k` such that she can eat all the bananas within `h` hours.

**Example 1:**
```
Input: piles = [3,6,7,11], h = 8
Output: 4
```

**Example 2:**
```
Input: piles = [30,11,23,4,20], h = 5
Output: 30
```

**Example 3:**
```
Input: piles = [30,11,23,4,20], h = 6
Output: 23
```

**Constraints:**
- `1 <= piles.length <= 10^4`
- `piles.length <= h <= 10^9`
- `1 <= piles[i] <= 10^9`

## Hints
- For a fixed eating speed `k`, you can directly compute how many hours it would take to finish all piles: for each pile, it takes `ceil(pile / k)` hours, and you sum these up across all piles.
- As `k` increases, the total hours needed can only decrease or stay the same — this "monotonic" relationship between speed and time is exactly what allows **Binary Search on the answer** (searching over possible values of `k`, not over the array itself).
- Binary search `k` between `1` and `max(piles)` (eating faster than the largest pile is never necessary — a single hour is always enough for any pile once `k >= max(piles)`). For each candidate `k`, check whether the total hours needed is `<= h`; shrink the search range accordingly.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function minEatingSpeed(piles: number[], h: number): number {
  // TODO
  return 1;
}
```

## Solution: Binary Search on the Answer
- time: O(n log m), where n is the number of piles and m is the maximum pile size
- space: O(1)

### Explanation
Rather than searching through the array `piles` directly, we binary search over the space of possible *eating speeds* `k`, from `1` up to `max(piles)`. For any candidate speed `k`, we can compute in O(n) time exactly how many hours Koko would need: summing `ceil(pile / k)` for every pile. This "hours needed" function is monotonically non-increasing as `k` increases (a faster speed never takes more hours), which means we can binary search for the *smallest* `k` such that the hours needed is `<= h`. If a candidate `k` works (hours needed `<= h`), we try to find an even smaller (slower) speed that still works by moving `right` down; if `k` doesn't work, we need to increase the speed by moving `left` up.

### Walkthrough
- Initialize `left = 1` and `right = max(piles)`.
- While `left < right`:
  - Compute `mid = Math.floor((left + right) / 2)` as the candidate speed.
  - Compute `hoursNeeded` as the sum of `Math.ceil(pile / mid)` across all piles.
  - If `hoursNeeded <= h`, this speed works; try a smaller speed by setting `right = mid`.
  - Otherwise, this speed is too slow; increase it by setting `left = mid + 1`.
- Once `left === right`, this is the minimum working speed. Return `left`.

```typescript
function minEatingSpeed(piles: number[], h: number): number {
  const hoursNeededAt = (speed: number): number => {
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / speed);
    }
    return hours;
  };

  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (hoursNeededAt(mid) <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
```

## Solution: Linear Search on Speed (Baseline)
- time: O(n * m), where n is the number of piles and m is the maximum pile size
- space: O(1)

### Explanation
As a baseline to understand why binary search is needed, we could simply try every possible speed starting from `1` upward, checking each one's total hours needed, and returning the first speed that works. This is correct but far too slow for large pile sizes since `m` can be up to `10^9` — it's included here mainly to contrast with the binary search approach and make clear why exploiting the monotonic relationship between speed and hours is essential.

### Walkthrough
- Define a helper function computing hours needed for a given speed, as before.
- For each candidate speed `k` starting from `1` and increasing by 1:
  - If `hoursNeededAt(k) <= h`, return `k` immediately (the first working speed found is the minimum, since hours needed only decreases as speed increases).

```typescript
function minEatingSpeed(piles: number[], h: number): number {
  const hoursNeededAt = (speed: number): number => {
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / speed);
    }
    return hours;
  };

  const maxPile = Math.max(...piles);

  for (let speed = 1; speed <= maxPile; speed++) {
    if (hoursNeededAt(speed) <= h) {
      return speed;
    }
  }

  return maxPile;
}
```
