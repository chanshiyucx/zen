function checkValidString(s: string): boolean {
  let leftMax = 0
  let leftMin = 0
  for (const c of s) {
    switch (c) {
      case "(":
        leftMax++
        leftMin++
        break
      case ")":
        leftMax--
        leftMin = Math.max(leftMin - 1, 0)
        if (leftMax < 0) {
          return false
        }
        break
      case "*":
        leftMax++
        leftMin = Math.max(leftMin - 1, 0)
        break
    }
  }
  return leftMin === 0
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
