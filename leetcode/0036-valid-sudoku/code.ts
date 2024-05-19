function isValidSudoku(board: string[][]): boolean {
  const rows: Set<string>[] = []
  const cols: Set<string>[] = []
  const boxs: Set<string>[] = []
  for (let i = 0; i < 9; i++) {
    rows.push(new Set())
    cols.push(new Set())
    boxs.push(new Set())
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j]
      if (c === ".") continue
      const k = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      if (rows[i].has(c) || cols[j].has(c) || boxs[k].has(c)) {
        return false
      }
      rows[i].add(c)
      cols[j].add(c)
      boxs[k].add(c)
    }
  }
  return true
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
)
