/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let fast, slow
  fast = slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let l1 = head
  let l2 = reverse(slow)
  while (l1 && l2) {
    let temp = l1.next
    l1.next = l2
    l1 = temp

    temp = l2.next
    l2.next = l1
    l2 = temp
  }
  if (l1) l1.next = null
};

const reverse = head => {
  let prev = null
  while (head) {
    let next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}