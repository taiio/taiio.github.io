---
title: Permutation in String
number: 567
source: LeetCode
category: Sliding Window
difficulty: Medium
tags: Hash Table, Two Pointers, String, Sliding Window
url: https://leetcode.com/problems/permutation-in-string/
---

## Problem
Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.

In other words, return `true` if one of `s1`'s permutations is a substring of `s2`.

**Example 1:**
```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
```
Explanation: `s2` contains one permutation of `s1` ("ba").

**Example 2:**
```
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
```

**Constraints:**
- `1 <= s1.length, s2.length <= 10^4`
- `s1` and `s2` consist of lowercase English letters.

## Hints
- A permutation of `s1` occurring in `s2` means there's some window in `s2`, of the same length as `s1`, whose character frequency count exactly matches the character frequency count of `s1`.
- This is a **fixed-size Sliding Window** problem: since we only care about windows of exactly `s1.length`, slide a window of that fixed size across `s2`, comparing character frequency counts.
- Instead of recomputing the frequency count from scratch for every window position (which would be too slow), update it incrementally: when the window slides forward by one, remove the character that just left the window and add the character that just entered.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function checkInclusion(s1: string, s2: string): boolean {
  // TODO
  return false;
}
```

## Solution: Brute Force (Sort and Compare Every Window)
- time: O(n * m log m), where n is the length of s2 and m is the length of s1
- space: O(m)

### Explanation
The most direct approach checks every substring of `s2` with length equal to `s1.length`, sorting both it and `s1` to compare whether they're anagrams of each other (a permutation of `s1` is exactly a string with the same multiset of characters).

### Walkthrough
- Sort `s1`'s characters to get `sortedS1`.
- For each starting index `i` in `s2` such that `i + s1.length <= s2.length`:
  - Extract the substring `s2[i .. i + s1.length - 1]`, sort its characters.
  - If it equals `sortedS1`, return `true`.
- If no window matches, return `false`.

```typescript
function checkInclusion(s1: string, s2: string): boolean {
  const m = s1.length;
  const n = s2.length;
  if (m > n) return false;

  const sortedS1 = s1.split("").sort().join("");

  for (let i = 0; i + m <= n; i++) {
    const window = s2.slice(i, i + m).split("").sort().join("");
    if (window === sortedS1) return true;
  }

  return false;
}
```

## Solution: Fixed-Size Sliding Window with Frequency Arrays
- time: O(n), where n is the length of s2 (each window comparison is O(26), a constant)
- space: O(1) (two fixed 26-element frequency arrays)

### Explanation
We build a frequency array for `s1` once, then maintain a frequency array for a sliding window of the same length in `s2`, updating it incrementally as the window moves one position at a time: adding the newly entered character and removing the character that just left. At every position, we compare the two frequency arrays — if they match, the current window is a permutation of `s1`. This avoids re-sorting or rebuilding the window's frequency count from scratch each time.

### Walkthrough
- If `s1.length > s2.length`, return `false` immediately.
- Build `s1Count`, a 26-element frequency array for `s1`.
- Build `windowCount`, a 26-element frequency array for the first `s1.length` characters of `s2`.
- Compare `s1Count` and `windowCount`; if equal, return `true`.
- For each subsequent window start `i` from `1` to `s2.length - s1.length`:
  - Increment the count for the character entering the window (`s2[i + s1.length - 1]`).
  - Decrement the count for the character leaving the window (`s2[i - 1]`).
  - Compare `s1Count` and `windowCount`; if equal, return `true`.
- If no window matches, return `false`.

```typescript
function checkInclusion(s1: string, s2: string): boolean {
  const m = s1.length;
  const n = s2.length;
  if (m > n) return false;

  const aCode = "a".charCodeAt(0);
  const s1Count = new Array(26).fill(0);
  const windowCount = new Array(26).fill(0);

  for (let i = 0; i < m; i++) {
    s1Count[s1.charCodeAt(i) - aCode]++;
    windowCount[s2.charCodeAt(i) - aCode]++;
  }

  const arraysMatch = (a: number[], b: number[]): boolean => {
    for (let i = 0; i < 26; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  if (arraysMatch(s1Count, windowCount)) return true;

  for (let i = m; i < n; i++) {
    windowCount[s2.charCodeAt(i) - aCode]++;
    windowCount[s2.charCodeAt(i - m) - aCode]--;

    if (arraysMatch(s1Count, windowCount)) return true;
  }

  return false;
}
```

## Solution: Sliding Window with a Running Match Counter
- time: O(n)
- space: O(1)

### Explanation
Comparing the full 26-element frequency arrays at every window position (as in the previous solution) adds a constant factor of 26 to every step. We can avoid this by tracking a single integer, `matches`, representing how many of the 26 letters currently have *equal* counts between `s1Count` and `windowCount`. Whenever an increment or decrement causes a letter's counts to become equal, we increase `matches`; whenever it causes them to become unequal, we decrease `matches`. The window is a valid permutation exactly when `matches === 26`, which is an O(1) check instead of an O(26) array comparison.

### Walkthrough
- If `s1.length > s2.length`, return `false` immediately.
- Build `s1Count` and `windowCount` frequency arrays for `s1` and the first window of `s2`, as before.
- Compute the initial `matches` by counting how many of the 26 indices already have `s1Count[i] === windowCount[i]`.
- If `matches === 26`, return `true`.
- For each subsequent window position, when adding a character `c` to the window:
  - If `windowCount[c] === s1Count[c]` before incrementing, decrement `matches` (they were equal, about to become unequal).
  - Increment `windowCount[c]`.
  - If `windowCount[c] === s1Count[c]` after incrementing, increment `matches` (they just became equal).
  - Do the same symmetric update when removing the character leaving the window.
  - If `matches === 26`, return `true`.
- If no window matches, return `false`.

```typescript
function checkInclusion(s1: string, s2: string): boolean {
  const m = s1.length;
  const n = s2.length;
  if (m > n) return false;

  const aCode = "a".charCodeAt(0);
  const s1Count = new Array(26).fill(0);
  const windowCount = new Array(26).fill(0);

  for (let i = 0; i < m; i++) {
    s1Count[s1.charCodeAt(i) - aCode]++;
    windowCount[s2.charCodeAt(i) - aCode]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === windowCount[i]) matches++;
  }

  const adjust = (index: number, delta: number): void => {
    if (windowCount[index] === s1Count[index]) matches--;
    windowCount[index] += delta;
    if (windowCount[index] === s1Count[index]) matches++;
  };

  if (matches === 26) return true;

  for (let i = m; i < n; i++) {
    adjust(s2.charCodeAt(i) - aCode, 1);
    adjust(s2.charCodeAt(i - m) - aCode, -1);

    if (matches === 26) return true;
  }

  return false;
}
```
