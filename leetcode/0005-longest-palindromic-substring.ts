function longestPalindrome(s: string): string {
  const length = s.length
  if (length <= 1) {
    return s
  }

  let begin = 0
  let maxLength = 1

  // dp[i][j] represents whether from position i to position j is a palindrome string, default is false
  const dp = new Array(length)
    .fill(false)
    .map((_) => new Array(length).fill(false))

  for (let len = 2; len <= length; len++) {
    for (let i = 0; i < length; i++) {
      dp[i][i] = true
      const j = i + len - 1

      if (j >= length) {
        break
      }

      if (s[i] === s[j]) {
        if (j - i < 3 || dp[i + 1][j - 1]) {
          // dp[i][j] = dp[i+1][j-1] && i === j
          dp[i][j] = true

          // Record the current starting index and length
          if (len > maxLength) {
            begin = i
            maxLength = len
          }
        }
      }
    }
  }

  return s.substr(begin, maxLength)
}

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("bb"))
