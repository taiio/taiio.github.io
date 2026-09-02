---
title: Time Based Key-Value Store
number: 981
source: LeetCode
category: Binary Search
difficulty: Medium
tags: Hash Table, String, Binary Search, Design
url: https://leetcode.com/problems/time-based-key-value-store/
---

## Problem
Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the `TimeMap` class:
- `TimeMap()` initializes the object.
- `void set(String key, String value, int timestamp)` stores the key `key` with the value `value` at the given time `timestamp`.
- `String get(String key, int timestamp)` returns a value such that `set` was called previously, with `timestamp_prev <= timestamp`. If there are multiple such values, it returns the value associated with the largest `timestamp_prev`. If there are no values, it returns `""`.

**Example 1:**
```
Input:
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]

Output:
[null, null, "bar", "bar", null, "bar2", "bar2"]
```
Explanation:
```
TimeMap timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5);         // return "bar2"
```

**Constraints:**
- `1 <= key.length, value.length <= 100`
- `key` and `value` consist of lowercase English letters and digits.
- `1 <= timestamp <= 10^7`
- All the timestamps `timestamp` of `set` are strictly increasing.
- At most `2 * 10^5` calls will be made to `set` and `get`.

## Hints
- Since `set` calls for the same key always come with strictly increasing timestamps, the list of `(timestamp, value)` pairs stored for each key is naturally already sorted by timestamp — no extra sorting needed.
- `get(key, timestamp)` is asking: "among all stored timestamps for this key that are `<= timestamp`, what's the value at the largest one?" This is a classic **Binary Search** for "the rightmost value less than or equal to a target."
- Store each key's history as an array of `[timestamp, value]` pairs (appended in order since timestamps only increase), and binary search that array for the given `timestamp` on every `get` call.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

class TimeMap {
  constructor() {
    // TODO
  }

  set(key: string, value: string, timestamp: number): void {
    // TODO
  }

  get(key: string, timestamp: number): string {
    // TODO
    return "";
  }
}
```

## Solution: Hash Map of Arrays + Binary Search
- time: O(1) for `set`; O(log n) for `get`, where n is the number of values stored for that key
- space: O(n) total, where n is the total number of `set` calls

### Explanation
We store a Hash Map from key to an array of `[timestamp, value]` pairs. Since the problem guarantees that timestamps for `set` calls on the same key strictly increase over time, each key's array is automatically sorted by timestamp as we append to it — no sorting step is needed for `set`. For `get(key, timestamp)`, we need to find the value associated with the largest stored timestamp that is `<= timestamp`. Since the array is sorted by timestamp, we can binary search for this — specifically, find the rightmost timestamp in the array that doesn't exceed the query timestamp, which is a standard "find the last element `<=` target" binary search pattern.

### Walkthrough
**`set(key, value, timestamp)`:**
- If `key` isn't in the map yet, initialize an empty array for it.
- Append `[timestamp, value]` to that key's array.

**`get(key, timestamp)`:**
- If `key` isn't in the map, return `""`.
- Let `entries` be the array of `[timestamp, value]` pairs for `key`.
- Binary search `entries` for the rightmost entry whose timestamp is `<= timestamp`:
  - Initialize `left = 0`, `right = entries.length - 1`, and `result = ""`.
  - While `left <= right`:
    - Compute `mid = Math.floor((left + right) / 2)`.
    - If `entries[mid][0] <= timestamp`, this is a valid candidate — record its value as `result` and try to find a later (larger-timestamp) one by setting `left = mid + 1`.
    - Otherwise, this entry's timestamp is too large, so set `right = mid - 1`.
  - Return `result`.

```typescript
class TimeMap {
  private store: Map<string, [number, string][]> = new Map();

  set(key: string, value: string, timestamp: number): void {
    if (!this.store.has(key)) {
      this.store.set(key, []);
    }
    this.store.get(key)!.push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    const entries = this.store.get(key);
    if (!entries || entries.length === 0) return "";

    let left = 0;
    let right = entries.length - 1;
    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (entries[mid][0] <= timestamp) {
        result = entries[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}
```

## Solution: Hash Map of Arrays + Linear Scan (Baseline)
- time: O(1) for `set`; O(n) for `get`, where n is the number of values stored for that key
- space: O(n) total

### Explanation
As a simpler but slower baseline, `get` could scan the stored entries for the key from the most recent backward (or from the oldest forward), stopping at the first entry whose timestamp is `<= timestamp`. This avoids implementing binary search but degrades to O(n) per `get` call in the worst case, which can be too slow given the problem's constraint of up to `2 * 10^5` calls — it's included here mainly to highlight why the binary search version is preferable at scale.

### Walkthrough
**`set(key, value, timestamp)`:** same as before — append `[timestamp, value]` to the key's array.

**`get(key, timestamp)`:**
- If `key` isn't in the map, return `""`.
- Scan `entries` for `key` from the end (most recent) backward.
- Return the value of the first entry found whose timestamp is `<= timestamp`.
- If no such entry exists, return `""`.

```typescript
class TimeMap {
  private store: Map<string, [number, string][]> = new Map();

  set(key: string, value: string, timestamp: number): void {
    if (!this.store.has(key)) {
      this.store.set(key, []);
    }
    this.store.get(key)!.push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    const entries = this.store.get(key);
    if (!entries) return "";

    for (let i = entries.length - 1; i >= 0; i--) {
      if (entries[i][0] <= timestamp) {
        return entries[i][1];
      }
    }

    return "";
  }
}
```
