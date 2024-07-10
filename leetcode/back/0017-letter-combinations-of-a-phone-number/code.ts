function letterCombinations(digits: string): string[] {
  const map = new Map()
  map.set("2", ["a", "b", "c"])
  map.set("3", ["d", "e", "f"])
  map.set("4", ["g", "h", "i"])
  map.set("5", ["j", "k", "l"])
  map.set("6", ["m", "n", "o"])
  map.set("7", ["p", "q", "r", "s"])
  map.set("8", ["t", "u", "v"])
  map.set("9", ["w", "x", "y", "z"])

  let ans = []
  for (const digit of digits) {
    const chars = map.get(digit)
    if (!ans.length) {
      ans.push(...chars)
    } else {
      let tmp = []
      for (const c of chars) {
        for (const a of ans) {
          tmp.push(a + c)
        }
      }
      ans = tmp
    }
  }

  return ans
}

console.log(letterCombinations("23"))
