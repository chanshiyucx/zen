function generateParenthesis(n: number): string[] {
  const ans = []

  const dfs = (l, r, s) => {
    if (l === 0 && r === 0) {
      ans.push(s)
    }
    if (l > 0) {
      dfs(l - 1, r, s + "(")
    }
    if (l < r) {
      dfs(l, r - 1, s + ")")
    }
  }

  dfs(n, n, "")

  return ans
}

console.log(generateParenthesis(3))

/**
 * 

n = 1  ["()"]
n = 2 ["(())", "()()"]
n = 3 ["((()))","(()())","(())()","()(())","()()()"]

 * 
 */
