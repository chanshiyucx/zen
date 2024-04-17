function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b)
  let ans = 0
  let diff = Number.MAX_SAFE_INTEGER

  for (let left = 0; left < nums.length - 2; left++) {
    let middle = left + 1
    let right = nums.length - 1
    while (middle < right) {
      const sum = nums[left] + nums[middle] + nums[right]
      const tmp = Math.abs(sum - target)
      if (tmp === 0) {
        return sum
      }
      if (tmp < diff) {
        ans = sum
        diff = tmp
      } else if (sum > target) {
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
