function countSubarrays(nums: number[], k: number): number {
  const length = nums.length
  if (length < k) {
    return 0
  }
  const max = Math.max(...nums)

  let ans = 0
  let left = 0
  let right = 0
  let count = 0

  while (right < nums.length || left > right) {
    if (nums[right] === max) {
      count++
    }

    while (count >= k) {
      if (nums[left] === max) {
        count--
      }
      ans += nums.length - right
      left++
    }

    right++
  }

  return ans
}

// console.log(countSubarrays([1, 3, 2, 3, 3], 2))
// console.log(countSubarrays([1, 4, 2, 1], 3))
console.log(
  countSubarrays(
    [
      61, 23, 38, 23, 56, 40, 82, 56, 82, 82, 82, 70, 8, 69, 8, 7, 19, 14, 58,
      42, 82, 10, 82, 78, 15, 82,
    ],
    2
  )
)
