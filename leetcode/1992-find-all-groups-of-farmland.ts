function findFarmland(land: number[][]): number[][] {
  const ans = []
  let temp = []

  const dfs = (r1, c1, r2, c2) => {
    if (r2 < 0 || r2 >= land.length || c2 < 0 || c2 >= land[0].length) return

    if (land[r2][c2] === 1) {
      land[r2][c2] = 0
      if (r2 > temp[2] || c2 > temp[3]) {
        temp[2] = r2
        temp[3] = c2
      }

      dfs(r1, c1, r2 + 1, c2)
      dfs(r1, c1, r2, c2 + 1)
    }
  }

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      if (land[i][j] === 1) {
        temp = [i, j, i, j]
        dfs(i, j, i, j)
        ans.push(temp)
      }
    }
  }

  return ans
}

console.log(
  findFarmland([
    [1, 0, 0],
    [0, 1, 1],
    [0, 1, 1],
  ])
)
