function minOperations(nums: number[], k: number): number {
  for (const num of nums) {
    k ^= num
  }

  let ans = 0
  while (k > 0) {
    ans += k & 1
    k = k >> 1
  }

  return ans
}

console.log(minOperations([2, 1, 3, 4], 1)) // 2
