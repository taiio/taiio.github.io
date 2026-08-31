---
title: Valid Anagram
number: 2
source: NeetCode
category: Arrays & Hashing
difficulty: Easy
tags: Hash Table, String, Sorting
url: https://neetcode.io/problems/is-anagram
---

## Problem
Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.

An **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Examples

**Example 1:**
```text
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**
```text
Input: s = "rat", t = "car"
Output: false
```

### Constraints
- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters.

## Hints
- If lengths of s and t differ, they cannot be anagrams.
- Sorting both strings and comparing if they are identical takes O(n log n).
- A frequency count table (hash map or 26-element array) yields an O(n) linear solution.

## Template
```typescript
function isAnagram(s: string, t: string): boolean {
  // TODO
}
```

```python
def isAnagram(s: str, t: str) -> bool:
    # TODO
    pass
```

## Solution: Sorting
- time: O(n log n)
- space: O(n)

### Explanation
Two strings are anagrams if and only if their sorted versions are identical.

### Walkthrough
- Check if lengths of s and t are equal. If not, return false.
- Convert strings to character arrays, sort them, and join back.
- Compare the sorted strings for equality.

```typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') === t.split('').sort().join('');
}
```

```python
def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    return sorted(s) == sorted(t)
```

## Solution: Frequency Array (Optimal)
- time: O(n)
- space: O(1) (fixed 26 letters)

### Explanation
Count character occurrences of s and decrement with t using a fixed-size array.

### Walkthrough
- Check if s and t have different lengths. If so, return false.
- Initialize a count array of size 26 with zeros.
- Increment counts for characters in s and decrement for characters in t.
- Check if all counts are zero. If any count is non-zero, return false.

```typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);
  const base = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - base]++;
    count[t.charCodeAt(i) - base]--;
  }

  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) return false;
  }
  return true;
}
```

```python
def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    
    count = [0] * 26
    for i in range(len(s)):
        count[ord(s[i]) - ord('a')] += 1
        count[ord(t[i]) - ord('a')] -= 1
        
    return all(c == 0 for c in count)
```

## Solution: Hash Map
- time: O(n)
- space: O(k) where k is the number of distinct characters

### Explanation
Use a hash map to count character frequencies for arbitrary unicode characters.

### Walkthrough
- If lengths differ, return false.
- Build a map of character frequencies for string s.
- Iterate through string t, decrementing frequencies in the map.
- If a character from t is missing or frequency drops below zero, return false.

```typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count = new Map<string, number>();
  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!count.has(char) || count.get(char)! === 0) {
      return false;
    }
    count.set(char, count.get(char)! - 1);
  }
  return true;
}
```

```python
def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    
    count = {}
    for char in s:
        count[char] = count.get(char, 0) + 1
        
    for char in t:
        if char not in count or count[char] == 0:
            return False
        count[char] -= 1
        
    return True
```
