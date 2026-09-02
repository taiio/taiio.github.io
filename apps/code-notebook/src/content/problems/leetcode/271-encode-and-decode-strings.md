---
title: Encode and Decode Strings
number: 271
source: LeetCode
category: Arrays & Hashing
difficulty: Medium
tags: Array, String, Design
url: https://leetcode.com/problems/encode-and-decode-strings/
---

## Problem
Design an algorithm to **encode** a list of strings into a single string, and then **decode** that single string back into the original list of strings.

The encoded string can use any characters and any encoding scheme you'd like, as long as the following holds:
- `decode(encode(strs)) == strs` for any list of strings `strs`, including strings that may contain any characters (including empty strings, spaces, or even the delimiter characters you choose to use internally).

Implement two functions:
- `encode(strs)`: takes a list of strings and returns a single encoded string.
- `decode(s)`: takes the encoded string and returns the original list of strings.

**Example 1:**
```
Input: strs = ["neet","code","love","you"]
Output after encode -> decode: ["neet","code","love","you"]
```

**Example 2:**
```
Input: strs = [""]
Output after encode -> decode: [""]
```

**Constraints:**
- `0 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` may contain any possible characters, including special characters and delimiters like commas.

## Hints
- A naive approach — joining strings with a delimiter such as a comma — breaks as soon as one of the strings itself contains that delimiter character.
- A robust scheme is **length-prefixing**: before each string, write its length followed by a special separator character (one that can never be confused with digits), then the string itself. When decoding, read the length first, then read exactly that many characters as the next string, regardless of what those characters are.
- Because the length is read first, the decoder always knows exactly how many characters to consume next, so it never needs to guess where one string ends and the next begins — this works correctly no matter what characters appear inside the strings.

## Template

```typescript
// just init the function name and paramaters. dont remove!.

function encode(strs: string[]): string {
  // TODO
  return "";
}

function decode(s: string): string[] {
  // TODO
  return [];
}
```

## Solution: Length-Prefixed Encoding
- time: O(n), where n is the total number of characters across all strings, for both encode and decode
- space: O(n) for the encoded string and the resulting list

### Explanation
Instead of relying on a delimiter character that might collide with the string content, we prefix each string with its length and a separator (here, `#`) that's guaranteed not to be part of a valid length number. For example, the string `"code"` becomes `"4#code"`. When decoding, we read digits until we hit `#` to determine the length of the next string, then read exactly that many characters as the string itself — no matter what those characters are, even if they include digits, `#`, or anything else.

### Walkthrough
**Encode:**
- For each string `s` in `strs`, append `"${s.length}#${s}"` to the result.
- Concatenate all these pieces and return the combined string.

**Decode:**
- Initialize an empty result list and a pointer `i = 0`.
- While `i` is within bounds:
  - Read characters from `i` until hitting `#` to build up the length as a number `length`, then move past the `#`.
  - Extract the next `length` characters starting right after the `#` as the next string.
  - Append that string to the result and advance `i` past it.
- Return the result list.

```typescript
function encode(strs: string[]): string {
  let result = "";
  for (const s of strs) {
    result += `${s.length}#${s}`;
  }
  return result;
}

function decode(s: string): string[] {
  const result: string[] = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") {
      j++;
    }
    const length = parseInt(s.slice(i, j), 10);
    const start = j + 1;
    const end = start + length;
    result.push(s.slice(start, end));
    i = end;
  }

  return result;
}
```

## Solution: Escape-Character Encoding
- time: O(n) for encode, O(n) for decode
- space: O(n)

### Explanation
An alternative to length-prefixing is a classic escaping scheme, similar to how many text formats handle special characters. We pick a delimiter (say `,`) to separate strings, but before writing each original string, we "escape" any literal delimiter or escape character that appears inside it (for example, replacing `\` with `\\` and `,` with `\,`). During decoding, we scan character by character: when we see the escape character `\`, we know the next character is a literal part of the string rather than a delimiter, and when we see an unescaped delimiter, we know a string has ended. This avoids needing to compute lengths up front, at the cost of a slightly trickier decode loop.

### Walkthrough
**Encode:**
- For each string `s`, replace every `\` with `\\` and every `,` with `\,` to escape it.
- Join all escaped strings with an unescaped `,` delimiter.

**Decode:**
- Initialize an empty result list, a buffer for the current string, and a pointer `i = 0`.
- While `i` is within bounds:
  - If the current character is `\`, append the *next* character literally to the buffer and advance `i` by 2 (skipping both the escape character and the escaped character).
  - Else if the current character is the unescaped delimiter `,`, push the buffer to the result, reset the buffer, and advance `i` by 1.
  - Otherwise, append the current character to the buffer and advance `i` by 1.
- After the loop, push the final buffer (for the last string) to the result.
- Return the result list.

```typescript
function encode(strs: string[]): string {
  const escaped = strs.map((s) => s.replace(/\\/g, "\\\\").replace(/,/g, "\\,"));
  return escaped.join(",");
}

function decode(s: string): string[] {
  const result: string[] = [];
  let buffer = "";
  let i = 0;

  while (i < s.length) {
    if (s[i] === "\\") {
      buffer += s[i + 1];
      i += 2;
    } else if (s[i] === ",") {
      result.push(buffer);
      buffer = "";
      i += 1;
    } else {
      buffer += s[i];
      i += 1;
    }
  }

  result.push(buffer);
  return result;
}
```
