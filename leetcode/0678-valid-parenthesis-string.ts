const findLastIndex = (arr, char) => {
  let index = arr.length - 1
  while (index >= 0) {
    if (arr[index] === char) {
      return index
    }
    index--
  }
  return -1
}

function checkValidString(s: string): boolean {
  const stack = []
  for (const c of s) {
    if (c === "(" || c === "*") {
      stack.push(c)
    } else if (c === ")") {
      if (!stack.length) {
        return false
      } else {
        const index = findLastIndex(stack, "(")
        if (index >= 0) {
          stack.splice(index, 1)
        } else {
          stack.pop()
        }
      }
    }
  }

  let begin = 0
  let end = 0
  while (begin <= stack.length - 1) {
    if (stack[begin] === "(") {
      end = begin + 1
      let flag = 0
      while (end <= stack.length - 1) {
        if (stack[end] === "*") {
          flag = end
          break
        }
        end++
      }
      if (flag > 0) {
        stack.splice(begin, 1, "")
        stack.splice(end, 1, "")
      } else {
        return false
      }
    }
    begin++
  }
  const ans = stack.filter((e) => e === "(").length === 0
  return ans
}

console.log(
  checkValidString(
    "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
  )
)
console.log(
  checkValidString(
    "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
  )
)
