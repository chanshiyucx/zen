function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b)
  let ans

  for (let left = 0; left < nums.length - 2; left++) {
    let middle = left + 1
    let right = nums.length - 1
    while (middle < right) {
      const sum = nums[left] + nums[middle] + nums[right]
      const diff = sum - target
      if (diff === 0) {
        return sum
      }
      if (ans === undefined || Math.abs(diff) < Math.abs(ans - target)) {
        ans = sum
        while (middle < right && nums[middle] === nums[middle + 1]) middle++
        while (middle < right && nums[right] === nums[right - 1]) right--

        const diff1 = nums[left] + nums[middle + 1] + nums[right] - target
        const diff2 = nums[left] + nums[middle] + nums[right - 1] - target

        if (Math.abs(diff1) < Math.abs(diff2)) {
          middle++
        } else {
          right--
        }
      } else if (diff > 0) {
        right--
      } else {
        middle++
      }
    }
  }

  return ans
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([0, 0, 0], 1))
console.log(threeSumClosest([1, 1, 1, 1], 0))
console.log(threeSumClosest([-1000, -5, -5, -5, -5, -5, -5, -1, -1, -1], -14))
