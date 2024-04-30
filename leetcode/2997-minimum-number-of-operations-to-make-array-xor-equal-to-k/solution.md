# Intuition

The problem asks to calculate the number of all substrings in which at most one letter appears an odd number of times in the string, so there will be two cases:

- All letters in the substring have an even number of occurrences.
- The substring has only one letter with an odd number of occurrences.

We can use prefix XOR technique to solved the problem.

- For each character in the string, calculate the prefix XOR up to that character.
- For each prefix XOR value encountered, store the count of its occurrences.
- For each prefix XOR value, count the substrings where there is at most one character whose frequency is odd.

# Approach

1. Initialization:
   - Initialize an array count of size 2^10 to store the count of each prefix XOR value encountered.
   - Initialize `ans` to 0 to store the final count of wonderful substrings.
   - Initialize `xor` to 0 to store the prefix XOR value.
2. Iterate over the word:
   - For each character, calculate the index of the character based on its ASCII value and subtract 'a' (97) to get the index from 0 to 9.
   - Update the `xor` by XOR-ing it with the bit representing the current character.
   - Increment `ans` by the count of the current `xor` value stored in the count array.
   - Increment the count of the current `xor` value in the count array.
3. Return ans:
   - Return the final `ans`, which represents the number of wonderful substrings.
