function convert(s: string, numRows: number): string {
  if (numRows <= 1) {
    return s
  }

  const dp: string[] = new Array(numRows).fill("")
  let curRow = -1
  let ascending = true

  for (const char of s) {
    curRow += ascending ? 1 : -1
    dp[curRow] += char

    if (curRow === numRows - 1) {
      ascending = false
    } else if (curRow === 0) {
      ascending = true
    }
  }

  return dp.join("")
}

console.log(convert("PAYPALISHIRING", 3))
