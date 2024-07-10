function removeKdigits(num: string, k: number): string {
  const stack = []
  for (const n of num) {
    const v = Number(n)
    while (stack.length && k > 0 && stack[stack.length - 1] > v) {
      stack.pop()
      k--
    }
    stack.push(v)
  }

  if (k > 0) {
    stack.splice(stack.length - k, k)
  }

  while (stack[0] === 0 && stack.length > 1) {
    stack.splice(0, 1)
  }

  if (!stack.length) {
    return "0"
  }

  return stack.join("")
}

console.log(removeKdigits("1234567890", 9))
console.log(removeKdigits("10200", 1))
console.log(removeKdigits("10001", 1))
console.log(removeKdigits("112", 1))
