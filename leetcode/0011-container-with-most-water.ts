function maxArea(height: number[]): number {
  let ans = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    if (height[left] < height[right]) {
      ans = Math.max(ans, height[left] * (right - left))
      left++
    } else {
      ans = Math.max(ans, height[right] * (right - left))
      right--
    }
  }

  return ans
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
