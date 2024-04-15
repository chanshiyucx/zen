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
  const build = (node: TreeNode, sum: number) => {
    if (!node) {
      return 0
    }

    sum = sum * 10 + node.val
    if (!node.left && !node.right) {
      return sum
    }
    return build(node.left, sum) + build(node.right, sum)
  }

  return build(root, 0)
}

console.log(sumNumbers(test))
