---
title: Sliding Window Maximum
number: 239
source: LeetCode
category: Sliding Window
difficulty: Hard
tags: Array, Queue, Sliding Window, Heap (Priority Queue), Monotonic Queue
url: https://leetcode.com/problems/sliding-window-maximum/
---

## Problem
You are given an array of integers `nums`, and there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window at any given time. The window slides one position to the right at each step.

Return the max sliding window, i.e. an array containing the maximum value in the window at each position.

**Example 1:**
```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
```
Explanation:
```
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**Example 2:**
```
Input: nums = [1], k = 1
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `1 <= k <= nums.length`

## Hints
- The brute force approach recomputes the maximum of each window from scratch by scanning all k elements, giving O(n * k) total time.
- A Max-Heap (Priority Queue) can track the current maximum, but needs "lazy deletion" of elements that have slid out of the window, since heaps don't support efficient removal of an arbitrary element.
- The optimal approach uses a **Monotonic Queue** (Deque) storing candidate indices in decreasing order of their values: whenever a new element enters, remove all smaller elements from the back of the deque (they can never be the max again while this new, larger element is in the window), then remove indices from the front that have slid out of the window's range. The front of the deque is always the index of the current window's maximum.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function maxSlidingWindow(nums: number[], k: number): number[] {
  // TODO
  return [];
}
```

## Solution: Brute Force
- time: O(n * k)
- space: O(1) extra (not counting the output array)

### Explanation
The most direct approach recomputes the maximum of the current window from scratch at every position by scanning all `k` elements within it.

### Walkthrough
- For each window starting index `i` from `0` to `n - k`:
  - Scan `nums[i .. i + k - 1]` to find its maximum.
  - Append that maximum to the result.
- Return the result.

```typescript
function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const n = nums.length;

  for (let i = 0; i + k <= n; i++) {
    let windowMax = nums[i];
    for (let j = i + 1; j < i + k; j++) {
      windowMax = Math.max(windowMax, nums[j]);
    }
    result.push(windowMax);
  }

  return result;
}
```

## Solution: Max-Heap with Lazy Deletion
- time: O(n log n)
- space: O(n)

### Explanation
We can maintain a Max-Heap of `[value, index]` pairs. As the window slides, we push each new element's `[value, index]` onto the heap. To get the current window's maximum, we look at the top of the heap — but the top might correspond to an index that has already slid out of the window. Rather than removing it immediately (which heaps don't support efficiently for arbitrary elements), we simply pop off any stale entries (whose index is less than the window's left boundary) whenever we check the top, an approach called "lazy deletion." This works correctly but costs O(log n) per push/pop, and in the worst case elements can be pushed and later lazily popped, giving O(n log n) overall.

### Walkthrough
- Initialize an empty Max-Heap (storing `[value, index]` pairs, ordered by value descending) and a result array.
- For each index `i` from `0` to `n - 1`:
  - Push `[nums[i], i]` onto the heap.
  - While the top of the heap has an index less than `i - k + 1` (outside the current window), pop it off.
  - Once `i >= k - 1` (the window is full), the top of the heap (after cleaning stale entries) is the window's maximum — append its value to the result.
- Return the result.

```typescript
class MaxHeap {
  private heap: [number, number][] = []; // [value, index]

  push(item: [number, number]): void {
    this.heap.push(item);
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][0] >= this.heap[i][0]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  pop(): void {
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      let i = 0;
      const n = this.heap.length;
      while (true) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < n && this.heap[left][0] > this.heap[largest][0]) largest = left;
        if (right < n && this.heap[right][0] > this.heap[largest][0]) largest = right;
        if (largest === i) break;
        [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
        i = largest;
      }
    }
  }

  top(): [number, number] {
    return this.heap[0];
  }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  const heap = new MaxHeap();
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    heap.push([nums[i], i]);

    while (heap.top()[1] < i - k + 1) {
      heap.pop();
    }

    if (i >= k - 1) {
      result.push(heap.top()[0]);
    }
  }

  return result;
}
```

## Solution: Monotonic Queue (Deque)
- time: O(n)
- space: O(k)

### Explanation
The optimal approach maintains a deque of indices, kept in an order such that their corresponding values are strictly decreasing from front to back. When a new element `nums[i]` arrives, any indices at the back of the deque whose values are less than or equal to `nums[i]` can be discarded — they can never be the maximum of any future window that also contains `nums[i]`, since `nums[i]` is both larger and more recent. We then push `i` onto the back. Separately, we check whether the index at the front of the deque has fallen outside the window (`front <= i - k`) and remove it if so. Because the front of the deque is always the largest remaining value's index, it's always the current window's maximum once the window is full. Each index is pushed and popped from the deque at most once, giving O(n) total time.

### Walkthrough
- Initialize an empty deque `dq` (storing indices) and a result array.
- For each index `i` from `0` to `n - 1`:
  - While `dq` is non-empty and `nums[dq.back] <= nums[i]`, pop from the back of `dq`.
  - Push `i` onto the back of `dq`.
  - If `dq.front <= i - k` (the front index has slid out of the window), pop from the front of `dq`.
  - Once `i >= k - 1` (the window is full), append `nums[dq.front]` to the result.
- Return the result.

```typescript
function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = []; // stores indices, values decreasing front-to-back
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);

    if (deque[0] <= i - k) {
      deque.shift();
    }

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
```
