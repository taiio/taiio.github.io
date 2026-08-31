---
title: Longest Substring Without Repeating Characters
number: 13
source: NeetCode
category: Sliding Window
difficulty: Medium
tags: Hash Table, String, Sliding Window
url: https://neetcode.io/problems/longest-substring-without-duplicates
---

## Problem
Given a string `s`, find the length of the **longest substring** without repeating characters.

### Examples

**Example 1:**
```text
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**
```text
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**
```text
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Constraints
- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.

## Hints
- Use a sliding window [left, right] and a Hash Set / Hash Map to track characters in the current window.
- When a duplicate character is encountered at `right`, shrink window from `left` until the duplicate is removed.
- Can we jump `left` directly to the index after the duplicate using a map of character -> last seen index?

## Template
```typescript
function lengthOfLongestSubstring(s: string): number {
  // TODO
}
```

```python
def lengthOfLongestSubstring(s: str) -> int:
    # TODO
    pass
```

## Solution: Sliding Window with Hash Set
- time: O(n)
- space: O(min(m, n)) where m is charset size

### Explanation
Expand window by moving `right`. If `s[right]` is already in set, remove `s[left]` and increment `left` until valid.

### Walkthrough
- Initialize a set `seen`, `left = 0`, `maxLen = 0`.
- Loop `right` from 0 to `s.length - 1`.
- While `seen.has(s[right])`:
-   `seen.delete(s[left])`
-   `left++`
- `seen.add(s[right])`
- `maxLen = max(maxLen, right - left + 1)`
- Return `maxLen`.

```typescript
function lengthOfLongestSubstring(s: string): number {
  const seen = new Set<string>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
```

```python
def lengthOfLongestSubstring(s: str) -> int:
    seen = set()
    left = 0
    max_len = 0
    
    for right in range(len(s)):
        while s[right] in seen:
            seen.remove(s[left])
            left += 1
        seen.add(s[right])
        max_len = max(max_len, right - left + 1)
        
    return max_len
```

## Solution: Sliding Window with Index Map (Optimal)
- time: O(n)
- space: O(min(m, n))

### Explanation
Store the last seen index of each character. When a duplicate occurs, jump `left` directly past the duplicate.

### Walkthrough
- Initialize map `lastPos` mapping char -> last index seen.
- `left = 0`, `maxLen = 0`.
- For `right` from 0 to `s.length - 1`:
-   If `s[right]` is in map, `left = max(left, lastPos.get(s[right]) + 1)`.
-   `lastPos.set(s[right], right)`.
-   `maxLen = max(maxLen, right - left + 1)`.
- Return `maxLen`.

```typescript
function lengthOfLongestSubstring(s: string): number {
  const lastPos = new Map<string, number>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (lastPos.has(char)) {
      left = Math.max(left, lastPos.get(char)! + 1);
    }
    lastPos.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
```

```python
def lengthOfLongestSubstring(s: str) -> int:
    last_pos = {}
    left = 0
    max_len = 0
    
    for right, char in enumerate(s):
        if char in last_pos:
            left = max(left, last_pos[char] + 1)
        last_pos[char] = right
        max_len = max(max_len, right - left + 1)
        
    return max_len
```
