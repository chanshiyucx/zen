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

function evaluateTree(root: TreeNode | null): boolean {
  const evaluate = (node: TreeNode): boolean => {
    if (node.left && node.right) {
      if (node.val === 2) {
        return evaluate(node.left) || evaluate(node.right)
      } else {
        return evaluate(node.left) && evaluate(node.right)
      }
    }
    return node.val === 0 ? false : true
  }

  return evaluate(root)
}
