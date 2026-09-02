---
title: Min Stack
number: 155
source: LeetCode
category: Stack
difficulty: Medium
tags: Stack, Design
url: https://leetcode.com/problems/min-stack/
---

## Problem
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:
- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

**Example 1:**
```
Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output:
[null,null,null,null,-3,null,0,-2]
```
Explanation:
```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

**Constraints:**
- `-2^31 <= val <= 2^31 - 1`
- Methods `pop`, `top`, and `getMin` will always be called on a non-empty stack.
- At most `3 * 10^4` calls will be made to `push`, `pop`, `top`, and `getMin`.

## Hints
- Recomputing the minimum by scanning the whole stack on every `getMin()` call would be O(n) per call, which doesn't meet the O(1) requirement.
- Maintain a second, parallel stack that tracks the *minimum value so far* at each corresponding position in the main stack — this way, the top of the min-stack is always the current overall minimum.
- When pushing a new value, push `min(newValue, currentMin)` onto the min-stack; when popping, pop from both stacks together, keeping them in sync at all times.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

class MinStack {
  constructor() {
    // TODO
  }

  push(val: number): void {
    // TODO
  }

  pop(): void {
    // TODO
  }

  top(): number {
    // TODO
    return 0;
  }

  getMin(): number {
    // TODO
    return 0;
  }
}
```

## Solution: Two Stacks (Parallel Min-Tracking Stack)
- time: O(1) for every operation (push, pop, top, getMin)
- space: O(n)

### Explanation
We maintain two stacks in parallel: the regular `stack` holding all pushed values, and a `minStack` where `minStack[i]` always holds the minimum value among `stack[0..i]`. Whenever we push a new value `val`, we also push `min(val, currentMin)` onto `minStack` (where `currentMin` is the previous top of `minStack`, or `val` itself if `minStack` was empty). This way, the top of `minStack` is always the minimum of everything currently in `stack`. When we pop, we pop from both stacks together, which keeps them perfectly synchronized and ensures `minStack`'s top always reflects the correct minimum after the pop, all in O(1) per operation.

### Walkthrough
- Maintain two arrays acting as stacks: `stack` and `minStack`.
- `push(val)`: push `val` onto `stack`. Compute `newMin = minStack.length === 0 ? val : min(val, minStack.top())`, and push `newMin` onto `minStack`.
- `pop()`: pop from both `stack` and `minStack`.
- `top()`: return the last element of `stack`.
- `getMin()`: return the last element of `minStack`.

```typescript
class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    const currentMin =
      this.minStack.length === 0
        ? val
        : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(currentMin);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
```

## Solution: Single Stack Storing (value, minSoFar) Pairs
- time: O(1) for every operation
- space: O(n)

### Explanation
Instead of two separate arrays, we can use a single stack where each entry stores a pair: the pushed value and the minimum value at the time it was pushed. This achieves the same effect as the two-stack approach — every element "remembers" what the minimum was up through that point — but keeps everything in one data structure, which some find simpler to reason about and keep in sync.

### Walkthrough
- Maintain a single stack of `[value, minSoFar]` pairs.
- `push(val)`: compute `newMin = stack.length === 0 ? val : min(val, stack.top()[1])`, then push `[val, newMin]`.
- `pop()`: pop the top pair off the stack.
- `top()`: return `stack.top()[0]`.
- `getMin()`: return `stack.top()[1]`.

```typescript
class MinStack {
  private stack: [number, number][] = [];

  push(val: number): void {
    const currentMin =
      this.stack.length === 0
        ? val
        : Math.min(val, this.stack[this.stack.length - 1][1]);
    this.stack.push([val, currentMin]);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1][0];
  }

  getMin(): number {
    return this.stack[this.stack.length - 1][1];
  }
}
```
