function maximumSafenessFactor(grid: number[][]): number {
  const n = grid.length
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const dis = Array.from({ length: n }, () => Array.from({ length: n }))
  let queue = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j])
        dis[i][j] = 0
      } else {
        dis[i][j] = -1
      }
    }
  }

  const group = [queue]
  while (queue.length) {
    const nextQueue = []
    for (const [x, y] of queue) {
      for (const [dx, dy] of directions) {
        const nx = x + dx
        const ny = y + dy
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && dis[nx][ny] === -1) {
          dis[nx][ny] = group.length
          nextQueue.push([nx, ny])
        }
      }
    }

    queue = nextQueue
    group.push(queue)
  }

  const fa = Array.from({ length: n * n }, (_, i) => i)
  const find = (x) => {
    if (fa[x] !== x) fa[x] = find(fa[x])
    return fa[x]
  }

  for (let i = group.length - 1; i >= 0; i--) {
    const q = group[i]
    for (const [x, y] of q) {
      for (const [dx, dy] of directions) {
        const nx = x + dx
        const ny = x + dy
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          dis[nx][ny] >= dis[x][y]
        ) {
          fa[find(nx * n + ny)] = find(x * n + y)
        }
      }

      if (find(0) === find(n * n - 1)) {
        return i
      }
    }
  }

  return 0
}

console.log(
  maximumSafenessFactor([
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 0],
  ])
)
