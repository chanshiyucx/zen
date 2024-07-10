function lowerBound(nums: number[], target: number): number {
  let left = -1
  let right = nums.length
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] >= target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return right
}

function maximumCount(nums: number[]): number {
  const neg = lowerBound(nums, 0)
  const pos = nums.length - lowerBound(nums, 1)
  return Math.max(neg, pos)
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3]))
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]))
console.log(maximumCount([5, 20, 66, 1314]))
