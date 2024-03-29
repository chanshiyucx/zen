function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false
  }

  return String(x) === Array.from(String(x)).reverse().join("")
}

console.log(isPalindrome(121))
