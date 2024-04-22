const prevDigit = (n) => (n === "0" ? "9" : `${Number(n) - 1}`)
const nextDigit = (n) => (n === "9" ? "0" : `${Number(n) + 1}`)
const getNextCombination = (combination: string): string[] => {
  const list = []
  for (let i = 0; i < combination.length; i++) {
    const prefix = combination.slice(0, i)
    const suffix = combination.slice(i + 1)
    list.push(prefix + prevDigit(combination[i]) + suffix)
    list.push(prefix + nextDigit(combination[i]) + suffix)
  }
  return list
}

function openLock(deadends: string[], target: string): number {
  const visited: Set<string> = new Set(deadends)
  if (visited.has("0000")) {
    return -1
  }

  visited.add("0000")
  const queue: [string, number][] = [["0000", 0]]

  while (queue.length) {
    const [combination, step] = queue.shift()
    if (combination === target) {
      return step
    }
    for (const nextCombination of getNextCombination(combination)) {
      if (!visited.has(nextCombination)) {
        queue.push([nextCombination, step + 1])
        visited.add(nextCombination)
      }
    }
  }

  return -1
}

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"))
