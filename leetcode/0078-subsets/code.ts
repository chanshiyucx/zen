function subsets(nums: number[]): number[][] {
  const ans = [[]]

  const dfs = (index: number) => {
    if (index >= nums.length) return
    const next = []
    for (const item of ans) {
      next.push([...item, nums[index]])
    }
    ans.push(...next)
    dfs(index + 1)
  }

  dfs(0)

  return ans
}

console.log(subsets([1, 2, 3]))
