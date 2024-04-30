function lengthOfLastWord(s: string): number {
  let ans = 0
  let right = s.length - 1
  while (right >= 0) {
    if (s[right] !== " ") {
      ans++
    } else if (ans > 0) {
      break
    }
    right--
  }

  return ans
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
