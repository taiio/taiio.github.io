---
title: Longest Common Subsequence
number: 60
source: NeetCode
category: 2-D Dynamic Programming
difficulty: Medium
tags: String, Dynamic Programming
url: https://neetcode.io/problems/longest-common-subsequence
---

## Problem
Given two strings `text1` and `text2`, return the length of their longest **common subsequence**. If there is no **common subsequence**, return `0`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

### Examples

**Example 1:**
```text
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
```

**Example 2:**
```text
Input: text1 = "abc", text2 = "abc"
Output: 3
```

**Example 3:**
```text
Input: text1 = "abc", text2 = "def"
Output: 0
```

### Constraints
- `1 <= text1.length, text2.length <= 1000`
- `text1` and `text2` consist of only lowercase English characters.

## Hints
- Let `dp[i][j]` be the LCS length of `text1[i...]` and `text2[j...]`.
- If `text1[i] == text2[j]`, `dp[i][j] = 1 + dp[i+1][j+1]`.
- Else, `dp[i][j] = max(dp[i+1][j], dp[i][j+1])`.

## Template
```typescript
function longestCommonSubsequence(text1: string, text2: string): number {
  // TODO
}
```

```python
def longestCommonSubsequence(text1: str, text2: str) -> int:
    # TODO
    pass
```

## Solution: 2D Dynamic Programming (Optimal)
- time: O(m * n)
- space: O(m * n)

### Explanation
Construct a 2D table where `dp[i][j]` represents the LCS length between prefix `text1[0...i-1]` and `text2[0...j-1]`.

### Walkthrough
- Create 2D array `dp` of size `(m + 1) x (n + 1)` filled with 0.
- For `i` from 1 to `m`:
-   For `j` from 1 to `n`:
-     If `text1[i - 1] === text2[j - 1]`, `dp[i][j] = 1 + dp[i - 1][j - 1]`.
-     Else `dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])`.
- Return `dp[m][n]`.

```typescript
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}
```

```python
def longestCommonSubsequence(text1: str, text2: str) -> int:
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
                
    return dp[m][n]
```
