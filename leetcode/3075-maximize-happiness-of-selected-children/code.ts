function maximumHappinessSum(happiness: number[], k: number): number {
  happiness.sort((a, b) => a - b)

  let ans = 0
  let turn = 0
  while (turn < k) {
    const last = happiness.pop()
    ans += Math.max(last - turn, 0)
    turn++
  }

  return ans
}

console.log(maximumHappinessSum([1, 2, 3], 2))
console.log(maximumHappinessSum([1, 1, 1, 1], 2))
console.log(maximumHappinessSum([2, 3, 4, 5], 1))
