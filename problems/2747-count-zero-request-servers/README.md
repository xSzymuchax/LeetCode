# 2747. Count Zero Request Servers

**Difficulty:** $\textcolor{#ca8a04}{\textsf{Medium}}$

[Problem on LeetCode](https://leetcode.com/problems/count-zero-request-servers/)

For each query time q, count the servers that received no log in the window [q − x, q].

**Approach:** SlidingWindow

- Time: O((L + Q) log (L + Q))
- Space: O(L + Q)
