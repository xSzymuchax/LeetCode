# 1882. Process Tasks Using Servers

**Difficulty:** $\textcolor{#ca8a04}{\textsf{Medium}}$

[Problem on LeetCode](https://leetcode.com/problems/process-tasks-using-servers/)

Servers have weights. Task i takes `tasks[i]` time and cannot start before time i. The free server with the smallest weight, then the smallest index, takes it.

**Approach:** Heap

- Time: O(m log n)
- Space: O(n)
