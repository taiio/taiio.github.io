---
title: Minimum Window Substring
number: 15
source: NeetCode
category: Sliding Window
difficulty: Hard
tags: Hash Table, String, Sliding Window
url: https://neetcode.io/problems/minimum-window-with-characters
---

## Problem
Given two strings `s` and `t` of lengths `m` and `n` respectively, return the **minimum window substring** of `s` such that every character in `t` (**including duplicates**) is included in the window. If there is no such substring, return the empty string `""`.

The testcases will be generated such that the answer is **unique**.

### Examples

**Example 1:**
```text
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

**Example 2:**
```text
Input: s = "a", t = "a"
Output: "a"
```

**Example 3:**
```text
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window, but s only has one 'a', so return "".
```

### Constraints
- `m == s.length`
- `n == t.length`
- `1 <= m, n <= 10^5`
- `s` and `t` consist of uppercase and lowercase English letters.

## Hints
- Use two frequency maps: `target` frequencies and `window` frequencies.
- Track `have` (number of unique characters with matching frequency) and `need` (total unique characters in t).
- Expand `right` until `have == need`, then shrink `left` as much as possible while keeping `have == need`.

## Template
```typescript
function minWindow(s: string, t: string): string {
  // TODO
}
```

```python
def minWindow(s: str, t: str) -> str:
    # TODO
    pass
```

## Solution: Sliding Window with Frequency Map (Optimal)
- time: O(m + n)
- space: O(m + n)

### Explanation
Expand right until window contains all characters of t. Then contract left to find minimal valid window length.

### Walkthrough
- Count frequency of each char in `t` into `tCount`.
- Initialize `window` map, `have = 0`, `need = tCount.size`.
- `left = 0`, `res = [-1, -1]`, `resLen = Infinity`.
- For `right` from 0 to `s.length - 1`:
-   Add `s[right]` to `window`.
-   If `window[s[right]] === tCount[s[right]]`, increment `have`.
-   While `have === need`:
-     If `right - left + 1 < resLen`, update `res` and `resLen`.
-     Pop `s[left]` from `window`.
-     If `window[s[left]] < tCount[s[left]]`, decrement `have`.
-     `left++`.
- Return substring from `res`.

```typescript
function minWindow(s: string, t: string): string {
  if (t.length === 0 || s.length < t.length) return '';

  const tCount = new Map<string, number>();
  for (const c of t) {
    tCount.set(c, (tCount.get(c) || 0) + 1);
  }

  const window = new Map<string, number>();
  let have = 0;
  const need = tCount.size;

  let minLen = Infinity;
  let minStart = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window.set(c, (window.get(c) || 0) + 1);

    if (tCount.has(c) && window.get(c) === tCount.get(c)) {
      have++;
    }

    while (have === need) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar)! - 1);
      if (tCount.has(leftChar) && window.get(leftChar)! < tCount.get(leftChar)!) {
        have--;
      }
      left++;
    }
  }

  return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
}
```

```python
def minWindow(s: str, t: str) -> str:
    if not t or not s:
        return ""
        
    t_count = {}
    for c in t:
        t_count[c] = t_count.get(c, 0) + 1
        
    window = {}
    have, need = 0, len(t_count)
    res, res_len = [-1, -1], float('inf')
    left = 0
    
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        
        if c in t_count and window[c] == t_count[c]:
            have += 1
            
        while have == need:
            if (right - left + 1) < res_len:
                res = [left, right]
                res_len = right - left + 1
                
            window[s[left]] -= 1
            if s[left] in t_count and window[s[left]] < t_count[s[left]]:
                have -= 1
            left += 1
            
    l, r = res
    return s[l : r + 1] if res_len != float('inf') else ""
```
