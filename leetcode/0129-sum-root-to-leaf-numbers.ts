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
  const build = (node: TreeNode, list: number[], stack: number[][]) => {
    list.push(node.val)
    if (!node.left && !node.right) {
      stack.push(list)
    }
    if (node.left) {
      build(node.left, [...list], stack)
    }
    if (node.right) {
      build(node.right, [...list], stack)
    }
  }

  let ans = 0
  const stack = []
  build(root, [], stack)

  for (const item of stack) {
    item.forEach((e, i) => {
      ans += e * 10 ** (item.length - i - 1)
    })
  }
  return ans
}

console.log(sumNumbers(test))
