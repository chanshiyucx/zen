function reverse(x: number): number {
  let str = x.toString()

  let res = 0
  if (x > 0) {
    res = Number(String(x).split("").reverse().join(""))
  } else {
    res = -Number(String(x).split("").slice(1).reverse().join(""))
  }

  if (res > 2 ** 31 - 1 || res < -(2 ** 31)) {
    return 0
  }

  return res
}

console.log(reverse(-123))
