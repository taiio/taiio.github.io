---
title: Combination Sum
number: 37
source: NeetCode
category: Backtracking
difficulty: Medium
tags: Array, Backtracking
url: https://neetcode.io/problems/combination-target-sum
---

## Problem
Given an array of **distinct** integers `candidates` and a target integer `target`, return a list of all **unique combinations** of `candidates` where the chosen numbers sum to `target`. You may return the combinations in **any order**.

The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

### Examples

**Example 1:**
```text
Input: candidates = [2, 3, 6, 7], target = 7
Output: [[2, 2, 3], [7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

**Example 2:**
```text
Input: candidates = [2, 3, 5], target = 8
Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
```

### Constraints
- `1 <= candidates.length <= 30`
- `2 <= candidates[i] <= 40`
- All elements of `candidates` are **distinct**.
- `1 <= target <= 40`

## Hints
- Use backtracking / decision tree with two choices at each step: include candidate[i] (and stay at index i), or skip candidate[i] (move to index i + 1).
- Stop when total == target (save combination) or total > target (backtrack).

## Template
```typescript
function combinationSum(candidates: number[], target: number): number[][] {
  // TODO
}
```

```python
def combinationSum(candidates: list[int], target: int) -> list[list[int]]:
    # TODO
    pass
```

## Solution: Backtracking (Optimal)
- time: O(2^(target / min_candidate))
- space: O(target / min_candidate)

### Explanation
Explore choices using depth-first backtracking. At each index, either include `candidates[i]` repeatedly or skip to `i + 1`.

### Walkthrough
- Define `backtrack(index, currentCombo, currentSum)`.
- If `currentSum === target`, push copy of `currentCombo` to `results`.
- If `currentSum > target` or `index >= candidates.length`, return.
- Include `candidates[index]`: push to combo, call `backtrack(index, combo, currentSum + candidates[index])`, pop from combo.
- Exclude `candidates[index]`: call `backtrack(index + 1, combo, currentSum)`.

```typescript
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function backtrack(i: number, combo: number[], total: number) {
    if (total === target) {
      result.push([...combo]);
      return;
    }
    if (total > target || i >= candidates.length) {
      return;
    }

    // Choice 1: Include candidates[i]
    combo.push(candidates[i]);
    backtrack(i, combo, total + candidates[i]);
    combo.pop();

    // Choice 2: Skip candidates[i]
    backtrack(i + 1, combo, total);
  }

  backtrack(0, [], 0);
  return result;
}
```

```python
def combinationSum(candidates: list[int], target: int) -> list[list[int]]:
    result = []
    
    def backtrack(i, combo, total):
        if total == target:
            result.append(combo[:])
            return
        if total > target or i >= len(candidates):
            return
            
        # Choice 1: Include candidates[i]
        combo.append(candidates[i])
        backtrack(i, combo, total + candidates[i])
        combo.pop()
        
        # Choice 2: Skip candidates[i]
        backtrack(i + 1, combo, total)
        
    backtrack(0, [], 0)
    return result
```
