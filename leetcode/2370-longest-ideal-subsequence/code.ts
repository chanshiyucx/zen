function longestIdealString(s: string, k: number): number {
  const dp: number[] = new Array(26).fill(0)
  const start = "a".codePointAt(0)

  for (const c of s) {
    const cur = c.codePointAt(0) - start
    const begin = Math.max(0, cur - k)
    const end = Math.min(25, cur + k)
    let tmp = 0
    for (let i = begin; i <= end; i++) {
      tmp = Math.max(tmp, dp[i])
    }
    dp[cur] = tmp + 1
  }

  return Math.max(...dp)
}

console.log(longestIdealString("acfgbd", 2))
