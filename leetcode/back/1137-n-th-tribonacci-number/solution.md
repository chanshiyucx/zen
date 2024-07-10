# Intuition

We use iterative approach to compute the Tribonacci numbers.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialize a array called `dp` to store the Tribonacci numbers.
2. Store base cases to `dp`:
   - If `n === 0`, return 0.
   - If `n === 1` or `n === 2`, return 1.
3. Fill in the `dp` iteratively from `dp[3]` up to `dp[n]` using the recurrence relation:
   - `dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]` for `i >= 3`.
4. Return `dp[n]`, which is the N-th Tribonacci number.
