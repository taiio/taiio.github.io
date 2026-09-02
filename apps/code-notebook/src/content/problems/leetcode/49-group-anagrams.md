---
title: Group Anagrams
number: 49
source: LeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, String, Sorting
url: https://leetcode.com/problems/group-anagrams/
---

## Problem
Given an array of strings `strs`, group the **anagrams** together. You can return the answer in any order.

An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once each.

**Example 1:**
```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**
```
Input: strs = [""]
Output: [[""]]
```

**Example 3:**
```
Input: strs = ["a"]
Output: [["a"]]
```

**Constraints:**
- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters only.

## Hints
- Two strings are anagrams of each other exactly when they share the same set of characters with the same frequencies.
- The core idea: come up with a "key" that's shared by all anagrams of each other, then use a Hash Map to group strings that share the same key.
- Two common ways to build the key: (1) sort the characters of the string and use the sorted string as the key, or (2) count the frequency of the 26 letters and use that count as the key (faster since it avoids sorting).

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function groupAnagrams(strs: string[]): string[][] {
  // TODO
  return [];
}
```

## Solution: Brute Force Pairwise Comparison
- time: O(n² * k log k), where n is the number of strings and k is the max string length
- space: O(n * k)

### Explanation
The most naive approach checks every string against every group formed so far, using a "is this string an anagram of the group's representative" test (comparing sorted versions of the strings). This avoids any clever key design but is quadratic in the number of strings, which is too slow for large inputs — it's mainly useful for building intuition before moving to a hashing-based key.

### Walkthrough
- Initialize an empty list of groups, where each group stores a representative sorted string and its members.
- For each string `s`, sort its characters to get `sortedS`.
- Scan existing groups for one whose representative equals `sortedS`; if found, add `s` to that group.
- If no matching group is found, start a new group with `s`.
- Return the members of every group.

```typescript
function groupAnagrams(strs: string[]): string[][] {
  const groups: { key: string; members: string[] }[] = [];

  for (const s of strs) {
    const key = s.split("").sort().join("");
    const existing = groups.find((g) => g.key === key);
    if (existing) {
      existing.members.push(s);
    } else {
      groups.push({ key, members: [s] });
    }
  }

  return groups.map((g) => g.members);
}
```

## Solution: Sorted String as Key
- time: O(n * k log k), where n is the number of strings and k is the length of the longest string
- space: O(n * k)

### Explanation
If two strings are anagrams of each other, sorting their characters produces two identical strings. So we can use the "sorted string" as a key to group anagrams together in a Hash Map, where the value is the list of original strings that share that key. This avoids the pairwise scanning of the brute force approach by using O(1) average Hash Map lookups instead.

### Walkthrough
- Initialize an empty Hash Map `groups`, mapping a key (sorted string) to a list of original strings.
- For each string `s` in `strs`:
  - Sort the characters of `s` to build the key `key`.
  - If `key` isn't in `groups` yet, initialize an empty list for it.
  - Push `s` onto the list for `key`.
- Return all the lists (values) in `groups`.

```typescript
function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const s of strs) {
    const key = s.split("").sort().join("");
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(s);
  }

  return Array.from(groups.values());
}
```

## Solution: Character Count as Key
- time: O(n * k), where n is the number of strings and k is the length of the longest string
- space: O(n * k)

### Explanation
Sorting a string to build the key costs O(k log k) per string. We can do better by counting the frequency of the 26 letters in each string (only O(k)), then using that count (converted into an immutable key such as a joined string) as the key. Two strings are anagrams exactly when their 26-letter frequency counts are identical.

### Walkthrough
- Initialize an empty Hash Map `groups`.
- For each string `s`:
  - Build a `count` array of 26 zeros.
  - Iterate through each character in `s`, incrementing the matching counter.
  - Convert `count` into a key (join the numbers with commas) usable as a Hash Map key.
  - Push `s` onto the list for that key.
- Return all the lists in `groups`.

```typescript
function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();
  const aCode = "a".charCodeAt(0);

  for (const s of strs) {
    const count = new Array(26).fill(0);
    for (const ch of s) {
      count[ch.charCodeAt(0) - aCode]++;
    }
    const key = count.join(",");

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(s);
  }

  return Array.from(groups.values());
}
```

## Solution: Prime Number Product as Key
- time: O(n * k), where n is the number of strings and k is the length of the longest string
- space: O(n * k)

### Explanation
A more mathematical trick: assign each of the 26 letters a distinct prime number. Multiply the primes corresponding to each character of a string together to get a single numeric key. Because of the fundamental theorem of arithmetic (every integer has a unique prime factorization), two strings produce the same product if and only if they contain exactly the same multiset of characters — meaning they're anagrams. This avoids building an array-based key entirely, though for very long strings the product can grow large and would need BigInt in a real implementation.

### Walkthrough
- Define an array `primes` of 26 distinct prime numbers, one per letter.
- For each string `s`, compute the product of `primes[charIndex]` for every character (using BigInt to avoid overflow).
- Use the resulting BigInt (converted to a string) as the Hash Map key.
- Group strings sharing the same key, and return all groups.

```typescript
function groupAnagrams(strs: string[]): string[][] {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
    71, 73, 79, 83, 89, 97, 101,
  ];
  const aCode = "a".charCodeAt(0);
  const groups = new Map<string, string[]>();

  for (const s of strs) {
    let product = 1n;
    for (const ch of s) {
      product *= BigInt(primes[ch.charCodeAt(0) - aCode]);
    }
    const key = product.toString();

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(s);
  }

  return Array.from(groups.values());
}
```
