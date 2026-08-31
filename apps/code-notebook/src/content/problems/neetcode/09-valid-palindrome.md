---
title: Valid Palindrome
number: 9
source: NeetCode
category: Two Pointers
difficulty: Easy
tags: Two Pointers, String
url: https://neetcode.io/problems/is-palindrome
---

## Problem
A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a **palindrome**, or `false` otherwise.

### Examples

**Example 1:**
```text
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**
```text
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Example 3:**
```text
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
```

### Constraints
- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters.

## Hints
- Use two pointers: one starting from left (0) and one from right (length - 1).
- Skip characters that are not alphanumeric.
- Compare lowercase characters at both pointers.

## Template
```typescript
function isPalindrome(s: string): boolean {
  // TODO
}
```

```python
def isPalindrome(s: str) -> bool:
    # TODO
    pass
```

## Solution: Two Pointers (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Use two pointers moving inwards towards each other, skipping non-alphanumeric characters in-place without creating extra strings.

### Walkthrough
- Set `left = 0` and `right = s.length - 1`.
- While `left < right`:
-   If `s[left]` is not alphanumeric, increment `left`.
-   Else if `s[right]` is not alphanumeric, decrement `right`.
-   Else if `s[left].toLowerCase() !== s[right].toLowerCase()`, return false.
-   Else increment `left` and decrement `right`.
- Return true if pointers meet.

```typescript
function isPalindrome(s: string): boolean {
  const isAlphaNumeric = (char: string) => /[a-zA-Z0-9]/.test(char);

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphaNumeric(s[right])) {
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

```python
def isPalindrome(s: str) -> bool:
    left, right = 0, len(s) - 1
    
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
        
    return True
```

## Solution: Filter and Reverse
- time: O(n)
- space: O(n)

### Explanation
Filter out non-alphanumeric characters, convert to lowercase, and check if the string equals its reverse.

### Walkthrough
- Build a filtered string containing only lowercase alphanumeric characters.
- Compare the filtered string with its reverse.

```typescript
function isPalindrome(s: string): boolean {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
```

```python
def isPalindrome(s: str) -> bool:
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]
```
