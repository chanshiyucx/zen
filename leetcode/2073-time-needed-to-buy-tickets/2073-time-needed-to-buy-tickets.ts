function timeRequiredToBuy(tickets: number[], k: number): number {
  let ans = 0
  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      ans += Math.min(tickets[i], tickets[k])
    } else {
      ans += Math.min(tickets[i], tickets[k] - 1)
    }
  }

  return ans
}

console.log(timeRequiredToBuy([2, 3, 2], 2))
console.log(timeRequiredToBuy([5, 1, 1, 1], 0))
