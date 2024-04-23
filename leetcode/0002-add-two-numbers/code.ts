class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let ans = new ListNode()
  let tail = ans
  let carry = 0
  while (l1 || l2) {
    const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0)
    const node = new ListNode(sum % 10)
    carry = Math.floor(sum / 10)
    tail.next = node
    tail = tail.next
    l1 = l1?.next
    l2 = l2?.next
  }

  if (carry) {
    tail.next = new ListNode(carry)
  }

  return ans.next
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
console.log(addTwoNumbers(l1, l2))
