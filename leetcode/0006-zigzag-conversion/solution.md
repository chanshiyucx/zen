# Intuition

We are making strings by osculating from the top to the bottom and extending them with consecutive string element.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialization:
   - Initialize a string array called `record` to store each row.
   - Initialize a integer called `curRow` to store the current row.
   - Initialize a boolean flag called `ascending` to know in which direction we are ascending or descending.
2. Iterate through the string:
   - Update `curRow` base on the direction ascending or descending.
   - Concatenate character into `record` base on `curRow`.
   - Update `ascending`. If the row is 0 then we will move downward, if the row is 1 value less than the number of rows we will move upward.
3. After the iteration, concatenate all the string using join and return it as answer.
