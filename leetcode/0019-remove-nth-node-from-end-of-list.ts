class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// const test = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// )

const test = new ListNode(1)

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let curNode = head
  let removeNode = head
  let diff = 0
  while (curNode) {
    if (diff > n) {
      removeNode = removeNode.next
    }
    curNode = curNode.next
    diff++
  }

  if (diff <= n) {
    head = null
  } else if (removeNode.next) {
    removeNode.next = removeNode.next.next
  }

  return head
}

const log = (head: ListNode): number[] => {
  const ans = []
  while (head) {
    ans.push(head.val)
    head = head.next
  }
  return ans
}

log(removeNthFromEnd(test, 1))
