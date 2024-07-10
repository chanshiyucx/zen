function maximumHappinessSum(happiness: number[], k: number): number {
  happiness.sort((a, b) => a - b)

  let happinessValue = 0
  let selectedChildren = 0
  while (selectedChildren < k) {
    const last = happiness.pop() - selectedChildren
    if (last <= 0) {
      break
    }
    happinessValue += last
    selectedChildren++
  }

  return happinessValue
}

console.log(maximumHappinessSum([1, 2, 3], 2))
console.log(maximumHappinessSum([1, 1, 1, 1], 2))
console.log(maximumHappinessSum([2, 3, 4, 5], 1))
