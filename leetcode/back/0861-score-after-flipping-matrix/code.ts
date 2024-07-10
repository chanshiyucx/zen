function matrixScore(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  let sum = m * (1 << (n - 1))

  for (let j = 1; j < n; j++) {
    let count = 0
    for (let i = 0; i < m; i++) {
      if (grid[i][0] === 1) {
        count += grid[i][j]
      } else {
        count += 1 ^ grid[i][j]
      }
    }
    sum += Math.max(count, m - count) * (1 << (n - j - 1))
  }

  return sum
}

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ])
)

console.log(matrixScore([[0]]))
