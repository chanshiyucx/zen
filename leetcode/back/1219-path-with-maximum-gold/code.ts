function getMaximumGold(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const visited = Array.from({ length: m }, () =>
    Array.from({ length: n }).fill(false)
  )
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  const dfs = (i, j) => {
    if (grid[i][j] === 0) {
      return 0
    }
    let sum = grid[i][j]
    visited[i][j] = true
    for (const [dx, dy] of directions) {
      const newX = i + dx
      const newY = j + dy
      if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
        if (!visited[newX][newY]) {
          sum = Math.max(sum, grid[i][j] + dfs(newX, newY))
        }
      }
    }
    visited[i][j] = false
    return sum
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(i, j))
    }
  }
  return ans
}

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
)

console.log(
  getMaximumGold([
    [1, 0, 7],
    [2, 0, 6],
    [3, 4, 5],
    [0, 3, 0],
    [9, 0, 20],
  ])
)
