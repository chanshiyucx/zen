function minOperations(nums: number[], k: number): number {
  let finalXor = 0
  // XOR of all integers in the array.
  for (let n of nums) {
    finalXor = finalXor ^ n
  }

  let count = 0
  // Keep iterating until both k and finalXor becomes zero.
  while (k > 0 || finalXor > 0) {
    // k % 2 returns the rightmost bit in k,
    // finalXor % 2 returns the rightmost bit in finalXor.
    // Increment counter, if the bits don't match.
    if (k % 2 != finalXor % 2) {
      count++
    }

    // Remove the last bit from both integers.
    k /= 2
    finalXor /= 2
  }

  return count
}

console.log(minOperations([2, 1, 3, 4], 1))
