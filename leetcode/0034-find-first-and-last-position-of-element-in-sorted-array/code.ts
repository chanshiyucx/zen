function lowerBound(nums: number[], target: number): number {
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
  return left
}

function searchRange(nums: number[], target: number): number[] {
  const start = lowerBound(nums, target)
  if (start === nums.length || nums[start] !== target) {
    return [-1, -1]
  }
  const end = lowerBound(nums, target + 1) - 1
  return [start, end]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
