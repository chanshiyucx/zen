function makeGood(s: string): string {
  if (s.length <= 1) {
    return s
  }

  let arr = s.split("")
  let pos = 0

  while (pos < arr.length - 1) {
    const beginChar = arr[pos]
    const endChar = arr[pos + 1]
    if (
      beginChar !== endChar &&
      beginChar.toLowerCase() === endChar.toLowerCase()
    ) {
      arr.splice(pos, 2)
      pos = Math.max(pos - 1, 0)
    } else {
      pos += 1
    }
  }
  return arr.join("")
}

console.log(makeGood("leEeetcode"))
console.log(makeGood("abBAcC"))
