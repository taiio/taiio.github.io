---
title: Decode Ways
number: 56
source: NeetCode
category: 1-D Dynamic Programming
difficulty: Medium
tags: String, Dynamic Programming
url: https://neetcode.io/problems/decode-ways
---

## Problem
A message containing letters from `A-Z` can be **encoded** into numbers using the following mapping:

- `'A' -> "1"`
- `'B' -> "2"`
- ...
- `'Z' -> "26"`

To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above.

Given a string `s` containing only digits, return the **number of ways** to decode it.

### Examples

**Example 1:**
```text
Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
```

**Example 2:**
```text
Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```

**Example 3:**
```text
Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
```

### Constraints
- `1 <= s.length <= 100`
- `s` contains only digits and may contain leading zero(s).

## Hints
- Let `dp[i]` be the number of ways to decode string of length `i`.
- Single digit decode: if `s[i - 1] != '0'`, `dp[i] += dp[i - 1]`.
- Two digit decode: if `10 <= parseInt(s[i-2...i-1]) <= 26`, `dp[i] += dp[i - 2]`.

## Template
```typescript
function numDecodings(s: string): number {
  // TODO
}
```

```python
def numDecodings(s: str) -> int:
    # TODO
    pass
```

## Solution: Dynamic Programming with O(1) Space (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Maintain the number of ways to decode the last two subproblems.

### Walkthrough
- If `s[0] === '0'`, return 0.
- Set `prev2 = 1` (dp[0]), `prev1 = 1` (dp[1]).
- For `i` from 2 to `s.length`:
-   `curr = 0`.
-   Single digit: if `s[i - 1] !== '0'`, `curr += prev1`.
-   Two digits: `twoDigit = parseInt(s.slice(i - 2, i))`.
-   If `twoDigit >= 10 && twoDigit <= 26`, `curr += prev2`.
-   `prev2 = prev1`; `prev1 = curr`.
- Return `prev1`.

```typescript
function numDecodings(s: string): number {
  if (!s || s[0] === '0') return 0;

  let prev2 = 1;
  let prev1 = 1;

  for (let i = 2; i <= s.length; i++) {
    let curr = 0;
    const single = parseInt(s[i - 1], 10);
    const double = parseInt(s.slice(i - 2, i), 10);

    if (single >= 1 && single <= 9) {
      curr += prev1;
    }
    if (double >= 10 && double <= 26) {
      curr += prev2;
    }

    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}
```

```python
def numDecodings(s: str) -> int:
    if not s or s[0] == '0':
        return 0
        
    prev2 = 1
    prev1 = 1
    
    for i in range(2, len(s) + 1):
        curr = 0
        single = int(s[i - 1])
        double = int(s[i - 2 : i])
        
        if 1 <= single <= 9:
            curr += prev1
        if 10 <= double <= 26:
            curr += prev2
            
        prev2 = prev1
        prev1 = curr
        
    return prev1
```
