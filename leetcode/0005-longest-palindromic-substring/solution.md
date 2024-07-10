# Intuition

We observe that a palindrome mirrors around its center. Therefore, a palindrome can be expanded from its center. The center of a palindrome can be in between one letter or two letters.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialization: Initialize a string called `ans` to store the the longest palindromic.
2. Iterate over the string and for every character we will expand around its center:
   - For odd length palindrome, we will consider the current character as the center and expand around it.
   - For even length palindrome, we will consider the current character and the next character as the center and expand around it.
   - Check new substring length after expand, keep track of the maximum substring.
3. After the iteration, we return `ans`.
