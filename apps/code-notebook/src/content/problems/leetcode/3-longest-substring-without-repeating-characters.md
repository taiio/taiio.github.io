---
title: Longest Substring Without Repeating Characters
number: 3
source: LeetCode
category: Sliding Window
difficulty: Medium
tags: Hash Table, String, Sliding Window
url: https://leetcode.com/problems/longest-substring-without-repeating-characters/
---

## Problem
Given a string `s`, find the length of the longest substring without duplicate characters.

**Example 1:**
```
Input: s = "abcabcbb"
Output: 3
```
Explanation: the answer is "abc", with length 3.

**Example 2:**
```
Input: s = "bbbbb"
Output: 1
```
Explanation: the answer is "b", with length 1.

**Example 3:**
```
Input: s = "pwwkew"
Output: 3
```
Explanation: the answer is "wke", with length 3. Notice that "pwke" is a subsequence, not a substring.

**Constraints:**
- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols, and spaces.

## Hints
- The brute force approach checks every substring for duplicate characters, which is O(n³) or O(n²) with a smarter duplicate check.
- Since we're looking for a contiguous run of unique characters, this is a natural fit for the Sliding Window technique: maintain a window `[left, right]` that always contains only unique characters.
- Keep a Hash Set (or Hash Map of character → last seen index) of characters currently in the window. When you encounter a character already in the window, shrink the window from the left until the duplicate is removed, then continue expanding from the right.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function lengthOfLongestSubstring(s: string): number {
  // TODO
  return 0;
}
```

## Solution: Brute Force
- time: O(n³)
- space: O(min(n, m)), where m is the character set size (used for the duplicate check within each substring)

### Explanation
The most direct approach checks every possible substring `s[i..j]` and tests whether it contains any duplicate characters, keeping track of the longest one found without duplicates.

### Walkthrough
- For each starting index `i` from `0` to `n - 1`:
  - For each ending index `j` from `i` to `n - 1`:
    - Check whether `s[i..j]` has all unique characters (using a Set for this check).
    - If it does, update `longest = max(longest, j - i + 1)`.
- Return `longest`.

```typescript
function lengthOfLongestSubstring(s: string): number {
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    const seen = new Set<string>();
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      longest = Math.max(longest, j - i + 1);
    }
  }

  return longest;
}
```

## Solution: Sliding Window with Hash Set
- time: O(n)
- space: O(min(n, m)), where m is the character set size

### Explanation
We maintain a window `[left, right]` that always contains only unique characters, tracked using a Hash Set. As `right` expands one character at a time, if the new character is already in the set, we shrink the window from the left — removing characters from the set and advancing `left` — until the duplicate is gone. At every point, the window represents a valid substring with no duplicates, so we track its length as a candidate for the answer. Each character enters and leaves the window at most once, giving O(n) total work despite the nested-looking loop.

### Walkthrough
- Initialize an empty Set `window`, `left = 0`, and `longest = 0`.
- For each `right` from `0` to `n - 1`:
  - While `s[right]` is already in `window`, remove `s[left]` from `window` and increment `left`.
  - Add `s[right]` to `window`.
  - Update `longest = max(longest, right - left + 1)`.
- Return `longest`.

```typescript
function lengthOfLongestSubstring(s: string): number {
  const window = new Set<string>();
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    while (window.has(s[right])) {
      window.delete(s[left]);
      left++;
    }
    window.add(s[right]);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}
```

## Solution: Sliding Window with Hash Map (Jump Left Pointer)
- time: O(n)
- space: O(min(n, m)), where m is the character set size

### Explanation
Instead of shrinking the window one character at a time when a duplicate is found, we can store the **last seen index** of each character in a Hash Map. When we encounter a character already in the window, we can jump `left` directly to just past its previous occurrence, rather than incrementing it repeatedly. This avoids the inner `while` loop entirely, making each character processed in strict O(1) amortized time with a single pass and no repeated shrinking steps.

### Walkthrough
- Initialize an empty Hash Map `lastSeen` (character → most recent index), `left = 0`, and `longest = 0`.
- For each `right` from `0` to `n - 1`:
  - If `s[right]` is in `lastSeen` and `lastSeen[s[right]] >= left`, move `left` to `lastSeen[s[right]] + 1` (jump past the duplicate).
  - Update `lastSeen[s[right]] = right`.
  - Update `longest = max(longest, right - left + 1)`.
- Return `longest`.

```typescript
function lengthOfLongestSubstring(s: string): number {
  const lastSeen = new Map<string, number>();
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (lastSeen.has(ch) && lastSeen.get(ch)! >= left) {
      left = lastSeen.get(ch)! + 1;
    }
    lastSeen.set(ch, right);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}
```
