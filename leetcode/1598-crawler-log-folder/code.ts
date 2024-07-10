function minOperations(logs: string[]): number {
  const stack: string[] = []
  for (const log of logs) {
    if (log === "./") {
      continue
    } else if (log === "../") {
      stack.pop()
    } else {
      stack.push(log)
    }
  }
  return stack.length
}

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]))
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]))
