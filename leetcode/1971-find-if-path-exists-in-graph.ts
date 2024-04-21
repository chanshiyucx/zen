function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source === destination) return true
  if (edges.length === 0) return false

  const map = new Map<number, Set<number>>()
  const visited = new Set<number>()

  for (const [src, dst] of edges) {
    if (!map.has(src)) map.set(src, new Set())
    if (!map.has(dst)) map.set(dst, new Set())
    map.get(src).add(dst)
    map.get(dst).add(src)
  }

  const dfs = (vertex) => {
    if (vertex === destination) return true
    if (visited.has(vertex)) return false
    visited.add(vertex)
    for (const next of map.get(vertex)) {
      if (dfs(next)) {
        return true
      }
    }
    return false
  }

  return dfs(source)
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
