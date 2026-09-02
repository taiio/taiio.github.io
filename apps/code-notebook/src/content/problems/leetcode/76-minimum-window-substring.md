---
title: Minimum Window Substring
number: 76
source: LeetCode
category: Sliding Window
difficulty: Hard
tags: Hash Table, String, Sliding Window
url: https://leetcode.com/problems/minimum-window-substring/
---

## Problem
Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.

**Example 1:**
```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
```
Explanation: the minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

**Example 2:**
```
Input: s = "a", t = "a"
Output: "a"
```
Explanation: the entire string s is the minimum window.

**Example 3:**
```
Input: s = "a", t = "aa"
Output: ""
```
Explanation: both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return the empty string.

**Constraints:**
- `m == s.length`
- `n == t.length`
- `1 <= m, n <= 10^5`
- `s` and `t` consist of uppercase and lowercase English letters.

## Hints
- The brute force approach checks every possible substring of `s` for whether it contains all characters of `t`, which is very slow (O(m² * n) or worse).
- This is a **variable-size Sliding Window** problem: grow the window from the right until it satisfies the requirement (contains all of `t`'s characters with the right frequencies), then shrink it from the left as much as possible while still satisfying the requirement, recording the smallest valid window found along the way.
- Track a frequency count of `t`'s characters, and a running counter of how many *distinct* required characters currently have their frequency requirement fully met within the window. When this counter equals the number of distinct characters in `t`, the window is valid.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function minWindow(s: string, t: string): string {
  // TODO
  return "";
}
```

## Solution: Brute Force
- time: O(m² * n), where m is the length of s and n is the length of t
- space: O(n)

### Explanation
The most direct approach checks every possible substring of `s`, testing whether it contains all the characters of `t` (with the correct multiplicities) by building a frequency count for the substring and comparing it against the required frequency count of `t`. Among all substrings that qualify, we keep the shortest one.

### Walkthrough
- Build a frequency map `need` for `t`.
- For each starting index `i` in `s`:
  - For each ending index `j >= i` in `s`:
    - Build a frequency map for `s[i..j]` and check whether it satisfies `need` (contains at least as many of each required character).
    - If it does, compare its length to the best window found so far, update if shorter, then break out of the inner loop (extending further can't make this particular `i` any better).
- Return the shortest valid window found, or `""` if none exists.

```typescript
function minWindow(s: string, t: string): string {
  if (t.length === 0 || s.length < t.length) return "";

  const need = new Map<string, number>();
  for (const ch of t) {
    need.set(ch, (need.get(ch) ?? 0) + 1);
  }

  const satisfies = (count: Map<string, number>): boolean => {
    for (const [ch, requiredCount] of need.entries()) {
      if ((count.get(ch) ?? 0) < requiredCount) return false;
    }
    return true;
  };

  let bestStart = -1;
  let bestLength = Infinity;

  for (let i = 0; i < s.length; i++) {
    const windowCount = new Map<string, number>();
    for (let j = i; j < s.length; j++) {
      windowCount.set(s[j], (windowCount.get(s[j]) ?? 0) + 1);
      if (satisfies(windowCount)) {
        if (j - i + 1 < bestLength) {
          bestLength = j - i + 1;
          bestStart = i;
        }
        break;
      }
    }
  }

  return bestStart === -1 ? "" : s.slice(bestStart, bestStart + bestLength);
}
```

## Solution: Sliding Window with Frequency Map and Match Counter
- time: O(m + n), where m is the length of s and n is the length of t
- space: O(n)

### Explanation
We maintain a Sliding Window `[left, right]` over `s`, along with a frequency count of characters currently inside the window and a running counter `have` tracking how many distinct required characters currently meet or exceed their needed frequency. We expand `right` one character at a time; whenever a character's window count reaches exactly its required count, we increment `have`. Once `have` equals the total number of distinct characters in `t` (`need.size`), the window is valid, so we try to shrink it from the left as much as possible while it remains valid, recording the smallest valid window seen. Shrinking decrements the window count of the character leaving and, if that drops it below the required count, decrements `have` too, signaling the window is no longer valid.

### Walkthrough
- If `t` is empty or longer than `s`, return `""`.
- Build a frequency map `need` for `t`, and note `required = need.size` (number of distinct characters needed).
- Initialize an empty frequency map `windowCount`, `have = 0`, `left = 0`, and variables to track the best window found (`bestLength = Infinity`, `bestStart = -1`).
- For each `right` from `0` to `s.length - 1`:
  - Add `s[right]` to `windowCount`.
  - If `s[right]` is in `need` and `windowCount[s[right]] === need[s[right]]`, increment `have`.
  - While `have === required` (the window is currently valid):
    - If `right - left + 1` is smaller than `bestLength`, update `bestLength` and `bestStart`.
    - Remove `s[left]` from `windowCount`; if `s[left]` is in `need` and this removal drops `windowCount[s[left]]` below `need[s[left]]`, decrement `have`.
    - Increment `left`.
- Return the substring starting at `bestStart` with length `bestLength`, or `""` if `bestStart` is still `-1`.

```typescript
function minWindow(s: string, t: string): string {
  if (t.length === 0 || s.length < t.length) return "";

  const need = new Map<string, number>();
  for (const ch of t) {
    need.set(ch, (need.get(ch) ?? 0) + 1);
  }
  const required = need.size;

  const windowCount = new Map<string, number>();
  let have = 0;
  let left = 0;
  let bestLength = Infinity;
  let bestStart = -1;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    windowCount.set(ch, (windowCount.get(ch) ?? 0) + 1);

    if (need.has(ch) && windowCount.get(ch) === need.get(ch)) {
      have++;
    }

    while (have === required) {
      if (right - left + 1 < bestLength) {
        bestLength = right - left + 1;
        bestStart = left;
      }

      const leftCh = s[left];
      windowCount.set(leftCh, windowCount.get(leftCh)! - 1);
      if (need.has(leftCh) && windowCount.get(leftCh)! < need.get(leftCh)!) {
        have--;
      }
      left++;
    }
  }

  return bestStart === -1 ? "" : s.slice(bestStart, bestStart + bestLength);
}
```

## Solution: Sliding Window with Fixed-Size Frequency Arrays
- time: O(m + n)
- space: O(1) (two fixed 128-element arrays covering the ASCII range, since s and t may contain both uppercase and lowercase letters)

### Explanation
Since the problem states `s` and `t` only contain English letters (upper and lowercase), we can replace the Hash Maps with fixed-size arrays indexed by ASCII character code, avoiding Hash Map overhead entirely. The sliding window logic is otherwise identical to the previous solution: expand `right`, track how many distinct required characters are satisfied via a `have` counter, and shrink from `left` whenever the window is valid, recording the smallest valid window.

### Walkthrough
- If `t` is empty or longer than `s`, return `""`.
- Build a fixed-size array `need` (indexed by character code) counting each character in `t`, and count `required` as the number of distinct characters with a nonzero requirement.
- Initialize a fixed-size array `windowCount` (same size), `have = 0`, `left = 0`, and best-window tracking variables.
- For each `right` from `0` to `s.length - 1`:
  - Increment `windowCount` at the index for `s[right]`.
  - If `need` at that index is nonzero and `windowCount` now exactly equals `need` there, increment `have`.
  - While `have === required`: update the best window if shorter, then decrement `windowCount` at the index for `s[left]` (decrementing `have` first if this removal breaks the match), and increment `left`.
- Return the best window substring found, or `""` if none was found.

```typescript
function minWindow(s: string, t: string): string {
  if (t.length === 0 || s.length < t.length) return "";

  const need = new Array(128).fill(0);
  for (const ch of t) {
    need[ch.charCodeAt(0)]++;
  }

  let required = 0;
  for (const count of need) {
    if (count > 0) required++;
  }

  const windowCount = new Array(128).fill(0);
  let have = 0;
  let left = 0;
  let bestLength = Infinity;
  let bestStart = -1;

  for (let right = 0; right < s.length; right++) {
    const rightCode = s.charCodeAt(right);
    windowCount[rightCode]++;

    if (need[rightCode] > 0 && windowCount[rightCode] === need[rightCode]) {
      have++;
    }

    while (have === required) {
      if (right - left + 1 < bestLength) {
        bestLength = right - left + 1;
        bestStart = left;
      }

      const leftCode = s.charCodeAt(left);
      windowCount[leftCode]--;
      if (need[leftCode] > 0 && windowCount[leftCode] < need[leftCode]) {
        have--;
      }
      left++;
    }
  }

  return bestStart === -1 ? "" : s.slice(bestStart, bestStart + bestLength);
}
```
