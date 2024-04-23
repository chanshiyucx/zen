// // 1、最矮树的根一定不是入度为1的点
// // 2、把最矮树的叶子节点全部减掉，剩下的仍然是最矮树
// // 3、所以对一个图，不断的把它的叶子节点减掉，减到最后剩下的就一定是最矮树的根

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

  let ans: number[] = []
  const queue: number[] = []
  for (let i = 0; i < degree.length; i++) {
    if (degree[i] === 1) {
      queue.push(i)
    }
  }

  while (queue.length) {
    ans = []
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const cur = queue.shift()
      ans.push(cur)

      for (const neighbour of graph[cur]) {
        degree[neighbour]--
        if (degree[neighbour] === 1) {
          queue.push(neighbour)
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
