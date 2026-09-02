---
title: Best Time to Buy and Sell Stock
number: 121
source: LeetCode
category: Sliding Window
difficulty: Easy
tags: Array, Dynamic Programming, Sliding Window
url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
---

## Problem
You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

**Example 1:**
```
Input: prices = [7,1,5,3,6,4]
Output: 5
```
Explanation: buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

**Example 2:**
```
Input: prices = [7,6,4,3,1]
Output: 0
```
Explanation: prices are decreasing every day, so no transaction is done and the max profit is 0.

**Constraints:**
- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

## Hints
- The brute force approach tries every pair of buy/sell days, which is O(n²).
- To sell at a profit on day `i`, you'd want to have bought at the lowest price seen on any day before `i`. Try tracking the minimum price seen so far as you scan through the array.
- This is a "shrink-or-grow" Sliding Window in disguise: keep a `left` pointer at the lowest price seen so far, and a `right` pointer scanning forward computing potential profit, updating `left` whenever a new lower price is found.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function maxProfit(prices: number[]): number {
  // TODO
  return 0;
}
```

## Solution: Brute Force
- time: O(n²)
- space: O(1)

### Explanation
The most direct approach checks every possible pair of buy day `i` and sell day `j` (with `j > i`), computing the profit `prices[j] - prices[i]` for each pair and keeping track of the best one found.

### Walkthrough
- Initialize `maxProfit = 0`.
- For each `i` from `0` to `n - 2`:
  - For each `j` from `i + 1` to `n - 1`:
    - Compute `profit = prices[j] - prices[i]`.
    - Update `maxProfit = max(maxProfit, profit)`.
- Return `maxProfit`.

```typescript
function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  const n = prices.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const profit = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}
```

## Solution: Sliding Window (One Pass)
- time: O(n)
- space: O(1)

### Explanation
We can think of this as a Sliding Window with a `left` pointer marking the best day to buy so far and a `right` pointer scanning forward as the candidate sell day. At each `right` position, if `prices[right] < prices[left]`, the window's "buy point" should shift — since buying at this lower price is strictly better going forward, we move `left` to `right`. Otherwise, we compute the profit `prices[right] - prices[left]` and update the best profit seen. Because `left` only ever moves forward and `right` scans forward exactly once, this achieves O(n) time using just two tracked values.

### Walkthrough
- Initialize `left = 0`, `right = 1`, and `maxProfit = 0`.
- While `right < n`:
  - If `prices[right] < prices[left]`, move `left` to `right` (a new lower buy price has been found).
  - Otherwise, compute `profit = prices[right] - prices[left]` and update `maxProfit = max(maxProfit, profit)`.
  - Move `right` forward.
- Return `maxProfit`.

```typescript
function maxProfit(prices: number[]): number {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[right] < prices[left]) {
      left = right;
    } else {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    }
    right++;
  }

  return maxProfit;
}
```

## Solution: Dynamic Programming (Running Minimum)
- time: O(n)
- space: O(1)

### Explanation
This is functionally equivalent to the sliding window approach but framed explicitly as a Dynamic Programming state update: at each day, track `minPriceSoFar`, the lowest price seen up to and including the current day, and update the running best profit as `max(bestProfit, currentPrice - minPriceSoFar)`. This framing generalizes naturally to the harder "Buy and Sell Stock II/III/IV" variants that require explicit DP states.

### Walkthrough
- Initialize `minPriceSoFar = prices[0]` and `bestProfit = 0`.
- For each price starting from index `1`:
  - Update `bestProfit = max(bestProfit, price - minPriceSoFar)`.
  - Update `minPriceSoFar = min(minPriceSoFar, price)`.
- Return `bestProfit`.

```typescript
function maxProfit(prices: number[]): number {
  let minPriceSoFar = prices[0];
  let bestProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    bestProfit = Math.max(bestProfit, prices[i] - minPriceSoFar);
    minPriceSoFar = Math.min(minPriceSoFar, prices[i]);
  }

  return bestProfit;
}
```
