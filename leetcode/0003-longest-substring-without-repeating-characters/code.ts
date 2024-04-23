function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) {
    return s.length
  }

  let ans = 1
  const record = []

  for (const char of s) {
    const index = record.indexOf(char)
    if (index >= 0) {
      record.splice(0, index + 1)
    }
    record.push(char)
    ans = Math.max(ans, record.length)
  }

  return ans
}

console.log(lengthOfLongestSubstring("au"))
console.log(lengthOfLongestSubstring("abcabcbb"))
