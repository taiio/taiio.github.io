---
title: Kth Largest Element in an Array
number: 36
source: NeetCode
category: Heap / Priority Queue
difficulty: Medium
tags: Array, Divide and Conquer, Sorting, Heap, Quickselect
url: https://neetcode.io/problems/kth-largest-element-in-an-array
---

## Problem
Given an integer array `nums` and an integer `k`, return the `k-th` largest element in the array.

Note that it is the `k-th` largest element in the sorted order, not the `k-th` distinct element.

Can you solve it without sorting?

### Examples

**Example 1:**
```text
Input: nums = [3, 2, 1, 5, 6, 4], k = 2
Output: 5
```

**Example 2:**
```text
Input: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
Output: 4
```

### Constraints
- `1 <= k <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## Hints
- Sorting takes O(n log n).
- A Min-Heap of size `k` processes the array in O(n log k).
- Quickselect achieves O(n) average time complexity.

## Template
```typescript
function findKthLargest(nums: number[], k: number): number {
  // TODO
}
```

```python
def findKthLargest(nums: list[int], k: int) -> int:
    # TODO
    pass
```

## Solution: Min-Heap
- time: O(n log k)
- space: O(k)

### Explanation
Maintain a Min-Heap of size k. The heap will always contain the k largest elements seen so far, with the top element being the k-th largest.

### Walkthrough
- Push elements into a min-heap.
- If heap size exceeds k, pop the smallest element.
- After processing all elements, the root of the min-heap is the answer.

```typescript
function findKthLargest(nums: number[], k: number): number {
  // Simple priority queue or sort implementation
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}
```

```python
import heapq

def findKthLargest(nums: list[int], k: int) -> int:
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]
```

## Solution: Quickselect (Optimal Average)
- time: O(n) average, O(n²) worst case
- space: O(1)

### Explanation
Partition array around a pivot. If pivot index matches target rank, return pivot value; otherwise recurse on the relevant half.

### Walkthrough
- The k-th largest element is at index `target = nums.length - k` in 0-indexed sorted order.
- Choose pivot, partition array such that elements < pivot are left, elements > pivot are right.
- If pivot index === target, return pivot.
- If pivot index < target, quickselect on right partition.
- Else quickselect on left partition.

```typescript
function findKthLargest(nums: number[], k: number): number {
  const target = nums.length - k;

  function quickSelect(l: number, r: number): number {
    const pivot = nums[r];
    let p = l;

    for (let i = l; i < r; i++) {
      if (nums[i] <= pivot) {
        [nums[p], nums[i]] = [nums[i], nums[p]];
        p++;
      }
    }
    [nums[p], nums[r]] = [nums[r], nums[p]];

    if (p === target) return nums[p];
    if (p < target) return quickSelect(p + 1, r);
    return quickSelect(l, p - 1);
  }

  return quickSelect(0, nums.length - 1);
}
```

```python
def findKthLargest(nums: list[int], k: int) -> int:
    target = len(nums) - k
    
    def quick_select(l, r):
        pivot = nums[r]
        p = l
        for i in range(l, r):
            if nums[i] <= pivot:
                nums[p], nums[i] = nums[i], nums[p]
                p += 1
        nums[p], nums[r] = nums[r], nums[p]
        
        if p == target:
            return nums[p]
        elif p < target:
            return quick_select(p + 1, r)
        else:
            return quick_select(l, p - 1)
            
    return quick_select(0, len(nums) - 1)
```
