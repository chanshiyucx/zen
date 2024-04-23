function openLock(deadends: string[], target: string): number {
  let ans: number[] = []
  const dfs = (list: number[], count) => {
    if (list.every((e) => e === 0)) {
      ans.push(count)
      return
    }
  }

  const nums = deadends.map((e) => Number(e))
  dfs(nums, 0)

  return ans.length ? Math.min(...ans) : -1
}
