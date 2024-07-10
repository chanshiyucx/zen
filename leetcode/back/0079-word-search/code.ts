function exist(board: string[][], word: string): boolean {
  const m = board.length
  const n = board[0].length
  if (m * n < word.length) {
    return false
  }

  const visited = new Array(m).fill(false).map((_) => new Array(n).fill(false))
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  const check = (i, j, k) => {
    if (board[i][j] !== word[k]) {
      return false
    } else if (k === word.length - 1) {
      return true
    }

    let result = false
    visited[i][j] = true
    for (const [dx, dy] of directions) {
      const newi = i + dx
      const newj = j + dy
      if (newi >= 0 && newi < m && newj >= 0 && newj < n) {
        if (!visited[newi][newj]) {
          const flag = check(newi, newj, k + 1)
          if (flag) {
            result = true
            break
          }
        }
      }
    }
    visited[i][j] = false
    return result
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const flag = check(i, j, 0)
      if (flag) {
        return true
      }
    }
  }

  return false
}
