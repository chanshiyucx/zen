class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2
  if (!list2) return list1

  let merged: ListNode = null
  if (list1.val < list2.val) {
    merged = new ListNode(list1.val, mergeTwoLists(list1.next, list2))
  } else {
    merged = new ListNode(list2.val, mergeTwoLists(list1, list2.next))
  }
  return merged
}

const build = (list) => {
  let ans = null
  let tmp = null
  for (const n of list) {
    if (!ans) {
      ans = new ListNode(n)
      tmp = ans
    } else {
      tmp.next = new ListNode(n)
      tmp = tmp.next
    }
  }
  return ans
}

const log = (head: ListNode) => {
  const list = []
  while (head) {
    list.push(head.val)
    head = head.next
  }
  console.log(list)
}

// build([1, 2, 3])
log(mergeTwoLists(build([1, 2, 3]), build([1, 3, 4])))
