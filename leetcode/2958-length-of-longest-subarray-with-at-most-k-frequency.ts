function maxSubarrayLength(nums: number[], k: number): number {
  let ans = 0
  let left = 0
  let right = 0
  let freq = {}

  while (right < nums.length) {
    const num = nums[right]
    freq[num] = (freq[num] || 0) + 1
    while (freq[num] > k) {
      freq[nums[left]]--
      left++
    }
    ans = Math.max(ans, right - left + 1)
    right++
  }

  return ans
}

console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2))

console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1))

console.log(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4))
