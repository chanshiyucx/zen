class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const test = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(3), new TreeNode(1)),
  new TreeNode(6, new TreeNode(5))
)

function addOneRow(
  root: TreeNode | null,
  val: number,
  depth: number
): TreeNode | null {
  if (depth === 1) {
    return new TreeNode(val, root, null)
  }

  const build = (node: TreeNode | null, curDepth: number) => {
    if (!node) {
      return
    }
    const left = node.left
    const right = node.right
    if (curDepth === depth - 1) {
      node.left = new TreeNode(val, left, null)
      node.right = new TreeNode(val, null, right)
      return
    }
    build(left, curDepth + 1)
    build(right, curDepth + 1)
  }

  build(root, 1)
  return root
}

console.log(addOneRow(test, 1, 2))
