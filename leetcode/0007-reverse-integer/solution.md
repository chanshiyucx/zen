# Intuition

The problem asks us to reverse the digits of a given number while handling possible overflow or underflow that might occur due to the limited range of 32-bit signed integers.

The intuition is to extract the digits from the number one by one, starting with the least significant digit, and construct the reversed number. By continually multiplying the current result by 10 and adding the new digit, the digits are effectively shifted to the left, building the reversed number step by step.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialization: Initialize a integer called `res` to store the reversed number.
2. Start a loop. Continue processing while there are digits left in x.
   - Extract the last digit using `x % 10`.
   - Multiply the current result `res` by 10 and add the last digit of x.
   - Remove the last digit from x by performing integer division by 10.
   - Check if the current result will cause overflow or underflow. If true, return 0.
3. Finally, return the reversed number stored in `res`.
