function reverse(x: number): number {
  const res =
    Number(String(Math.abs(x)).split("").reverse().join("")) * Math.sign(x)

  if (res > 2 ** 31 - 1 || res < -(2 ** 31)) {
    return 0
  }

  return res
}

console.log(reverse(-123))
