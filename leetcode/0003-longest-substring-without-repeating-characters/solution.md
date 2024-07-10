# Intuition

The problem asks us to find the longest substring without repeating characters.

We can solve the problem by maintaining a dynamic sliding window approach.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialization:
   - Initialize an integer called `ans` to store the problem answer.
   - Initialize an integer array called `record` to store the characters.
2. Iterate through the string. For each character, check if it already exists in the record.
   - If the character already exists, remove the part of the `record` before the character.
   - Push the character to the `record`.
   - Update `ans` to the maximum of the original value and the length of the `record`.
3. After the iteration, we return `ans`.
