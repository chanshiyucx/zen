function divide(dividend: number, divisor: number): number {
  const sign = Math.sign(dividend) * Math.sign(divisor)
  let ans = 0
  let a = Math.abs(dividend)
  let b = Math.abs(divisor)
  while (a >= b) {
    let c = 1
    let tb = b
    while (a >= tb + tb) {
      c += c
      tb += tb
    }
    ans += c
    a -= tb
  }
  const quotient = Math.max(-(2 ** 31), Math.min(ans * sign, 2 ** 31 - 1))
  return quotient
}

// function div(a: number, b: number): number {
//   if (a < b) return 0
//   let c = 1
//   let tb = b
//   while (tb + tb <= a) {
//     c += c
//     tb += tb
//   }
//   return c + div(a - b * c, b)
// }

console.log(divide(10, 3))
console.log(divide(7, -3))
console.log(divide(-2147483648, -1))
