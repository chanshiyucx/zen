function threeSum(nums: number[], target: number, start: number): number[][] {
  const ans = []

  for (let left = start; left < nums.length - 2; left++) {
    if (left > start && nums[left] === nums[left - 1]) continue
    let middle = left + 1
    let right = nums.length - 1
    while (middle < right) {
      const sum = nums[left] + nums[middle] + nums[right]
      if (sum === target) {
        ans.push([nums[left], nums[middle], nums[right]])
        while (middle < right && nums[middle] === nums[middle + 1]) middle++
        while (middle < right && nums[right] === nums[right - 1]) right--
        middle++
        right--
      } else if (sum > target) {
        right--
      } else {
        middle++
      }
    }
  }

  return ans
}

function fourSum(nums: number[], target: number): number[][] {
  nums = nums.sort((a, b) => a - b)
  const ans = []
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue
    // 这里其实就是3sum
    const list = threeSum(nums, target - nums[i], i + 1)
    list.forEach((e) => {
      ans.push([nums[i], ...e])
    })
  }

  return ans
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([2, 2, 2, 2], 8))
