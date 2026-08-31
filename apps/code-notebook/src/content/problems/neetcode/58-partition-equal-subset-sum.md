---
title: Partition Equal Subset Sum
number: 58
source: NeetCode
category: 1-D Dynamic Programming
difficulty: Medium
tags: Array, Dynamic Programming
url: https://neetcode.io/problems/partition-equal-subset-sum
---

## Problem
Given an integer array `nums`, return `true` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or `false` otherwise.

### Examples

**Example 1:**
```text
Input: nums = [1, 5, 11, 5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
```

**Example 2:**
```text
Input: nums = [1, 2, 3, 5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
```

### Constraints
- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`

## Hints
- If the total sum is odd, it cannot be partitioned into two equal integer subsets.
- Target subset sum is `totalSum / 2`. This reduces to the 0/1 Knapsack problem.
- Maintain a Set of reachable sums.

## Template
```typescript
function canPartition(nums: number[]): boolean {
  // TODO
}
```

```python
def canPartition(nums: list[int]) -> bool:
    # TODO
    pass
```

## Solution: DP Set / 0-1 Knapsack (Optimal)
- time: O(n * target) where target = sum / 2
- space: O(target)

### Explanation
Calculate target sum `sum(nums) / 2`. Track all reachable subset sums using a set or boolean DP array.

### Walkthrough
- Compute `totalSum = sum(nums)`.
- If `totalSum % 2 !== 0`, return false.
- Set `target = totalSum / 2`.
- Initialize `dpSet = new Set([0])`.
- For each `num` in `nums`:
-   Create `nextSet` containing all `s` and `s + num` for `s` in `dpSet`.
-   If `target` in `nextSet`, return true.
-   `dpSet = nextSet`.
- Return `dpSet.has(target)`.

```typescript
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;

  const target = sum / 2;
  let dp = new Set<number>([0]);

  for (const num of nums) {
    const nextDp = new Set<number>(dp);
    for (const t of dp) {
      if (t + num === target) return true;
      if (t + num < target) {
        nextDp.add(t + num);
      }
    }
    dp = nextDp;
  }

  return dp.has(target);
}
```

```python
def canPartition(nums: list[int]) -> bool:
    total = sum(nums)
    if total % 2 != 0:
        return False
        
    target = total // 2
    dp = {0}
    
    for num in nums:
        next_dp = set(dp)
        for t in dp:
            if t + num == target:
                return True
            if t + num < target:
                next_dp.add(t + num)
        dp = next_dp
        
    return target in dp
```
