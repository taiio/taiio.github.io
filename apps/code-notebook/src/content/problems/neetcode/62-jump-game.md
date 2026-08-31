---
title: Jump Game
number: 62
source: NeetCode
category: Greedy
difficulty: Medium
tags: Array, Dynamic Programming, Greedy
url: https://neetcode.io/problems/jump-game
---

## Problem
You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

### Examples

**Example 1:**
```text
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**
```text
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

### Constraints
- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 10^5`

## Hints
- Work backwards from the goal (last index).
- If `i + nums[i] >= goal`, shift `goal = i`.
- If `goal == 0` at the end, return true.

## Template
```typescript
function canJump(nums: number[]): boolean {
  // TODO
}
```

```python
def canJump(nums: list[int]) -> bool:
    # TODO
    pass
```

## Solution: Greedy Goal Shift (Optimal)
- time: O(n)
- space: O(1)

### Explanation
Iterate backwards starting from the second to last element. If an index can reach the goal, update the goal to that index.

### Walkthrough
- Set `goal = nums.length - 1`.
- Loop `i` from `nums.length - 2` down to 0:
-   If `i + nums[i] >= goal`, update `goal = i`.
- Return `goal === 0`.

```typescript
function canJump(nums: number[]): boolean {
  let goal = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
}
```

```python
def canJump(nums: list[int]) -> bool:
    goal = len(nums) - 1
    
    for i in range(len(nums) - 2, -1, -1):
        if i + nums[i] >= goal:
            goal = i
            
    return goal == 0
```
