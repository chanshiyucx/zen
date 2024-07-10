# Intuition

We can see the Longest Ideal Subsequence at any index `i` is dependent on the Longest Ideal Subsequence of previous index.

For example, the Longest Ideal Subsequence at index `i` is the maximum of the Longest Ideal Subsequence of the previous index that are within the range of `[i-k, i+k]`.

So we can think of using dynamic programming to solve this problem.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialization:
   - Initialize an array `dp` of size 26 to store the length of the longest ideal string ending at each character.
2. Iterate over the string:
   - For each character, calculate the index in the array `dp` based on its ASCII value and subtract 'a' (97) to get the index from 0 to 25.
   - Determine the range of possible previous characters based on the value of `k`.
   - Iterate through this range and find the maximum value of `dp`.
   - Update `dp` at the current character's index with the maximum value found plus 1.
3. After processing all characters, find the maximum value in the `dp` array, which represents the length of the longest ideal string.
