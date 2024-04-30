# Intuition

Let `s` represent the XOR sum of nums. Thus `s === k` is equivalent to `s ⊕ k = 0`, where `⊕` denotes the XOR operation.

Let `x = s ⊕ k`. If we flip a certain bit of any number in nums, the corresponding bit in `x` will also be flipped. To make `x = 0`, we need to flip every 1 bit in `x`. Therefore, the number of 1 bits in `x` represents the number of operations required.

# Approach
