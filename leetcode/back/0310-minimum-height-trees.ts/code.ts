function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) {
    return [0]
  }

  const graph: Map<number, Set<number>> = new Map()

  for (const [from, to] of edges) {
    if (!graph.get(from)) graph.set(from, new Set())
    if (!graph.get(to)) graph.set(to, new Set())
    graph.get(from).add(to)
    graph.get(to).add(from)
  }

  let leaves: number[] = []
  for (const [leaf, list] of graph.entries()) {
    if (list.size === 1) {
      leaves.push(leaf)
    }
  }

  while (n > 2) {
    n -= leaves.length
    const newLeaves = []
    for (const leaf of leaves) {
      for (const to of graph.get(leaf)) {
        graph.get(to).delete(leaf)
        if (graph.get(to).size === 1) {
          newLeaves.push(to)
        }
      }
    }
    leaves = newLeaves
  }
  return leaves
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

// const graph = []
// for (let i = 0; i < 6; i++) {
//   graph.push(new Set().add(i).add(i))
// }

// console.log(graph[0])
// console.log(graph[0].values())
// console.log(graph[0].values().next())
// console.log(graph[0].values().next().value)
