function intToRoman(num: number): string {
  const map = new Map()
  map.set(1, "I")
  map.set(5, "V")
  map.set(10, "X")
  map.set(50, "L")
  map.set(100, "C")
  map.set(500, "D")
  map.set(1000, "M")

  let ans = ""
  let rest = num
  let level = 0

  // while (rest > 5) {
  //   rest = Math.floor(rest / 10)
  // }

  return ans
}
