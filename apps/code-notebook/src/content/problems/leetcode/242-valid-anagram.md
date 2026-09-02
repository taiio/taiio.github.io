---
title: Valid Anagram
number: 242
source: LeetCode
category: Arrays & Hashing
difficulty: Easy
tags: Hash Table, String, Sorting
url: https://leetcode.com/problems/valid-anagram/
---

## Problem
Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.

A string is an anagram of another string if it can be formed by rearranging all of the letters of the original string, using each letter exactly as many times as it appears.

**Example 1:**
```
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**
```
Input: s = "rat", t = "car"
Output: false
```

**Constraints:**
- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters only.

## Hints
- If the two strings have different lengths, they can never be anagrams of each other — check this first to short-circuit the invalid case.
- A straightforward approach is to sort both strings and compare whether the sorted results are identical.
- A more efficient approach is to count the frequency of each character in both strings using a fixed-size array (since there are only 26 letters) or a Hash Map, then compare the two frequency tables.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function isAnagram(s: string, t: string): boolean {
  // TODO
  return false;
}
```

## Solution: Sorting
- time: O(n log n)
- space: O(n)

### Explanation
If two strings are anagrams of each other, sorting the characters of each string alphabetically must produce two identical strings. This is the simplest way to reason about the problem, even though it isn't the fastest.

### Walkthrough
- If the lengths of `s` and `t` differ, return `false` immediately.
- Sort the characters of `s` and of `t`.
- Compare the two sorted strings; return `true` if they're equal, `false` otherwise.

```typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");
  return sortedS === sortedT;
}
```

## Solution: Character Frequency Count (Fixed Array)
- time: O(n)
- space: O(1) (fixed-size 26-element table, independent of input size)

### Explanation
Instead of sorting, we can count how many times each character appears in `s`, then subtract the count of each character in `t`. If the strings are anagrams, every final count must be zero. Since the alphabet only has 26 lowercase letters, we can use a fixed array of size 26 instead of a Hash Map, making counting and comparing faster.

### Walkthrough
- If the lengths differ, return `false` immediately.
- Initialize a `count` array of 26 zeros, one per letter.
- Iterate through `s`, incrementing the corresponding counter for each character.
- Iterate through `t`, decrementing the corresponding counter for each character.
- After both passes, check whether every entry in `count` is zero. If any entry is nonzero, return `false`; otherwise return `true`.

```typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - aCode]++;
    count[t.charCodeAt(i) - aCode]--;
  }

  return count.every((c) => c === 0);
}
```

## Solution: Hash Map Frequency Count (General Alphabet)
- time: O(n)
- space: O(k), where k is the number of distinct characters

### Explanation
The fixed-array approach only works because the alphabet is limited to 26 lowercase letters. A more general version — one that would still work for Unicode characters, digits, or symbols — uses a Hash Map instead of a fixed array. The logic is otherwise identical: increment counts for `s`, decrement for `t`, and check that everything cancels out to zero.

### Walkthrough
- If the lengths differ, return `false` immediately.
- Create an empty Hash Map `count`.
- For each character in `s`, increment its count in the map (defaulting to 0 if unseen).
- For each character in `t`, decrement its count in the map.
- Check every value in the map; if any is nonzero, return `false`. Otherwise return `true`.

```typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count = new Map<string, number>();

  for (const ch of s) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
  }
  for (const ch of t) {
    count.set(ch, (count.get(ch) ?? 0) - 1);
  }

  for (const value of count.values()) {
    if (value !== 0) return false;
  }
  return true;
}
```
