---
title: Top K Frequent Elements
number: 5
source: NeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, Heap, Bucket Sort
url: https://neetcode.io/problems/top-k-elements-in-list
---

## Problem
Given an integer array `nums` and an integer `k`, return the `k` **most frequent elements**. You may return the answer in **any order**.

### Examples

**Example 1:**
```text
Input: nums = [1, 1, 1, 2, 2, 3], k = 2
Output: [1, 2]
```

**Example 2:**
```text
Input: nums = [1], k = 1
Output: [1]
```

### Constraints
- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `k` is in the range `[1, the number of unique elements in the array]`.
- It is **guaranteed** that the answer is unique.

## Hints
- First, count the frequency of each number using a Hash Map.
- You can sort the frequency entries in O(N log N) or use a Min-Heap of size k in O(N log k).
- Can we achieve O(N) using Bucket Sort where bucket index represents frequency?

## Template
```typescript
function topKFrequent(nums: number[], k: number): number[] {
  // TODO
}
```

```python
def topKFrequent(nums: list[int], k: int) -> list[int]:
    # TODO
    pass
```

## Solution: Frequency Sorting
- time: O(N log N) where N is number of unique elements
- space: O(N)

### Explanation
Count frequencies using a map, sort map entries by frequency descending, and take the top k elements.

### Walkthrough
- Count frequency of each number using a Map.
- Extract [num, count] pairs into an array.
- Sort pairs in descending order of count.
- Slice the first k elements and return their keys.

```typescript
function topKFrequent(nums: number[], k: number): number[] {
  const count = new Map<number, number>();
  for (const n of nums) {
    count.set(n, (count.get(n) || 0) + 1);
  }

  const sorted = Array.from(count.entries()).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map(entry => entry[0]);
}
```

```python
from collections import Counter

def topKFrequent(nums: list[int], k: int) -> list[int]:
    count = Counter(nums)
    return [item[0] for item in count.most_common(k)]
```

## Solution: Bucket Sort (Optimal)
- time: O(N)
- space: O(N)

### Explanation
Count frequencies, create buckets where index i stores all numbers that appear with frequency i, and scan from highest bucket downwards.

### Walkthrough
- Count frequency of each number in `nums` with a hash map.
- Create an array of buckets of size `n + 1`, where each bucket is a list.
- Place each number into `bucket[freq]`.
- Iterate backwards from `n` down to 1, collecting numbers into the result until result length is `k`.
- Return the result array.

```typescript
function topKFrequent(nums: number[], k: number): number[] {
  const count = new Map<number, number>();
  for (const n of nums) {
    count.set(n, (count.get(n) || 0) + 1);
  }

  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, freq] of count.entries()) {
    buckets[freq].push(num);
  }

  const result: number[] = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for (const num of buckets[i]) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
}
```

```python
from collections import Counter

def topKFrequent(nums: list[int], k: int) -> list[int]:
    count = Counter(nums)
    buckets = [[] for _ in range(len(nums) + 1)]
    
    for num, freq in count.items():
        buckets[freq].append(num)
        
    result = []
    for freq in range(len(buckets) - 1, 0, -1):
        for num in buckets[freq]:
            result.append(num)
            if len(result) == k:
                return result
    return result
```
