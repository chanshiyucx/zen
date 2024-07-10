function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  if (left === nums.length || nums[left] !== target) {
    return -1
  }

  return left
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 2))
