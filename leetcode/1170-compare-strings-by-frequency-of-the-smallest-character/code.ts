function f(str: string): number {
  let count = 0
  let char = ""
  for (const c of str) {
    if (char === "" || c < char) {
      char = c
      count = 1
    } else if (c === char) {
      count += 1
    }
  }
  return count
}

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
  return nums.length - right
}

function numSmallerByFrequency(queries: string[], words: string[]): number[] {
  const wordsNum = words.map((e) => f(e)).sort((a, b) => a - b)
  const queriesNum = queries.map((e) => f(e))
  const answer = queriesNum.map((query) => lowerBound(wordsNum, query))
  return answer
}

// console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]))
// console.log(numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]))
console.log(
  numSmallerByFrequency(
    [
      "bba",
      "abaaaaaa",
      "aaaaaa",
      "bbabbabaab",
      "aba",
      "aa",
      "baab",
      "bbbbbb",
      "aab",
      "bbabbaabb",
    ],
    [
      "aaabbb",
      "aab",
      "babbab",
      "babbbb",
      "b",
      "bbbbbbbbab",
      "a",
      "bbbbbbbbbb",
      "baaabbaab",
      "aa",
    ]
  )
)
