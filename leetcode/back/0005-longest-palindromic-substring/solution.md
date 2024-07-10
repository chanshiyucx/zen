# Intuition

We observe that a palindrome mirrors around its center. Therefore, a palindrome can be expanded from its center, and there are only `2n - 1` such centers.

Why there are `2n - 1` but not `n` centers? The reason is the center of a palindrome can be in between two letters. Such palindromes have even number of letters (such as "abba") and its center are between the two 'b's.

# Approach

Below is the step-by-step breakdown of the expand around center approach:

1. Initialization:
   At starting we have ans = s[0] as every single character is a palindrome.
2. Iterate over the string and for every character we will expand around its center:
   - For odd length palindrome, we will consider the current character as the center and expand around it.
   - For even length palindrome, we will consider the current character and the next character as the center and expand around it.
   - Check new substring length after expand, keep track of the maximum substring.
