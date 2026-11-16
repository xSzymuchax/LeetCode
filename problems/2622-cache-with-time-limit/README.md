# 2622. Cache With Time Limit

**Difficulty:** $\textcolor{#ca8a04}{\textsf{Medium}}$

[Problem on LeetCode](https://leetcode.com/problems/cache-with-time-limit/)

A key-value map with a time to live. `set` reports whether the key was still alive, `get` returns the value or −1, and `count` returns the number of live keys.

**Approach:** HashMap

- Time: O(1) for set and get, O(n) for count
- Space: O(n)
