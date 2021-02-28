/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let length = 0
  for (let p = head; p !== null; p = p.next) {
      length++
  }
  let current = head
  let pre = null
  for (let i = 0; i < Math.floor(length / 2); i++) {
      let temp = current.next
      current.next = pre
      pre = current
      current = temp
  }
  if (length % 2 === 1 && current) current = current.next
  for (; pre !== null && current !== null; pre = pre.next, current = current.next) {
      if (pre.val !== current.val) return false
  }
  return true
};