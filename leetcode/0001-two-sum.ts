function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i]
    if (map.has(res)) {
      return [map.get(res), i]
    } else {
      map.set(nums[i], i)
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))