class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let first = head
  let second = head.next
  let third = second.next

  first.next = swapPairs(third)
  second.next = first

  return second
}

const genNodeList = (nums: number[]) => {
  const head = new ListNode()
  let tail = head
  for (const num of nums) {
    tail.next = new ListNode(num)
    tail = tail.next
  }
  return head.next
}

const flatNodeList = (head: ListNode) => {
  const ans = []
  while (head) {
    ans.push(head.val)
    head = head.next
  }
  return ans
}

console.log(flatNodeList(swapPairs(genNodeList([1, 2, 3, 4]))))
