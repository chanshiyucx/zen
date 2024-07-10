# Intuition

The problem asks us to convert a string to a 32-bit signed integer. We can solve the problem using regex.

# Approach

Below is the step-by-step of the approach:

1. Initialization: Initialize a integer called `ans` to store the result.
2. Using Regex to match sign and digits with two group. Here's the explanation of the regex `/^\s*([-+]?)(\d+)/`:
   - `^\s*`: Matches the beginning of the string followed by zero or more whitespace characters.
   - `([+-]?)`: Matches an optional `+` or `-` sign.
   - `(\d+)`: Matches one or more consecutive digits.
3. Then turning the string match we've reach into integer. Check if the result is overflow or underflow. We should keep the result in range 32-bit signed integer.
4. Finally, we return the `ans`.
