# 1606. Find Servers That Handled Most Number of Requests

**Difficulty:** $\textcolor{#dc2626}{\textsf{Hard}}$

[Problem on LeetCode](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/)

k servers handle requests in order. Server i takes requests i, i+k, i+2k while it is free. Return the servers that handled the most requests.

**Approach:** Heap

- Time: O(n log k)
- Space: O(k)
