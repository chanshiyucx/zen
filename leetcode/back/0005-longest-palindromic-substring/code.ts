function expand(s: string, left: number, right: number): string {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return s.substring(left + 1, right)
}

function longestPalindrome(s: string): string {
  let ans = ""
  for (let i = 0; i < s.length; i++) {
    const odd = expand(s, i, i)
    const even = expand(s, i, i + 1)
    if (odd.length > ans.length) {
      ans = odd
    }
    if (even.length > ans.length) {
      ans = even
    }
  }

  return ans
}

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("bb"))
