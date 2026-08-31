---
title: Longest Consecutive Sequence
number: 8
source: NeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, Union Find
url: https://neetcode.io/problems/longest-consecutive-sequence
---

## Problem
Given an unsorted array of integers `nums`, return the length of the **longest consecutive elements sequence**.

You must write an algorithm that runs in `O(n)` time.

### Examples

**Example 1:**
```text
Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Its length is 4.
```

**Example 2:**
```text
Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
Output: 9
```

### Constraints
- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Hints
- Sorting the array would give O(n log n), but we need O(n).
- Insert all numbers into a Hash Set for O(1) lookups.
- Only start counting the sequence length from a number `x` if `x - 1` is NOT in the set (i.e. `x` is the start of a streak).

## Template
```typescript
function longestConsecutive(nums: number[]): number {
  // TODO
}
```

```python
def longestConsecutive(nums: list[int]) -> int:
    # TODO
    pass
```

## Solution: Hash Set Sequence Start (Optimal)
- time: O(n)
- space: O(n)

### Explanation
Store all numbers in a set. Only count streaks starting from numbers `x` where `x - 1` is not in the set, ensuring each number is visited at most twice.

### Walkthrough
- Put all elements of nums into a Hash Set `numSet`.
- Initialize `longest = 0`.
- For each `num` in `numSet`:
-   Check if `num - 1` is in `numSet`.
-   If NO, `num` is the beginning of a consecutive sequence.
-   Count length: while `num + currentLength` is in `numSet`, increment length.
-   Update `longest = max(longest, currentLength)`.
- Return `longest`.

```typescript
function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    // Only check from the beginning of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let streak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        streak += 1;
      }

      longest = Math.max(longest, streak);
    }
  }

  return longest;
}
```

```python
def longestConsecutive(nums: list[int]) -> int:
    num_set = set(nums)
    longest = 0
    
    for num in num_set:
        # Check if it is the start of a streak
        if num - 1 not in num_set:
            current = num
            streak = 1
            
            while current + 1 in num_set:
                current += 1
                streak += 1
                
            longest = max(longest, streak)
            
    return longest
```

## Solution: Sorting
- time: O(n log n)
- space: O(1) or O(n)

### Explanation
Sort array, skip duplicate elements, and count consecutive adjacent numbers.

### Walkthrough
- If array is empty, return 0.
- Sort nums in ascending order.
- Iterate through sorted array tracking current streak and max streak.
- If nums[i] == nums[i-1], skip (duplicate).
- If nums[i] == nums[i-1] + 1, increment current streak.
- Else, reset current streak to 1.

```typescript
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);

  let longest = 1;
  let current = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    if (nums[i] === nums[i - 1] + 1) {
      current++;
    } else {
      longest = Math.max(longest, current);
      current = 1;
    }
  }

  return Math.max(longest, current);
}
```

```python
def longestConsecutive(nums: list[int]) -> int:
    if not nums:
        return 0
    nums.sort()
    
    longest = 1
    current = 1
    
    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            continue
        if nums[i] == nums[i - 1] + 1:
            current += 1
        else:
            longest = max(longest, current)
            current = 1
            
    return max(longest, current)
```
