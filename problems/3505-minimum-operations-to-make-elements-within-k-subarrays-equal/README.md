# 3505. Minimum Operations to Make Elements Within K Subarrays Equal

**Difficulty:** $\textcolor{#dc2626}{\textsf{Hard}}$

[Problem on LeetCode](https://leetcode.com/problems/minimum-operations-to-make-elements-within-k-subarrays-equal/)

An operation changes one element by 1. Choose k non-overlapping windows of length x and equalize each at minimum cost.

**Approach:** FenwickTree, DynamicProgramming

- Time: O(n log n + n · k)
- Space: O(n · k)
