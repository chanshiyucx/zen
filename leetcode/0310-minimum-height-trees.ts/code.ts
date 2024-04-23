function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) {
    return [0]
  }

  const degree: number[] = new Array(n).fill(0)
  const graph: number[][] = Array.from({ length: n }, () => [])
  for (const [parent, child] of edges) {
    degree[parent]++
    degree[child]++
    graph[parent].push(child)
    graph[child].push(parent)
  }

  const leaves: number[] = []
  for (let i = 0; i < degree.length; i++) {
    if (degree[i] === 1) {
      leaves.push(i)
    }
  }

  let ans: number[] = []
  while (leaves.length) {
    ans = []
    const length = leaves.length
    for (let i = 0; i < length; i++) {
      const leaf = leaves.shift()
      ans.push(leaf)
      for (const neighbour of graph[leaf]) {
        degree[neighbour]--
        if (degree[neighbour] === 1) {
          leaves.push(neighbour)
        }
      }
    }
  }
  return ans
}

console.log(
  findMinHeightTrees(6, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ])
)
