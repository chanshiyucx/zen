function nextPermutation(nums: number[]): void {
  const length = nums.length
  if (length <= 1) {
    return
  }
  let right = length - 1
  let left = length - 2

  while (left >= 0) {
    if (nums[left] < nums[right]) {
      break
    }
    right--
    left--
  }

  let pos = length - 1
  while (pos >= right) {
    if (nums[left] < nums[pos]) {
      break
    }
    pos--
  }

  ;[nums[left], nums[pos]] = [nums[pos], nums[left]]

  for (let i = right, j = length - 1; i < j; i++, j--) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
}

nextPermutation([1, 2, 3])

/**
[1,2,3] => [1,3,2]
[2,3,1] => [3,1,2]
[3,2,1] => [1,2,3]

[2,1,3] => [2,3,1]
[1,3,2] => [2,1,3]
*/

/**
[1,2,3,4]
[1,2,4,3]
[1,3,2,4]
[1,3,4,2]
[1,4,2,3]
[1,4,3,2]

[2,4,1,3] 
[2,4,3,1] =====
[3,1,2,4]
[3,1,4,2]
[3,2,1,4] 
[3,2,4,1]
 */
