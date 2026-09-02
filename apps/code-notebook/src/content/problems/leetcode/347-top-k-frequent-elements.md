---
title: Top K Frequent Elements
number: 347
source: LeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect
url: https://leetcode.com/problems/top-k-frequent-elements/
---

## Problem
Given an integer array `nums` and an integer `k`, return the `k` **most frequent** elements in the array. You can return the answer in any order.

**Example 1:**
```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

**Example 2:**
```
Input: nums = [1], k = 1
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `k` is a positive integer, and `k <= number of distinct elements in nums`.
- The answer is guaranteed to be unique.

## Hints
- The first step is always to count how often each element appears — a Hash Map is enough for that.
- Once you have the frequency table, a simple approach is to sort the elements by frequency in descending order and take the first k — but this costs O(n log n).
- A more optimal approach is **Bucket Sort** — create buckets indexed by frequency (from 0 to n), place each element into the bucket matching how many times it appears, then walk from the highest-frequency bucket downward to collect k elements. This runs in O(n).
- Another option is a Min-Heap of size k to keep the k most frequent elements seen so far.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function topKFrequent(nums: number[], k: number): number[] {
  // TODO
  return [];
}
```

## Solution: Sort by Frequency
- time: O(n log n)
- space: O(n)

### Explanation
The most intuitive approach: count each element's frequency using a Hash Map, then take the list of (value, frequency) pairs and sort it in descending order by frequency. The first k pairs after sorting are the answer.

### Walkthrough
- Count the frequency of each element in `nums` into a Hash Map `freq`.
- Take the (value, frequency) pairs from `freq`, sort them in descending order by frequency.
- Take the values of the first k pairs and return them as the result.

```typescript
function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  for (const n of nums) {
    freq.set(n, (freq.get(n) ?? 0) + 1);
  }

  const sorted = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map((entry) => entry[0]);
}
```

## Solution: Min-Heap of Size K
- time: O(n log k)
- space: O(n + k)

### Explanation
Instead of sorting every distinct element, we can maintain a Min-Heap that holds at most `k` (value, frequency) pairs — always keeping the `k` most frequent elements seen so far. For each distinct element, if the heap has fewer than `k` items, we push it in; otherwise, we compare it to the smallest-frequency item currently in the heap (the root) and replace the root if the new element is more frequent. Since heap operations cost O(log k), and we do this for each of the (at most n) distinct elements, the total cost is O(n log k), which beats O(n log n) sorting whenever k is much smaller than n.

### Walkthrough
- Count frequencies into a Hash Map `freq`.
- Initialize an empty Min-Heap keyed by frequency.
- For each (value, count) in `freq`:
  - Push `(count, value)` onto the heap.
  - If the heap size exceeds `k`, pop the smallest element off.
- After processing all elements, the heap contains exactly the k most frequent values; extract them into the result array.

```typescript
class MinHeap {
  private heap: [number, number][] = []; // [count, value]

  get size(): number {
    return this.heap.length;
  }

  push(item: [number, number]): void {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  pop(): [number, number] {
    const top = this.heap[0];
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return top;
  }

  private bubbleUp(i: number): void {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][0] <= this.heap[i][0]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  private bubbleDown(i: number): void {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
      if (right < n && this.heap[right][0] < this.heap[smallest][0]) smallest = right;
      if (smallest === i) break;
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      i = smallest;
    }
  }

  toArray(): [number, number][] {
    return this.heap;
  }
}

function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  for (const n of nums) {
    freq.set(n, (freq.get(n) ?? 0) + 1);
  }

  const minHeap = new MinHeap();
  for (const [value, count] of freq.entries()) {
    minHeap.push([count, value]);
    if (minHeap.size > k) {
      minHeap.pop();
    }
  }

  return minHeap.toArray().map(([, value]) => value);
}
```

## Solution: Bucket Sort
- time: O(n)
- space: O(n)

### Explanation
Since an element's frequency can never exceed the array length `n`, we can create an array `buckets` with `n + 1` buckets, where `buckets[i]` holds the list of values that appear exactly `i` times. After counting frequencies and placing elements into buckets, we just walk `buckets` from the highest index (`n`) down to `0`, collecting elements until we have `k` of them. Because the number of buckets and the total number of elements across all buckets are both linear in `n`, the whole algorithm runs in O(n), faster than both sorting and the heap-based approach.

### Walkthrough
- Count each element's frequency into a Hash Map `freq`.
- Create an array `buckets` with `n + 1` entries, each an empty list.
- For each (value, count) in `freq`, push that value into `buckets[count]`.
- Walk `buckets` from index `n` down to `0`; for each non-empty bucket, add its values to the result until you have `k` elements.

```typescript
function topKFrequent(nums: number[], k: number): number[] {
  const n = nums.length;
  const freq = new Map<number, number>();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  const buckets: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [value, count] of freq.entries()) {
    buckets[count].push(value);
  }

  const result: number[] = [];
  for (let count = n; count >= 0 && result.length < k; count--) {
    for (const value of buckets[count]) {
      if (result.length < k) {
        result.push(value);
      }
    }
  }

  return result;
}
```
