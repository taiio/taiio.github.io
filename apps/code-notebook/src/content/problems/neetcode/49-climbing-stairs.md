---
title: Climbing Stairs
number: 49
source: NeetCode
category: 1-D Dynamic Programming
difficulty: Easy
tags: Math, Dynamic Programming, Memoization
url: https://neetcode.io/problems/climbing-stairs
---

## Problem
You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

### Examples

**Example 1:**
```text
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Example 2:**
```text
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

### Constraints
- `1 <= n <= 45`

## Hints
- To reach step n, you can take a 1-step from step n-1 or a 2-step from step n-2.
- This is Fibonacci: `ways(n) = ways(n-1) + ways(n-2)` with base cases `ways(1) = 1` and `ways(2) = 2`.

## Template
```typescript
function climbStairs(n: number): number {
  // TODO
}
```

```python
def climbStairs(n: int) -> int:
    # TODO
    pass
```

## Solution: Bottom-Up DP Space Optimized (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Maintain the last two step counts using two variables, updating them iteratively from 1 to n.

### Walkthrough
- If `n <= 2`, return `n`.
- Set `prev1 = 2` (ways to reach step 2) and `prev2 = 1` (ways to reach step 1).
- For `i` from 3 to `n`:
-   `curr = prev1 + prev2`.
-   `prev2 = prev1`.
-   `prev1 = curr`.
- Return `prev1`.

```typescript
function climbStairs(n: number): number {
  if (n <= 2) return n;

  let prev2 = 1;
  let prev1 = 2;

  for (let i = 3; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}
```

```python
def climbStairs(n: int) -> int:
    if n <= 2:
        return n
        
    prev2, prev1 = 1, 2
    for _ in range(3, n + 1):
        curr = prev1 + prev2
        prev2 = prev1
        prev1 = curr
        
    return prev1
```
