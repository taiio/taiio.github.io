---
title: Word Break
number: 52
source: NeetCode
category: 1-D Dynamic Programming
difficulty: Medium
tags: Array, Hash Table, String, Dynamic Programming, Trie, Memoization
url: https://neetcode.io/problems/word-break
---

## Problem
Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

### Examples

**Example 1:**
```text
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

**Example 2:**
```text
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
```

**Example 3:**
```text
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
```

### Constraints
- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` and `wordDict[i]` consist of only lowercase English letters.
- All the strings of `wordDict` are **unique**.

## Hints
- Let `dp[i]` represent whether `s[0...i-1]` can be segmented using dictionary words.
- Base case: `dp[0] = true`.
- For each index i, check every word `w` in `wordDict`: if `s` ends with `w` at `i` and `dp[i - len(w)]` is true, then `dp[i] = true`.

## Template
```typescript
function wordBreak(s: string, wordDict: string[]): boolean {
  // TODO
}
```

```python
def wordBreak(s: str, wordDict: list[str]) -> bool:
    # TODO
    pass
```

## Solution: Bottom-Up Dynamic Programming (Optimal)
- time: O(n * m * k) where n is s.length, m is wordDict length, k is avg word length
- space: O(n)

### Explanation
Compute boolean reachability array `dp` where `dp[i]` is true if prefix of length `i` can be segmented.

### Walkthrough
- Initialize `dp` array of size `s.length + 1` with false, and `dp[0] = true`.
- For `i` from 1 to `s.length`:
-   For each `w` in `wordDict`:
-     If `i >= w.length` and `dp[i - w.length]` is true and `s.slice(i - w.length, i) === w`:
-       `dp[i] = true`.
-       break.
- Return `dp[s.length]`.

```typescript
function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (const w of wordDict) {
      if (i >= w.length && dp[i - w.length] && s.slice(i - w.length, i) === w) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}
```

```python
def wordBreak(s: str, wordDict: list[str]) -> bool:
    dp = [False] * (len(s) + 1)
    dp[0] = True
    
    for i in range(1, len(s) + 1):
        for w in wordDict:
            if i >= len(w) and dp[i - len(w)] and s[i - len(w) : i] == w:
                dp[i] = True
                break
                
    return dp[len(s)]
```
