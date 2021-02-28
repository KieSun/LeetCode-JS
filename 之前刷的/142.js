/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let fast, low
  fast = low = head
  while (fast && fast.next) {
    low = low.next
    fast = fast.next.next
    if (fast === low) {
      let current = low
      let length = 0
      while (1) {
        length++
        current = current.next
        if (current === fast) break
      }
      let p1 = head
      let p2 = head
      while (length) {
        length--
        p2 = p2.next
      }
      while (p1 !== p2) {
        p1 = p1.next
        p2 = p2.next
      }
      return p1
    }
  }
  return null
};
