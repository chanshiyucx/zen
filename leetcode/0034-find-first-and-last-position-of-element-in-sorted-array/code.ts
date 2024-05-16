function searchRange(nums: number[], target: number): number[] {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = (left + right) >> 1
    if (nums[mid] === target) {
      // 进入捕获区间
    }

    if (nums[mid] <= target) {
      right = mid - 1
    } else {
      left = mid
    }
  }

  return [-1, -1]
}
