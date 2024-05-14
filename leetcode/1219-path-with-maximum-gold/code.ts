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

  let ans = 0

  // 搜索到i，j位置，能得到的总金币，可能有多种情况??
  const find = (i, j, sum) => {
    if (grid[i][j] === 0) {
      return
    }
    sum += grid[i][j]

    if (sum > ans) {
      ans = sum
    }

    visited[i][j] = true
    for (const [dx, dy] of directions) {
      const newX = i + dx
      const newY = j + dy
      if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
        if (visited[newX][newY] === false) {
          find(newX, newY, sum)
        }
      }
    }
    visited[i][j] = false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      find(i, j, 0)
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
