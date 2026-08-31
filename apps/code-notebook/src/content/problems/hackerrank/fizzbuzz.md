---
title: FizzBuzz
number: 1
source: HackerRank
category: Implementation
difficulty: Easy
tags: Implementation
url: https://www.hackerrank.com/challenges/fizzbuzz
---

## Problem
Given an integer `n`, return a string representation of numbers from 1 to `n` such that:
- For multiples of 3, print `"Fizz"`.
- For multiples of 5, print `"Buzz"`.
- For multiples of both 3 and 5, print `"FizzBuzz"`.
- For any other number, print the number itself.

## Solution: Straightforward
- time: O(n)
- space: O(1)

### Explanation
Check divisibility by 15 (both 3 and 5) first, then check divisibility by 3, then by 5.

### Walkthrough
- Loop `i` from 1 to `n`.
- Check if `i` is divisible by 15 first (both 3 and 5) -> print `"FizzBuzz"`. Checking this condition first prevents premature matching with 3 or 5 alone.
- Else if divisible by 3 -> print `"Fizz"`.
- Else if divisible by 5 -> print `"Buzz"`.
- Otherwise -> print the number `i`.

```typescript
function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}
```

```python
def fizzbuzz(n):
    for i in range(1, n + 1):
        if i % 15 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)
```
