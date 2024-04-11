function removeKdigits(num: string, k: number): string {
  if (k === num.length) {
    return "0"
  }

  const arr = num.split("").map((e) => Number(e))
  let left = 0
  while (k > 0) {
    let right = left + 1
    while (left < right) {
      if (arr[left] > arr[right]) {
        arr.splice(left, 1)
        if (left > 0) {
          left--
        }
        break
      } else if (right === arr.length - 1) {
        arr.splice(right, 1)
        if (left > 0) {
          left--
        }
        break
      } else {
        left = right
        right += 1
      }
    }
    k--
  }

  while (arr[0] === 0 && arr.length > 1) {
    arr.splice(0, 1)
  }

  return arr.join("")
}

console.log(removeKdigits("1432219", 3))
console.log(removeKdigits("10200", 1))
console.log(removeKdigits("10001", 1))
console.log(removeKdigits("112", 1))
