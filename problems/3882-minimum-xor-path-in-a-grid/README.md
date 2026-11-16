# 3882. Minimum XOR Path in a Grid

**Difficulty:** $\textcolor{#ca8a04}{\textsf{Medium}}$

[Problem on LeetCode](https://leetcode.com/problems/minimum-xor-path-in-a-grid/)

Move only right or down from the top-left corner to the bottom-right. A path costs the XOR of its cells. Find the minimum.

**Approach:** DynamicProgramming

- Time: O(mn · number of distinct XORs)
- Space: O(mn · number of distinct XORs)
