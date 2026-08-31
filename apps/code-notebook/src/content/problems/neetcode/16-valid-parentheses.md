---
title: Valid Parentheses
number: 16
source: NeetCode
category: Stack
difficulty: Easy
tags: String, Stack
url: https://neetcode.io/problems/validate-parentheses
---

## Problem
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

### Examples

**Example 1:**
```text
Input: s = "()"
Output: true
```

**Example 2:**
```text
Input: s = "()[]{}"
Output: true
```

**Example 3:**
```text
Input: s = "(]"
Output: false
```

### Constraints
- `1 <= s.length <= 10^4`
- `s` consists of parentheses only `'()[]{}'`.

## Hints
- Use a Last-In First-Out (LIFO) data structure: a Stack.
- Push opening brackets onto the stack. When encountering a closing bracket, pop from the stack and check for a match.
- At the end, the stack should be empty.

## Template
```typescript
function isValid(s: string): boolean {
  // TODO
}
```

```python
def isValid(s: str) -> bool:
    # TODO
    pass
```

## Solution: Stack (Optimal)
- time: O(n)
- space: O(n)

### Explanation
Push open brackets onto a stack. When a closing bracket appears, check if the stack top contains the matching open bracket.

### Walkthrough
- Create a stack and a map of closing bracket -> opening bracket.
- Iterate through each character `c` in `s`:
-   If `c` is a closing bracket:
-     Check if stack is non-empty and stack top matches `map[c]`.
-     If so, pop from stack. Otherwise, return false.
-   Else push `c` to stack.
- Return true if stack is empty, false otherwise.

```typescript
function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const c of s) {
    if (c in map) {
      if (stack.length > 0 && stack[stack.length - 1] === map[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}
```

```python
def isValid(s: str) -> bool:
    stack = []
    close_to_open = {')': '(', '}': '{', ']': '['}
    
    for c in s:
        if c in close_to_open:
            if stack and stack[-1] == close_to_open[c]:
                stack.pop()
            else:
                return False
        else:
            stack.append(c)
            
    return len(stack) == 0
```
