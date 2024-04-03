function intToRoman(num: number): string {
  const map = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ] as [number, string][]

  let ans = ""
  let rest = num
  let val = 0
  for (const [n, c] of map) {
    val = Math.floor(rest / n)
    ans += c.repeat(val)
    rest = rest % n
    if (rest === 0) {
      break
    }
  }

  return ans
}

console.log(intToRoman(1994))
