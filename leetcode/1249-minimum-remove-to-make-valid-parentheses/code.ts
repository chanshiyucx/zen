function minRemoveToMakeValid(s: string): string {
  const stack = []
  const result = s.split("")
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "(") {
      stack.push(i)
    } else if (result[i] === ")") {
      if (stack.length) {
        stack.pop()
      } else {
        result.splice(i, 1, "")
      }
    }
  }

  while (stack.length) {
    result.splice(stack.pop(), 1, "")
  }

  return result.join("")
}

console.log(minRemoveToMakeValid("lee(t(c)o)de"))
console.log(minRemoveToMakeValid("a)b(c)d"))
console.log(minRemoveToMakeValid("))(("))
