function longestCommonPrefix(strs: string[]): string {
  let left = 0
  while (left < strs[0].length) {
    const isSame = strs.every((str) => str[left] === strs[0][left])
    if (!isSame) {
      break
    }
    left++
  }

  return strs[0].slice(0, left)
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
