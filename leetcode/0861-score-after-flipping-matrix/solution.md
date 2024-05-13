# Intuition

The primary intuition behind maximizing the score of a binary matrix is based on the value contribution of each bit in a binary number. In a binary number, the leftmost bit (most significant bit,MSB) has the highest value(2 to the power of its position). Therefore, ensuring that this bit is maximized. Across all rows will greatly increase the overall sum when these rows are interpreted as binary numbers.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initial Check:
   - For each row, check if the first bit(MSB) is 0.
   - If the MSB of any row is 0, flip the entire row. This ensures that the highest value bit in every row contributes the maximum possible value.
2. Column Iteration: After ensuring all rows start with 1, examine the remaining columns form the second to the last.
   - For each column, check if the number of 0s exceeds the number of 1s.
   - If flipping a column results in more 1s than 0s, proceed to flip it. This strategy increases the binary value of more rows since each column beyond the first still contributes significantly to the total score.
3. Calculate the Final Score:
   - Convert each row to its decimal equivalent by interpreting is as a binary number.
   - Sum these decimal values to get the total score of the matrix after all optimizations.
