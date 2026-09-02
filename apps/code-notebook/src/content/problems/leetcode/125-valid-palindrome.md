---
title: Valid Palindrome
number: 125
source: LeetCode
category: Two Pointers
difficulty: Easy
tags: Two Pointers, String
url: https://leetcode.com/problems/valid-palindrome/
---

## Problem
A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

**Example 1:**
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
```
Explanation: after cleaning, the string becomes "amanaplanacanalpanama", which is a palindrome.

**Example 2:**
```
Input: s = "race a car"
Output: false
```
Explanation: after cleaning, the string becomes "raceacar", which is not a palindrome.

**Example 3:**
```
Input: s = " "
Output: true
```
Explanation: after removing all non-alphanumeric characters, the string is empty, and an empty string is a palindrome.

**Constraints:**
- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters.

## Hints
- One approach is to build a cleaned string (lowercase, alphanumeric only) first, then check if it equals its own reverse.
- A more space-efficient approach avoids building a second string: use two pointers starting at both ends of the original string, skip over non-alphanumeric characters on either side, and compare the remaining characters (case-insensitively) as the pointers move toward each other.
- The two-pointer approach only needs O(1) extra space, since it never allocates a new cleaned string.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function isPalindrome(s: string): boolean {
  // TODO
  return false;
}
```

## Solution: Build-and-Compare (String Reversal)
- time: O(n)
- space: O(n)

### Explanation
The most direct approach follows the problem statement literally: build a cleaned version of the string containing only lowercase alphanumeric characters, then compare that cleaned string to its own reverse. If they match, the original string is a palindrome.

### Walkthrough
- Filter `s` to keep only alphanumeric characters, converting each to lowercase, producing `cleaned`.
- Reverse `cleaned` to get `reversed`.
- Return whether `cleaned === reversed`.

```typescript
function isPalindrome(s: string): boolean {
  const cleaned = s
    .toLowerCase()
    .split("")
    .filter((ch) => /[a-z0-9]/.test(ch))
    .join("");

  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
```

## Solution: Two Pointers
- time: O(n)
- space: O(1)

### Explanation
Instead of building an entirely new string, we can compare characters directly within the original string using two pointers — one starting at the beginning (`left`) and one at the end (`right`). At each step, we skip over any non-alphanumeric characters on either side. Once both pointers land on alphanumeric characters, we compare them case-insensitively; if they differ, the string isn't a palindrome. We continue moving the pointers toward each other until they meet or cross.

### Walkthrough
- Initialize `left = 0` and `right = s.length - 1`.
- While `left < right`:
  - Advance `left` while `s[left]` is not alphanumeric.
  - Retreat `right` while `s[right]` is not alphanumeric.
  - If `left >= right`, stop (all remaining characters have been checked).
  - Compare `s[left].toLowerCase()` and `s[right].toLowerCase()`; if they differ, return `false`.
  - Move `left` forward and `right` backward.
- If the pointers cross without a mismatch, return `true`.

```typescript
function isPalindrome(s: string): boolean {
  const isAlphanumeric = (ch: string): boolean => /[a-z0-9]/i.test(ch);

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
```
