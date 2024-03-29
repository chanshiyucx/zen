function countSubarrays(nums: number[], k: number): number {
  const length = nums.length
  if (length < k) {
    return 0
  }

  // 首先需要找到最大元素 max
  let max = nums[0]
  let maxCount = 0
  for (const num of nums) {
    if (num === max) {
      maxCount += 1
    }

    if (num > max) {
      max = num
      maxCount = 0
    }
  }

  if (maxCount < k) {
    return 0
  }

  let ans = 0

  // 找到每个max的索引
  const record = nums.reduce(
    (prev, next, index) => (next === max ? prev.concat(index) : prev),
    []
  )
  console.log(record)

  let temp = []

  for (let i = 0; i < record.length; i++) {
    for (let j = i + k - 1; j < record.length; j++) {
      let left = record[i]
      let right = record[j]
      console.log(left, right)
      while (left >= 0) {
        let sub = [...nums].splice(left, right + 1).join(",")
        if (!temp.includes(sub)) {
          ans += 1
          temp.push(sub)
        }
        left--
      }

      while (right < nums.length) {
        let sub = [...nums].splice(left, right + 1).join(",")
        if (!temp.includes(sub)) {
          ans += 1
          temp.push(sub)
        }
        right++
      }
    }
  }

  return ans
}

// console.log(countSubarrays([1, 3, 2, 3, 3], 2))
// console.log(countSubarrays([1, 4, 2, 1], 3))
console.log(
  countSubarrays(
    [
      61, 23, 38, 23, 56, 40, 82, 56, 82, 82, 82, 70, 8, 69, 8, 7, 19, 14, 58,
      42, 82, 10, 82, 78, 15, 82,
    ],
    2
  )
)
