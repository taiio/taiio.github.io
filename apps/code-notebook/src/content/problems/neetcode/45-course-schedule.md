---
title: Course Schedule
number: 45
source: NeetCode
category: Graphs
difficulty: Medium
tags: Depth-First Search, Breadth-First Search, Graph, Topological Sort
url: https://neetcode.io/problems/course-schedule
---

## Problem
There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

### Examples

**Example 1:**
```text
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.
```

**Example 2:**
```text
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: To take course 1 you need 0, and to take course 0 you need 1. Impossible cycle.
```

### Constraints
- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses`
- All the pairs `prerequisites[i]` are **unique**.

## Hints
- This problem can be modeled as detecting a cycle in a directed graph.
- Use Topological Sort (Kahn's Algorithm with in-degrees) or DFS with 3-color states (unvisited, visiting, visited).

## Template
```typescript
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // TODO
}
```

```python
def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:
    # TODO
    pass
```

## Solution: Kahn's Algorithm / BFS In-Degrees (Optimal)
- time: O(V + E)
- space: O(V + E)

### Explanation
Calculate in-degrees for each course. Enqueue courses with 0 prerequisites. Process courses, decrementing in-degrees of dependents.

### Walkthrough
- Build adjacency list and in-degree array.
- Enqueue all courses with in-degree 0.
- While queue is not empty, dequeue course, increment `takenCourses` count.
- For each neighbor of course, decrement its in-degree. If in-degree reaches 0, enqueue it.
- Return `takenCourses === numCourses`.

```typescript
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const inDegree = new Array(numCourses).fill(0);
  const adj: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [course, pre] of prerequisites) {
    adj[pre].push(course);
    inDegree[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let taken = 0;
  while (queue.length > 0) {
    const curr = queue.shift()!;
    taken++;

    for (const next of adj[curr]) {
      inDegree[next]--;
      if (inDegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return taken === numCourses;
}
```

```python
from collections import deque

def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:
    in_degree = [0] * numCourses
    adj = [[] for _ in range(numCourses)]
    
    for course, pre in prerequisites:
        adj[pre].append(course)
        in_degree[course] += 1
        
    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])
    taken = 0
    
    while queue:
        curr = queue.popleft()
        taken += 1
        
        for nxt in adj[curr]:
            in_degree[nxt] -= 1
            if in_degree[nxt] == 0:
                queue.append(nxt)
                
    return taken == numCourses
```
