function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false
  }
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ])
  const stack = []
  for (const c of s) {
    if (map.has(c)) {
      if (map.get(c) !== stack.pop()) {
        return false
      }
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0
}

console.log(isValid("()["))
