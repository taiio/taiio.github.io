---
title: Longest Repeating Character Replacement
number: 14
source: NeetCode
category: Sliding Window
difficulty: Medium
tags: Hash Table, String, Sliding Window
url: https://neetcode.io/problems/longest-repeating-substring-with-replacement
---

## Problem
You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

### Examples

**Example 1:**
```text
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with 'B's or vice versa.
```

**Example 2:**
```text
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4.
```

### Constraints
- `1 <= s.length <= 10^5`
- `s` consists of only uppercase English letters.
- `0 <= k <= s.length`

## Hints
- In any window, `window_length - max_frequency_char_count` is the number of replacements needed.
- If `(right - left + 1) - max_freq <= k`, the window is valid.
- If invalid, increment `left` to shrink window.

## Template
```typescript
function characterReplacement(s: string, k: number): number {
  // TODO
}
```

```python
def characterReplacement(s: str, k: int) -> int:
    # TODO
    pass
```

## Solution: Sliding Window (Optimal)
- time: O(n)
- space: O(1) (26 characters)

### Explanation
Maintain a sliding window and track max frequency character inside. When `window_length - max_freq > k`, shrink from left.

### Walkthrough
- Initialize frequency array of size 26, `left = 0`, `maxFreq = 0`, `maxLen = 0`.
- Expand `right` pointer across string:
-   Increment count of `s[right]`.
-   `maxFreq = max(maxFreq, count[s[right]])`.
-   If `(right - left + 1) - maxFreq > k`:
-     Decrement count of `s[left]` and increment `left`.
-   `maxLen = max(maxLen, right - left + 1)`.
- Return `maxLen`.

```typescript
function characterReplacement(s: string, k: number): number {
  const count = new Array(26).fill(0);
  let left = 0;
  let maxFreq = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const idx = s.charCodeAt(right) - 65;
    count[idx]++;
    maxFreq = Math.max(maxFreq, count[idx]);

    while ((right - left + 1) - maxFreq > k) {
      count[s.charCodeAt(left) - 65]--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
```

```python
def characterReplacement(s: str, k: int) -> int:
    count = {}
    left = 0
    max_freq = 0
    max_len = 0
    
    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        max_freq = max(max_freq, count[s[right]])
        
        while (right - left + 1) - max_freq > k:
            count[s[left]] -= 1
            left += 1
            
        max_len = max(max_len, right - left + 1)
        
    return max_len
```
