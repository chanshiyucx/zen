function deckRevealedIncreasing(deck: number[]): number[] {
  let ans = []
  const order = deck.sort((a, b) => a - b)
  while (order.length) {
    if (ans.length) {
      ans.unshift(ans.pop())
    }
    ans.unshift(order.pop())
  }

  return ans
}

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]))
