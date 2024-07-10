function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) {
    return 0
  }

  let ans = 0
  let product = 1
  let left = 0

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right]
    while (product >= k) {
      product /= nums[left]
      left++
    }

    ans += right - left + 1
  }

  return ans
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))

console.log(
  numSubarrayProductLessThanK(
    [10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3],
    19
  )
)
