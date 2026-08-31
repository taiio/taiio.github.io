---
title: Best Time to Buy and Sell Stock
number: 12
source: NeetCode
category: Sliding Window
difficulty: Easy
tags: Array, Dynamic Programming, Sliding Window
url: https://neetcode.io/problems/buy-and-sell-crypto
---

## Problem
You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the **maximum profit** you can achieve from this transaction. If you cannot achieve any profit, return `0`.

### Examples

**Example 1:**
```text
Input: prices = [7, 1, 5, 3, 6, 4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
```

**Example 2:**
```text
Input: prices = [7, 6, 4, 3, 1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

### Constraints
- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

## Hints
- Track the lowest buying price seen so far as you iterate through the prices.
- For each day, the potential profit is `prices[i] - minPrice`.
- Maintain the maximum profit observed.

## Template
```typescript
function maxProfit(prices: number[]): number {
  // TODO
}
```

```python
def maxProfit(prices: list[int]) -> int:
    # TODO
    pass
```

## Solution: One Pass / Min Tracker (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Maintain the minimum price seen so far. At each day, calculate profit if sold today and update the maximum profit.

### Walkthrough
- Initialize `minPrice = Infinity` and `maxProfit = 0`.
- Iterate through each price in `prices`.
- If `price < minPrice`, update `minPrice = price`.
- Else update `maxProfit = max(maxProfit, price - minPrice)`.
- Return `maxProfit`.

```typescript
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }

  return maxProfit;
}
```

```python
def maxProfit(prices: list[int]) -> int:
    min_price = float('inf')
    max_profit = 0
    
    for price in prices:
        if price < min_price:
            min_price = price
        else:
            max_profit = max(max_profit, price - min_price)
            
    return max_profit
```
