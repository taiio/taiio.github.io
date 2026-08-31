---
title: Group Anagrams
number: 4
source: NeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, String, Sorting
url: https://neetcode.io/problems/anagram-groups
---

## Problem
Given an array of strings `strs`, group the **anagrams** together. You can return the answer in **any order**.

### Examples

**Example 1:**
```text
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
```

**Example 2:**
```text
Input: strs = [""]
Output: [[""]]
```

**Example 3:**
```text
Input: strs = ["a"]
Output: [["a"]]
```

### Constraints
- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

## Hints
- Anagrams have identical sorted character sequences.
- Can we use the sorted string as a hash map key?
- Alternatively, can we use a 26-character frequency count tuple as the hash map key?

## Template
```typescript
function groupAnagrams(strs: string[]): string[][] {
  // TODO
}
```

```python
def groupAnagrams(strs: list[str]) -> list[list[str]]:
    # TODO
    pass
```

## Solution: Categorize by Sorted String
- time: O(n * k log k) where n is strs.length and k is max length of a string
- space: O(n * k)

### Explanation
Sort the characters of each string to form a canonical key. Group all strings sharing the same sorted key in a hash map.

### Walkthrough
- Initialize a hash map `groups` mapping sorted string -> array of strings.
- For each string `s` in `strs`:
-   Sort `s` alphabetically to get `key` (e.g. 'eat' -> 'aet').
-   Append `s` to `groups[key]`.
- Return the values of `groups` as a 2D array.

```typescript
function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(s);
  }

  return Array.from(groups.values());
}
```

```python
from collections import defaultdict

def groupAnagrams(strs: list[str]) -> list[list[str]]:
    groups = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))
        groups[key].append(s)
    return list(groups.values())
```

## Solution: Categorize by Character Count (Optimal)
- time: O(n * k)
- space: O(n * k)

### Explanation
Count character frequencies (26 letters) for each string and format the count tuple as the map key, avoiding the sort.

### Walkthrough
- Create a map mapping count key string -> list of words.
- For each word, build a 26-element array counting occurrences of each character 'a'-'z'.
- Serialize the count array (e.g. comma-separated or tuple) as the map key.
- Append the word to the map list for that key.
- Return all lists from the map.

```typescript
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const s of strs) {
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 97]++;
    }
    const key = count.join('#');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(s);
  }

  return Array.from(map.values());
}
```

```python
from collections import defaultdict

def groupAnagrams(strs: list[str]) -> list[list[str]]:
    groups = defaultdict(list)
    for s in strs:
        count = [0] * 26
        for char in s:
            count[ord(char) - ord('a')] += 1
        groups[tuple(count)].append(s)
    return list(groups.values())
```
