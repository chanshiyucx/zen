function findFarmland(land: number[][]): number[][] {
  const ans = []

  const dfs = (r1, c1) => {
    let r2 = r1
    let c2 = c1

    while (r2 < land.length && land[r2][c1] === 1) r2++
    while (c2 < land[0].length && land[r1][c2] === 1) c2++

    for (let i = r1; i <= r2 - 1; i++) {
      for (let j = c1; j <= c2 - 1; j++) {
        land[i][j] = 0
      }
    }

    return [r1, c1, r2 - 1, c2 - 1]
  }

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++) {
      if (land[i][j] === 1) {
        ans.push(dfs(i, j))
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
