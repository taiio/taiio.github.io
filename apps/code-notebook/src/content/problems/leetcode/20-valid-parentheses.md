---
title: Valid Parentheses
number: 20
source: LeetCode
category: Stack
difficulty: Easy
tags: String, Stack
url: https://leetcode.com/problems/valid-parentheses/
---

## Problem
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**
```
Input: s = "()"
Output: true
```

**Example 2:**
```
Input: s = "()[]{}"
Output: true
```

**Example 3:**
```
Input: s = "(]"
Output: false
```

**Constraints:**
- `1 <= s.length <= 10^4`
- `s` consists of parentheses only `'()[]{}'`.

## Hints
- Every time you see a closing bracket, it must match the *most recently opened* unmatched bracket — this "most recent first" behavior is exactly what a Stack provides.
- Push opening brackets onto a stack. When you see a closing bracket, check whether it matches the bracket at the top of the stack; if it does, pop the stack, otherwise the string is invalid.
- At the end, the string is only valid if the stack is completely empty — a nonempty stack means there are unmatched opening brackets left over.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function isValid(s: string): boolean {
  // TODO
  return false;
}
```

## Solution: Stack
- time: O(n)
- space: O(n)

### Explanation
We use a Stack to keep track of opening brackets that haven't been closed yet. For each character in the string: if it's an opening bracket, push it onto the stack. If it's a closing bracket, it must match whatever is currently on top of the stack (the most recently opened, still-unmatched bracket) — if it doesn't match, or the stack is empty, the string is invalid. At the end, the stack must be empty for the string to be considered fully valid; if any opening brackets remain unmatched, it's invalid.

### Walkthrough
- Create a Hash Map `pairs` mapping each closing bracket to its matching opening bracket, e.g. `')' → '('`.
- Initialize an empty stack.
- For each character `ch` in `s`:
  - If `ch` is an opening bracket (`(`, `{`, `[`), push it onto the stack.
  - Otherwise (`ch` is a closing bracket):
    - If the stack is empty, or the top of the stack doesn't equal `pairs[ch]`, return `false`.
    - Otherwise, pop the stack.
- After processing the whole string, return `true` if the stack is empty, `false` otherwise.

```typescript
function isValid(s: string): boolean {
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack: string[] = [];

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== pairs[ch]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
```
