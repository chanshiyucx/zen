function myAtoi(s: string): number {
  let ans = 0
  const match = s.match(/^\s*([\-|\+]?)(\d+)/)
  if (match) {
    ans = Number(match[2])
    if (match[1] === "-") {
      ans = ans * -1
    }
    ans = Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, ans))
  }

  return ans
}

console.log(myAtoi("-42 ad"))
console.log(myAtoi("-91283472332"))
