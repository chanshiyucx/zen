function numIslands(grid: string[][]): number {
  let ans = 0

  const dfs = (m, n) => {
    if (m < 0 || m > grid.length - 1 || n < 0 || n > grid[0].length - 1) return
    if (grid[m][n] === "1") {
      grid[m][n] = "0"
      dfs(m - 1, n)
      dfs(m + 1, n)
      dfs(m, n - 1)
      dfs(m, n + 1)
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        ans += 1
        dfs(i, j)
      }
    }
  }

  return ans
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
)

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
)
