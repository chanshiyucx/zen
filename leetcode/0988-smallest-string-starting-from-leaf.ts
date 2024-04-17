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

// const test = new TreeNode(
//   0,
//   new TreeNode(1, new TreeNode(3), new TreeNode(4)),
//   new TreeNode(2, new TreeNode(3), new TreeNode(4))
// )

const test = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

function smallestFromLeaf(root: TreeNode | null): string {
  let ans = ""
  const find = (node: TreeNode, str: string) => {
    if (!node) return
    str = String.fromCharCode(97 + node.val) + str
    if (!node.left && !node.right) {
      if (!ans.length || str < ans) {
        ans = str
      }
      return
    }

    find(node.left, str)
    find(node.right, str)
  }
  find(root, "")
  return ans
}

console.log(smallestFromLeaf(test))
