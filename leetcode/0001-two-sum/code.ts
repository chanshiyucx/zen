function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (map.has(diff)) {
      return [map.get(diff), i]
    } else {
      map.set(nums[i], i)
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
