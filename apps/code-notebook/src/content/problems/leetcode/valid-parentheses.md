---
title: Valid Parentheses
number: 20
source: LeetCode
category: Stack
difficulty: Easy
tags: Stack, String
url: https://leetcode.com/problems/valid-parentheses/
---

## Problem
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## Solution: Stack
- time: O(n)
- space: O(n)

### Explanation
Traverse each character: if it is an opening bracket, push it onto the stack; if it is a closing bracket, pop from the stack and check if it matches the corresponding opening bracket. The string is valid if the stack is empty at the end.

### Walkthrough
- Create a lookup map mapping each closing bracket to its corresponding opening bracket (e.g. `')'` -> `'('`).
- When encountering an opening bracket (`'('`, `'['`, `'{'`), push it onto the stack.
- When encountering a closing bracket, check if the stack is empty or if the top element does not match the required opening bracket — if so, return `false` immediately.
- If it matches, pop the top element from the stack and continue.
- After processing all characters, the stack must be empty for the string to be valid.

```typescript
function isValid(s: string): boolean {
  const pairs: Record<string, string> = { ')': '(', ']': '[', '}': '{' };
  const stack: string[] = [];
  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}
```

```python
def is_valid(s):
    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []
    for ch in s:
        if ch in pairs.values():
            stack.append(ch)
        else:
            if not stack or stack.pop() != pairs[ch]:
                return False
    return not stack
```

```cpp
bool isValid(string s) {
    stack<char> st;
    unordered_map<char,char> pairs = {{')','('},{']','['},{'}','{'}};
    for (char c : s) {
        if (c=='('||c=='['||c=='{') st.push(c);
        else {
            if (st.empty() || st.top() != pairs[c]) return false;
            st.pop();
        }
    }
    return st.empty();
}
```
