---
title: Template to resolve on problem
number: 217
source: Hackerrank
category: DFS, BFS, Linkedin List, BST
difficulty: Easy
tags: DFS, BFS, Linkedin List, BST 
url: 
---

## Solution: Hash Set
- time: O(n)
- space: O(n)


```typescript
/* ============================================================
   DFS / BFS DSA TEMPLATE - TYPESCRIPT
   Includes:
   - Binary Search Tree (BST)
   - Graph (Adjacency List)
   - DFS / BFS
   - Shortest Path
   - Connected Components
   - Cycle Detection
   - Grid / Matrix DFS & BFS
   - Multi-source BFS
   ============================================================ */


/* ============================================================
   1. BINARY SEARCH TREE (BST)
   ============================================================ */

class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}

class BST<T> {
  root: TreeNode<T> | null = null;

  // ------------------------------------------------------------
  // Insert
  // ------------------------------------------------------------

  insert(val: T): void {
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let cur = this.root;

    while (true) {
      if (val < cur.val) {
        if (!cur.left) {
          cur.left = newNode;
          return;
        }

        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = newNode;
          return;
        }

        cur = cur.right;
      }
    }
  }

  // ------------------------------------------------------------
  // Search
  // ------------------------------------------------------------

  search(val: T): TreeNode<T> | null {
    let cur = this.root;

    while (cur) {
      if (val === cur.val) return cur;

      if (val < cur.val) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }

    return null;
  }

  // ------------------------------------------------------------
  // DFS - Recursive
  // ------------------------------------------------------------

  // Preorder: Node -> Left -> Right
  dfsPreorder(
    node: TreeNode<T> | null = this.root,
    res: T[] = []
  ): T[] {
    if (!node) return res;

    res.push(node.val);

    this.dfsPreorder(node.left, res);
    this.dfsPreorder(node.right, res);

    return res;
  }

  // Inorder: Left -> Node -> Right
  //
  // IMPORTANT:
  // In a BST, inorder traversal produces sorted values.
  dfsInorder(
    node: TreeNode<T> | null = this.root,
    res: T[] = []
  ): T[] {
    if (!node) return res;

    this.dfsInorder(node.left, res);
    res.push(node.val);
    this.dfsInorder(node.right, res);

    return res;
  }

  // Postorder: Left -> Right -> Node
  dfsPostorder(
    node: TreeNode<T> | null = this.root,
    res: T[] = []
  ): T[] {
    if (!node) return res;

    this.dfsPostorder(node.left, res);
    this.dfsPostorder(node.right, res);
    res.push(node.val);

    return res;
  }

  // ------------------------------------------------------------
  // DFS - Iterative
  // ------------------------------------------------------------

  // Iterative preorder traversal
  dfsIterative(): T[] {
    const res: T[] = [];

    if (!this.root) return res;

    const stack: TreeNode<T>[] = [this.root];

    while (stack.length > 0) {
      const node = stack.pop()!;

      res.push(node.val);

      // Push right first so left is processed first.
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }

    return res;
  }

  // ------------------------------------------------------------
  // BFS - Level Order
  // ------------------------------------------------------------

  bfs(): T[][] {
    const res: T[][] = [];

    if (!this.root) return res;

    const queue: TreeNode<T>[] = [this.root];

    while (queue.length > 0) {
      const levelSize = queue.length;
      const level: T[] = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift()!;

        level.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      res.push(level);
    }

    return res;
  }

  // ------------------------------------------------------------
  // Find Minimum
  // ------------------------------------------------------------

  findMin(node: TreeNode<T> | null = this.root): T | null {
    if (!node) return null;

    let cur = node;

    while (cur.left) {
      cur = cur.left;
    }

    return cur.val;
  }

  // ------------------------------------------------------------
  // Find Maximum
  // ------------------------------------------------------------

  findMax(node: TreeNode<T> | null = this.root): T | null {
    if (!node) return null;

    let cur = node;

    while (cur.right) {
      cur = cur.right;
    }

    return cur.val;
  }

  // ------------------------------------------------------------
  // Tree Height
  // ------------------------------------------------------------

  height(node: TreeNode<T> | null = this.root): number {
    if (!node) return 0;

    return 1 + Math.max(
      this.height(node.left),
      this.height(node.right)
    );
  }

  // ------------------------------------------------------------
  // Count Nodes
  // ------------------------------------------------------------

  countNodes(node: TreeNode<T> | null = this.root): number {
    if (!node) return 0;

    return (
      1 +
      this.countNodes(node.left) +
      this.countNodes(node.right)
    );
  }

  // ------------------------------------------------------------
  // Check if Tree Contains a Value
  // ------------------------------------------------------------

  contains(val: T): boolean {
    return this.search(val) !== null;
  }
}


/* ============================================================
   2. GRAPH - ADJACENCY LIST
   ============================================================ */

class Graph<T> {
  private adjList: Map<T, T[]> = new Map();
  private directed: boolean;

  constructor(directed: boolean = false) {
    this.directed = directed;
  }

  // ------------------------------------------------------------
  // Add Vertex
  // ------------------------------------------------------------

  addVertex(v: T): void {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  // ------------------------------------------------------------
  // Add Edge
  // ------------------------------------------------------------

  addEdge(u: T, v: T): void {
    this.addVertex(u);
    this.addVertex(v);

    this.adjList.get(u)!.push(v);

    if (!this.directed) {
      this.adjList.get(v)!.push(u);
    }
  }

  // ------------------------------------------------------------
  // Get Neighbors
  // ------------------------------------------------------------

  getNeighbors(v: T): T[] {
    return this.adjList.get(v) ?? [];
  }

  // ------------------------------------------------------------
  // Get All Vertices
  // ------------------------------------------------------------

  getVertices(): T[] {
    return [...this.adjList.keys()];
  }

  // ------------------------------------------------------------
  // DFS - Recursive
  // ------------------------------------------------------------

  dfsRecursive(
    start: T,
    visited: Set<T> = new Set(),
    res: T[] = []
  ): T[] {
    if (visited.has(start)) return res;

    visited.add(start);
    res.push(start);

    for (const neighbor of this.getNeighbors(start)) {
      this.dfsRecursive(neighbor, visited, res);
    }

    return res;
  }

  // ------------------------------------------------------------
  // DFS - Iterative
  // ------------------------------------------------------------

  dfsIterative(start: T): T[] {
    const visited = new Set<T>();
    const stack: T[] = [start];
    const res: T[] = [];

    while (stack.length > 0) {
      const node = stack.pop()!;

      if (visited.has(node)) continue;

      visited.add(node);
      res.push(node);

      const neighbors = this.getNeighbors(node);

      // Reverse so traversal follows insertion order.
      for (let i = neighbors.length - 1; i >= 0; i--) {
        if (!visited.has(neighbors[i])) {
          stack.push(neighbors[i]);
        }
      }
    }

    return res;
  }

  // ------------------------------------------------------------
  // BFS
  // ------------------------------------------------------------

  bfs(start: T): T[] {
    const visited = new Set<T>([start]);
    const queue: T[] = [start];
    const res: T[] = [];

    let head = 0;

    while (head < queue.length) {
      const node = queue[head++];

      res.push(node);

      for (const neighbor of this.getNeighbors(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return res;
  }

  // ------------------------------------------------------------
  // BFS - Shortest Path in Unweighted Graph
  // ------------------------------------------------------------

  bfsShortestPath(start: T, end: T): T[] | null {
    const visited = new Set<T>([start]);

    const queue: T[] = [start];

    const parent = new Map<T, T | null>();
    parent.set(start, null);

    let head = 0;

    while (head < queue.length) {
      const node = queue[head++];

      if (node === end) {
        const path: T[] = [];

        let cur: T | null = end;

        while (cur !== null) {
          path.push(cur);
          cur = parent.get(cur)!;
        }

        path.reverse();

        return path;
      }

      for (const neighbor of this.getNeighbors(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          parent.set(neighbor, node);
          queue.push(neighbor);
        }
      }
    }

    return null;
  }

  // ------------------------------------------------------------
  // BFS - Shortest Distance
  // ------------------------------------------------------------

  bfsShortestDistance(start: T, end: T): number {
    const visited = new Set<T>([start]);

    const queue: Array<[T, number]> = [[start, 0]];

    let head = 0;

    while (head < queue.length) {
      const [node, distance] = queue[head++];

      if (node === end) {
        return distance;
      }

      for (const neighbor of this.getNeighbors(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, distance + 1]);
        }
      }
    }

    return -1;
  }

  // ------------------------------------------------------------
  // Count Connected Components
  // ------------------------------------------------------------

  countComponents(): number {
    const visited = new Set<T>();
    let count = 0;

    for (const vertex of this.getVertices()) {
      if (visited.has(vertex)) continue;

      count++;

      const stack: T[] = [vertex];

      while (stack.length > 0) {
        const node = stack.pop()!;

        if (visited.has(node)) continue;

        visited.add(node);

        for (const neighbor of this.getNeighbors(node)) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }

    return count;
  }

  // ------------------------------------------------------------
  // Detect Cycle - Undirected Graph
  // ------------------------------------------------------------

  hasCycleUndirected(): boolean {
    const visited = new Set<T>();

    for (const start of this.getVertices()) {
      if (visited.has(start)) continue;

      const stack: Array<[T, T | null]> = [
        [start, null]
      ];

      while (stack.length > 0) {
        const [node, parent] = stack.pop()!;

        if (visited.has(node)) {
          return true;
        }

        visited.add(node);

        for (const neighbor of this.getNeighbors(node)) {
          if (neighbor !== parent) {
            stack.push([neighbor, node]);
          }
        }
      }
    }

    return false;
  }
}


/* ============================================================
   3. GRID / MATRIX DFS
   ============================================================ */

// Common 4-direction movement:
//
//        UP
//         |
// LEFT -- (r,c) -- RIGHT
//         |
//       DOWN

const dirs = [
  [0, 1],   // right
  [0, -1],  // left
  [1, 0],   // down
  [-1, 0]   // up
];


// ------------------------------------------------------------
// Grid DFS
// ------------------------------------------------------------

function dfsGrid(
  grid: number[][],
  startRow: number,
  startCol: number
): void {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = new Set<string>();

  function dfs(r: number, c: number): void {
    // Boundary check
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols
    ) {
      return;
    }

    const key = `${r},${c}`;

    // Already visited
    if (visited.has(key)) return;

    // Example condition:
    // Only visit cells containing 1.
    if (grid[r][c] !== 1) return;

    visited.add(key);

    for (const [dr, dc] of dirs) {
      dfs(r + dr, c + dc);
    }
  }

  dfs(startRow, startCol);
}


/* ============================================================
   4. NUMBER OF ISLANDS
   ============================================================ */

function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

  let count = 0;

  function dfs(r: number, c: number): void {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] !== "1"
    ) {
      return;
    }

    // Mark visited by changing "1" -> "0"
    grid[r][c] = "0";

    for (const [dr, dc] of dirs) {
      dfs(r + dr, c + dc);
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}


/* ============================================================
   5. GRID BFS - SHORTEST PATH
   ============================================================ */

function shortestPathGrid(
  grid: number[][],
  start: [number, number],
  end: [number, number]
): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const [sr, sc] = start;
  const [er, ec] = end;

  if (grid[sr][sc] === 0 || grid[er][ec] === 0) {
    return -1;
  }

  const queue: Array<[number, number, number]> = [
    [sr, sc, 0]
  ];

  const visited = new Set<string>();
  visited.add(`${sr},${sc}`);

  let head = 0;

  while (head < queue.length) {
    const [r, c, distance] = queue[head++];

    if (r === er && c === ec) {
      return distance;
    }

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr < 0 ||
        nr >= rows ||
        nc < 0 ||
        nc >= cols
      ) {
        continue;
      }

      if (grid[nr][nc] === 0) continue;

      const key = `${nr},${nc}`;

      if (visited.has(key)) continue;

      visited.add(key);

      queue.push([
        nr,
        nc,
        distance + 1
      ]);
    }
  }

  return -1;
}


/* ============================================================
   6. MULTI-SOURCE BFS
   ============================================================ */

// Useful for problems like:
//
// - Rotting Oranges
// - Walls and Gates
// - Distance from nearest 0
// - Infection / spreading problems
// - Fire spreading
// - Multiple starting points

function multiSourceBFS(
  grid: number[][]
): number[][] {
  const rows = grid.length;
  const cols = grid[0].length;

  const distance = Array.from(
    { length: rows },
    () => Array(cols).fill(-1)
  );

  const queue: Array<[number, number]> = [];

  // Add ALL starting points first.
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) {
        distance[r][c] = 0;
        queue.push([r, c]);
      }
    }
  }

  let head = 0;

  while (head < queue.length) {
    const [r, c] = queue[head++];

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr < 0 ||
        nr >= rows ||
        nc < 0 ||
        nc >= cols
      ) {
        continue;
      }

      if (distance[nr][nc] !== -1) continue;

      distance[nr][nc] = distance[r][c] + 1;

      queue.push([nr, nc]);
    }
  }

  return distance;
}


/* ============================================================
   7. TOPOLOGICAL SORT - DIRECTED GRAPH
   ============================================================ */

// Kahn's Algorithm
//
// Useful for:
// - Course Schedule
// - Dependency problems
// - Build systems
// - Task scheduling

function topologicalSort(
  numNodes: number,
  edges: Array<[number, number]>
): number[] {
  const graph: number[][] = Array.from(
    { length: numNodes },
    () => []
  );

  const indegree = new Array(numNodes).fill(0);

  for (const [u, v] of edges) {
    graph[u].push(v);
    indegree[v]++;
  }

  const queue: number[] = [];

  for (let i = 0; i < numNodes; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  const result: number[] = [];

  let head = 0;

  while (head < queue.length) {
    const node = queue[head++];

    result.push(node);

    for (const neighbor of graph[node]) {
      indegree[neighbor]--;

      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // If not all nodes were processed,
  // the graph contains a cycle.
  if (result.length !== numNodes) {
    return [];
  }

  return result;
}


/* ============================================================
   8. BFS TREE / LEVEL ORDER TEMPLATE
   ============================================================ */

function levelOrder<T>(
  root: TreeNode<T> | null
): T[][] {
  if (!root) return [];

  const result: T[][] = [];
  const queue: TreeNode<T>[] = [root];

  let head = 0;

  while (head < queue.length) {
    const levelSize = queue.length - head;
    const level: T[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue[head++];

      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
}


/* ============================================================
   9. TREE DFS - COMMON PATTERN
   ============================================================ */

// Example:
// Find maximum value in a binary tree.

function maxTreeValue(
  root: TreeNode<number> | null
): number {
  if (!root) return -Infinity;

  const leftMax = maxTreeValue(root.left);
  const rightMax = maxTreeValue(root.right);

  return Math.max(
    root.val,
    leftMax,
    rightMax
  );
}


/* ============================================================
   10. TREE DFS - PATH SUM
   ============================================================ */

function hasPathSum(
  root: TreeNode<number> | null,
  targetSum: number
): boolean {
  if (!root) return false;

  // Leaf node
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  const remaining = targetSum - root.val;

  return (
    hasPathSum(root.left, remaining) ||
    hasPathSum(root.right, remaining)
  );
}


/* ============================================================
   11. GENERIC DFS TEMPLATE
   ============================================================ */

function dfsTemplate<T>(
  start: T,
  getNeighbors: (node: T) => T[]
): T[] {
  const visited = new Set<T>();
  const result: T[] = [];

  function dfs(node: T): void {
    if (visited.has(node)) return;

    visited.add(node);
    result.push(node);

    for (const neighbor of getNeighbors(node)) {
      dfs(neighbor);
    }
  }

  dfs(start);

  return result;
}


/* ============================================================
   12. GENERIC BFS TEMPLATE
   ============================================================ */

function bfsTemplate<T>(
  start: T,
  getNeighbors: (node: T) => T[]
): T[] {
  const visited = new Set<T>([start]);
  const queue: T[] = [start];
  const result: T[] = [];

  let head = 0;

  while (head < queue.length) {
    const node = queue[head++];

    result.push(node);

    for (const neighbor of getNeighbors(node)) {
      if (visited.has(neighbor)) continue;

      visited.add(neighbor);
      queue.push(neighbor);
    }
  }

  return result;
}


/* ============================================================
   13. EXAMPLE USAGE
   ============================================================ */

// ------------------------------------------------------------
// BST
// ------------------------------------------------------------

const bst = new BST<number>();

[5, 3, 8, 1, 4, 7, 9].forEach(n => {
  bst.insert(n);
});

console.log(
  "Preorder:",
  bst.dfsPreorder()
);

console.log(
  "Inorder:",
  bst.dfsInorder()
);

console.log(
  "Postorder:",
  bst.dfsPostorder()
);

console.log(
  "DFS iterative:",
  bst.dfsIterative()
);

console.log(
  "BFS:",
  bst.bfs()
);

console.log(
  "Search 7:",
  bst.contains(7)
);

console.log(
  "Min:",
  bst.findMin()
);

console.log(
  "Max:",
  bst.findMax()
);

console.log(
  "Height:",
  bst.height()
);


// ------------------------------------------------------------
// Graph
// ------------------------------------------------------------

const graph = new Graph<string>(false);

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

console.log(
  "DFS recursive:",
  graph.dfsRecursive("A")
);

console.log(
  "DFS iterative:",
  graph.dfsIterative("A")
);

console.log(
  "BFS:",
  graph.bfs("A")
);

console.log(
  "Shortest path A -> E:",
  graph.bfsShortestPath("A", "E")
);

console.log(
  "Shortest distance A -> E:",
  graph.bfsShortestDistance("A", "E")
);


/* ============================================================
   14. QUICK DSA NOTES
   ============================================================

   DFS
   ---
   Use DFS when you need to:

   - Explore an entire branch
   - Search for a path
   - Backtracking
   - Count connected components
   - Detect cycles
   - Explore trees
   - Solve recursive problems


   BFS
   ---
   Use BFS when you need to:

   - Find shortest path in an unweighted graph
   - Traverse level by level
   - Solve tree level-order problems
   - Simulate spreading / infection
   - Multi-source BFS
   - Find minimum number of steps


   GRAPH
   -----

   Adjacency List:

       A -> [B, C]
       B -> [A, D]
       C -> [A, D]
       D -> [B, C, E]
       E -> [D]


   DFS:

       stack / recursion
       visited Set


   BFS:

       queue
       visited Set


   GRID
   ----

   Common directions:

       const dirs = [
         [0, 1],    // right
         [0, -1],   // left
         [1, 0],    // down
         [-1, 0]    // up
       ];


   8-DIRECTION GRID
   ----------------

   const dirs8 = [
     [-1, -1], [-1, 0], [-1, 1],
     [ 0, -1],          [ 0, 1],
     [ 1, -1], [ 1, 0], [ 1, 1]
   ];


   IMPORTANT:
   ----------

   For BFS in TypeScript, avoid repeated queue.shift()
   for large inputs because shift() is O(n).

   Prefer:

       let head = 0;

       while (head < queue.length) {
         const node = queue[head++];
       }


   COMPLEXITY
   ----------

   DFS:
       Time  = O(V + E)
       Space = O(V)

   BFS:
       Time  = O(V + E)
       Space = O(V)

   Grid DFS/BFS:
       Time  = O(rows * cols)
       Space = O(rows * cols)


   BST:
       Average search/insert = O(log n)
       Worst-case            = O(n)

   ============================================================ */
```