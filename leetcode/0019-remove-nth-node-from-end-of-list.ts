class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = 0
  let temp = head
  while (temp) {
    length++
    temp = temp.next
  }

  let removeIndex = length - n
  if (removeIndex === 0) {
    head = head.next
  } else {
    temp = head
    while (removeIndex > 1) {
      temp = temp.next
      removeIndex--
    }
    temp.next = temp.next.next
  }

  return head
}

const test1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)

const test2 = new ListNode(1)

const test3 = new ListNode(1, new ListNode(2))

const log = (head: ListNode) => {
  const list = []
  while (head) {
    list.push(head.val)
    head = head.next
  }
  console.log(list)
}

log(removeNthFromEnd(test1, 2))
log(removeNthFromEnd(test2, 1))
log(removeNthFromEnd(test3, 1))
