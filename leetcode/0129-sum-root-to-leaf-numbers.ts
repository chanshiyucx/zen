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
  new TreeNode(9, new TreeNode(5), new TreeNode(1)),
  new TreeNode(0)
)

function sumNumbers(root: TreeNode | null): number {
  let ans = 0

  const build = (node: TreeNode, result: number) => {
    result = result * 10 + node.val
    if (!node.left && !node.right) {
      ans += result
      return
    }
    if (node.left) {
      build(node.left, result)
    }
    if (node.right) {
      build(node.right, result)
    }
  }

  build(root, 0)

  return ans
}

console.log(sumNumbers(test))
