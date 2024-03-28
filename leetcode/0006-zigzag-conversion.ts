function convert(s: string, numRows: number): string {
  if (numRows <= 1) {
    return s
  }

  const row = numRows
  const dp = new Array(row).fill("").map((_) => [])
  let i = 0
  let reverse = false

  for (const char of s) {
    dp[i].push(char)

    if (reverse) {
      i--
    } else {
      i++
    }

    if (i === row - 1) {
      reverse = true
    }
    if (i === 0) {
      reverse = false
    }
  }

  const ans = dp.reduce((prev, next) => prev + next.join(""), "")
  return ans
}

console.log(convert("PAYPALISHIRING", 3))
