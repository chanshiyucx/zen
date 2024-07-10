# Intuition

We are making those strings by oscilating from the top to the bottom and extending them with consecutive string element.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialization:
   - Create a string array to store each row.
   - Create a flag to know in which direction we are ascending or decending.
2. Iterate over the string:
   - For every character we will concatenate the letter base on the direction ascending or decending the rowTracker.
   - If the row is 0 then we will now go down, if the row is 1 value less than the number of rows we will go up.
   - Finally, concatenate all the string using join.
