---
title: Evaluate Reverse Polish Notation
number: 150
source: LeetCode
category: Stack
difficulty: Medium
tags: Array, Math, Stack
url: https://leetcode.com/problems/evaluate-reverse-polish-notation/
---

## Problem
You are given an array of strings `tokens` that represents an arithmetic expression in **Reverse Polish Notation** (postfix notation).

Evaluate the expression. Return an integer that represents the value of the expression.

**Note:**
- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always truncates toward zero.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all intermediate calculations can be represented in a 32-bit integer.

**Example 1:**
```
Input: tokens = ["2","1","+","3","*"]
Output: 9
```
Explanation: `((2 + 1) * 3) = 9`.

**Example 2:**
```
Input: tokens = ["4","13","5","/","+"]
Output: 6
```
Explanation: `(4 + (13 / 5)) = 6`.

**Example 3:**
```
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
```

**Constraints:**
- `1 <= tokens.length <= 10^4`
- `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200, 200]`.

## Hints
- In Reverse Polish Notation, an operator always applies to the two operands that came immediately before it — this "most recent operands first" structure is a natural fit for a Stack.
- Scan the tokens left to right: push numbers onto the stack, and whenever you see an operator, pop the top two numbers off, apply the operator, and push the result back onto the stack.
- Be careful with operand order for non-commutative operators (`-` and `/`): the second-popped number is the left-hand operand and the first-popped number is the right-hand operand, since the more recently pushed value came second in the original expression.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function evalRPN(tokens: string[]): number {
  // TODO
  return 0;
}
```

## Solution: Stack
- time: O(n)
- space: O(n)

### Explanation
We process the tokens from left to right using a Stack. Whenever we encounter a number, we push it onto the stack. Whenever we encounter an operator, we pop the two most recently pushed numbers off the stack — these are exactly the two operands the operator should apply to, per the rules of postfix notation — compute the result, and push it back onto the stack. By the end, the stack contains exactly one number: the final result of the whole expression.

### Walkthrough
- Initialize an empty stack.
- For each token in `tokens`:
  - If the token is a number, push it (as a number) onto the stack.
  - Otherwise (it's an operator):
    - Pop the top of the stack as `b` (the right-hand operand).
    - Pop the top of the stack as `a` (the left-hand operand).
    - Apply the operator to `a` and `b` (using `Math.trunc` for division, to truncate toward zero as required).
    - Push the result back onto the stack.
- Return the single remaining value on the stack.

```typescript
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const operators = new Set(["+", "-", "*", "/"]);

  for (const token of tokens) {
    if (!operators.has(token)) {
      stack.push(Number(token));
      continue;
    }

    const b = stack.pop()!;
    const a = stack.pop()!;

    let result: number;
    switch (token) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = Math.trunc(a / b);
        break;
      default:
        throw new Error(`Unknown operator: ${token}`);
    }

    stack.push(result);
  }

  return stack[stack.length - 1];
}
```
