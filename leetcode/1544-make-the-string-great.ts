function makeGood(s: string): string {
  const stack = []

  for (const c of s) {
    const peek = stack.at(-1)
    if (peek && peek !== c && peek.toLowerCase() === c.toLowerCase()) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  return stack.join("")
}

console.log(makeGood("leEeetcode"))
console.log(makeGood("abBAcC"))
