function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source === destination) return true
  if (edges.length === 0) return true

  const queue = [source]
  const visited = new Set()

  while (queue.length > 0) {
    const c = queue.pop()
    visited.add(c)
    for (const edge of edges) {
      if (edge[0] === c && !visited.has(edge[1])) {
        if (edge[1] === destination) return true
        queue.push(edge[1])
      }

      if (edge[1] === c && !visited.has(edge[0])) {
        if (edge[0] === destination) return true
        queue.push(edge[0])
      }
    }
  }

  return false
}

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
)

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
)
