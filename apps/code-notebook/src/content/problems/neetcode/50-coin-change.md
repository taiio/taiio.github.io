---
title: Coin Change
number: 50
source: NeetCode
category: 1-D Dynamic Programming
difficulty: Medium
tags: Array, Dynamic Programming, Breadth-First Search
url: https://neetcode.io/problems/coin-change
---

## Problem
You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

### Examples

**Example 1:**
```text
Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
```

**Example 2:**
```text
Input: coins = [2], amount = 3
Output: -1
```

**Example 3:**
```text
Input: coins = [1], amount = 0
Output: 0
```

### Constraints
- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2^31 - 1`
- `0 <= amount <= 10^4`

## Hints
- Let `dp[i]` be the minimum coins needed to make amount `i`.
- Transition: `dp[i] = min(dp[i - c] + 1)` for all coin `c <= i`.
- Initialize `dp` with `Infinity` and `dp[0] = 0`.

## Template
```typescript
function coinChange(coins: number[], amount: number): number {
  // TODO
}
```

```python
def coinChange(coins: list[int], amount: int) -> int:
    # TODO
    pass
```

## Solution: Bottom-Up Dynamic Programming (Optimal)
- time: O(amount * n) where n is number of coins
- space: O(amount)

### Explanation
Compute the minimum coins for every amount from 1 to `amount` using previous subproblem results.

### Walkthrough
- Create DP array of size `amount + 1` filled with `amount + 1` (acting as infinity).
- Set base case `dp[0] = 0`.
- For each `a` from 1 to `amount`:
-   For each coin `c` in `coins`:
-     If `a - c >= 0`:
-       `dp[a] = min(dp[a], 1 + dp[a - c])`.
- Return `dp[amount]` if `dp[amount] <= amount` else `-1`.

```typescript
function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let a = 1; a <= amount; a++) {
    for (const c of coins) {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}
```

```python
def coinChange(coins: list[int], amount: int) -> int:
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    
    for a in range(1, amount + 1):
        for c in coins:
            if a - c >= 0:
                dp[a] = min(dp[a], 1 + dp[a - c])
                
    return dp[amount] if dp[amount] <= amount else -1
```
