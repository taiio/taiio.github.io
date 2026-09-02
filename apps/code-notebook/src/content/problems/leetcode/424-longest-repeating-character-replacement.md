---
title: Longest Repeating Character Replacement
number: 424
source: LeetCode
category: Sliding Window
difficulty: Medium
tags: Hash Table, String, Sliding Window
url: https://leetcode.com/problems/longest-repeating-character-replacement/
---

## Problem
You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character, and you can perform this operation at most `k` times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

**Example 1:**
```
Input: s = "ABAB", k = 2
Output: 4
```
Explanation: replace the two 'A's with two 'B's or vice versa.

**Example 2:**
```
Input: s = "AABABBA", k = 1
Output: 4
```
Explanation: replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4.

**Constraints:**
- `1 <= s.length <= 10^5`
- `s` consists of only uppercase English letters.
- `0 <= k <= s.length`

## Hints
- For a window to be "achievable" with at most k replacements, the number of characters in the window that are *not* the most frequent character must be at most k. In other words: `windowLength - maxFrequencyInWindow <= k`.
- This is a Sliding Window problem: expand the window from the right, tracking character frequencies within it. Whenever the window becomes invalid (too many characters would need replacing), shrink it from the left.
- A useful trick: once you've found a window of a certain valid size, you don't need to shrink it below that size again — you only need to check if a *larger* valid window exists, so the window can simply slide (both pointers move together) rather than shrink, which simplifies the loop and keeps the algorithm at O(n) or O(26n).

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function characterReplacement(s: string, k: number): number {
  // TODO
  return 0;
}
```

## Solution: Sliding Window (Shrinking)
- time: O(n) amortized (O(26n) accounting for the frequency scan, since the alphabet is fixed size)
- space: O(1) (fixed 26-character frequency table)

### Explanation
We maintain a window `[left, right]` and a frequency count of characters within it. A window is valid if, after replacing the least-frequent characters in it (up to k replacements), all characters could become the same — which happens exactly when `windowLength - maxFrequencyInWindow <= k`. As we expand `right`, if the window becomes invalid, we shrink it from the left (decrementing the frequency of `s[left]` and incrementing `left`) until it's valid again. We track the maximum valid window length seen throughout.

### Walkthrough
- Initialize a frequency array `count` of size 26 (or a Hash Map), `left = 0`, `maxFreq = 0`, and `longest = 0`.
- For each `right` from `0` to `n - 1`:
  - Increment `count[s[right]]` and update `maxFreq = max(maxFreq, count[s[right]])`.
  - While `(right - left + 1) - maxFreq > k`: decrement `count[s[left]]` and increment `left` (shrink the window; note `maxFreq` is allowed to become stale here — see explanation below).
  - Update `longest = max(longest, right - left + 1)`.
- Return `longest`.

```typescript
function characterReplacement(s: string, k: number): number {
  const count = new Array(26).fill(0);
  const aCode = "A".charCodeAt(0);
  let left = 0;
  let maxFreq = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    const rightIndex = s.charCodeAt(right) - aCode;
    count[rightIndex]++;
    maxFreq = Math.max(maxFreq, count[rightIndex]);

    while (right - left + 1 - maxFreq > k) {
      const leftIndex = s.charCodeAt(left) - aCode;
      count[leftIndex]--;
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}
```

## Solution: Sliding Window (Non-Shrinking, Slide Only)
- time: O(n)
- space: O(1) (fixed 26-character frequency table)

### Explanation
A subtle but important optimization: we don't actually need the window to ever shrink smaller than the best length found so far. If the window ever becomes invalid, we can just slide both `left` and `right` forward together (keeping the window size the same) instead of shrinking it — because we're only interested in whether a **larger** valid window exists, not in tracking the exact valid boundaries at every step. This means `maxFreq` never needs to decrease even as characters leave the window on the left (it may become temporarily "stale," i.e. larger than the current window's true max frequency, but that's fine — it can only cause us to keep a window the same size for one extra step, never to report an incorrect answer, since the final answer is always `right - left + 1` at the end).

### Walkthrough
- Initialize a frequency array `count` of size 26, `left = 0`, and `maxFreq = 0`.
- For each `right` from `0` to `n - 1`:
  - Increment `count[s[right]]` and update `maxFreq = max(maxFreq, count[s[right]])`.
  - If `(right - left + 1) - maxFreq > k`, decrement `count[s[left]]` and increment `left` (slide the window forward by exactly one on the left, no loop needed).
- Return `s.length - left` (the final window size, which equals the longest valid window found).

```typescript
function characterReplacement(s: string, k: number): number {
  const count = new Array(26).fill(0);
  const aCode = "A".charCodeAt(0);
  let left = 0;
  let maxFreq = 0;

  for (let right = 0; right < s.length; right++) {
    const rightIndex = s.charCodeAt(right) - aCode;
    count[rightIndex]++;
    maxFreq = Math.max(maxFreq, count[rightIndex]);

    if (right - left + 1 - maxFreq > k) {
      const leftIndex = s.charCodeAt(left) - aCode;
      count[leftIndex]--;
      left++;
    }
  }

  return s.length - left;
}
```
