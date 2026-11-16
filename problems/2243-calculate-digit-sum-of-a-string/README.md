# 2243. Calculate Digit Sum of a String

**Difficulty:** $\textcolor{#16a34a}{\textsf{Easy}}$

[Problem on LeetCode](https://leetcode.com/problems/calculate-digit-sum-of-a-string/)

Split a digit string into groups of length k, sum each group, and concatenate the sums. Repeat until the length is at most k.

**Approach:** Simulation

- Time: O(n) per round, with few rounds
- Space: O(n)

A Java `String` is immutable, so `s += sum` does not extend the existing text. Each addition allocates a new string and copies everything written so far. Across one round those copies add up to quadratic work, and every group pays for a new object.

`StringBuilder` keeps one mutable buffer and appends into it. The buffer occasionally doubles, so copying over a whole round stays linear, and the finished string is created once, in `toString()`.
