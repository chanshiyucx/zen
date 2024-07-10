function lowerBound(nums: number[], target: number): number {
  let left = -1
  let right = nums.length
  while (left + 1 < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] > target) {
      right = mid
    } else {
      left = mid
    }
  }
  return right
}

function answerQueries(nums: number[], queries: number[]): number[] {
  nums
    .sort((a, b) => a - b)
    .reduce((prev, current, index) => {
      nums[index] = prev + current
      return nums[index]
    }, 0)

  const answer = queries.map((query) => lowerBound(nums, query))
  return answer
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]))
console.log(answerQueries([2, 3, 4, 5], [1]))
