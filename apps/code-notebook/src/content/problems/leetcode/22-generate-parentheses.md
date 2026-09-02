---
title: Generate Parentheses
number: 22
source: LeetCode
category: Stack
difficulty: Medium
tags: String, Dynamic Programming, Backtracking
url: https://leetcode.com/problems/generate-parentheses/
---

## Problem
Given `n` pairs of parentheses, write a function to generate all combinations of well-formed (valid) parentheses.

**Example 1:**
```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

**Example 2:**
```
Input: n = 1
Output: ["()"]
```

**Constraints:**
- `1 <= n <= 8`

## Hints
- A string of parentheses is valid exactly when, at every prefix, the number of `'('` seen is at least the number of `')'` seen, and the total counts are equal by the end.
- This naturally suggests a **Backtracking** approach: build the string character by character, choosing to add `'('` (as long as you haven't used all `n` yet) or `')'` (as long as it wouldn't exceed the number of `'('` used so far), and backtrack once a full-length string of `2n` characters has been built.
- Track two counters as you build: how many open parens have been used (`openCount`) and how many close parens have been used (`closeCount`). You can add `'('` when `openCount < n`, and you can add `')'` when `closeCount < openCount`.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function generateParenthesis(n: number): string[] {
  // TODO
  return [];
}
```

## Solution: Backtracking
- time: O(4^n / sqrt(n)) (the n-th Catalan number, which bounds the number of valid combinations, times O(n) to build each string)
- space: O(4^n / sqrt(n)) for the output, plus O(n) for the recursion depth

### Explanation
We build the string one character at a time using Backtracking (a form of Depth-First Search over choices). At each step, we track how many open parentheses (`openCount`) and close parentheses (`closeCount`) have been placed so far. We're allowed to place another `'('` as long as we haven't used all `n` yet (`openCount < n`), and we're allowed to place a `')'` only if doing so wouldn't create more closing than opening parens so far (`closeCount < openCount`) — this constraint is exactly what guarantees every prefix stays valid. When the current string reaches length `2n`, it's a complete, valid combination, so we record it and backtrack to explore other branches.

### Walkthrough
- Initialize an empty result array and a mutable path (e.g. an array of characters or a string).
- Define a recursive function `backtrack(openCount, closeCount)`:
  - If the current path length equals `2n`, add a copy of the path (joined into a string) to the result and return.
  - If `openCount < n`, append `'('`, recurse with `backtrack(openCount + 1, closeCount)`, then remove the last character (backtrack).
  - If `closeCount < openCount`, append `')'`, recurse with `backtrack(openCount, closeCount + 1)`, then remove the last character (backtrack).
- Call `backtrack(0, 0)` to start, then return the result array.

```typescript
function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  const path: string[] = [];

  function backtrack(openCount: number, closeCount: number): void {
    if (path.length === 2 * n) {
      result.push(path.join(""));
      return;
    }

    if (openCount < n) {
      path.push("(");
      backtrack(openCount + 1, closeCount);
      path.pop();
    }

    if (closeCount < openCount) {
      path.push(")");
      backtrack(openCount, closeCount + 1);
      path.pop();
    }
  }

  backtrack(0, 0);
  return result;
}
```

## Solution: Dynamic Programming (Build from Smaller n)
- time: O(4^n / sqrt(n)) (same asymptotic bound as backtracking, since we still generate all valid combinations)
- space: O(4^n / sqrt(n))

### Explanation
We can build up the answer for `n` pairs using the answers for all smaller numbers of pairs, similar to how Catalan numbers are defined recursively. Every valid combination of `n` pairs can be decomposed as `"(" + A + ")" + B`, where `A` is some valid combination using `i` pairs (fully enclosed within the first matched pair) and `B` is a valid combination using the remaining `n - 1 - i` pairs, for some `i` from `0` to `n - 1`. By computing and storing the valid combinations for every count from `0` up to `n`, we can construct each new count's combinations from the previously computed smaller ones.

### Walkthrough
- Create an array `dp` of length `n + 1`, where `dp[i]` will hold all valid combinations using `i` pairs. Initialize `dp[0] = [""]` (the empty combination for 0 pairs).
- For each `count` from `1` to `n`:
  - Initialize `dp[count] = []`.
  - For each `i` from `0` to `count - 1` (representing how many pairs go inside the first matched pair):
    - Let `left = dp[i]` (combinations inside the parens) and `right = dp[count - 1 - i]` (combinations after the closing paren).
    - For every combination `a` in `left` and every combination `b` in `right`, form `"(" + a + ")" + b` and add it to `dp[count]`.
- Return `dp[n]`.

```typescript
function generateParenthesis(n: number): string[] {
  const dp: string[][] = [[""]];

  for (let count = 1; count <= n; count++) {
    const current: string[] = [];

    for (let i = 0; i < count; i++) {
      const left = dp[i];
      const right = dp[count - 1 - i];

      for (const a of left) {
        for (const b of right) {
          current.push(`(${a})${b}`);
        }
      }
    }

    dp.push(current);
  }

  return dp[n];
}
```
