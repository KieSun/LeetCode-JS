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
var isPalindrome = function (head) {
  let fast, slow;
  let node, pre;
  fast = slow = head;
  pre = null;
  while (fast && fast.next) {
    node = slow;
    slow = slow.next;
    fast = fast.next.next;
    node.next = pre;
    pre = node;
  }
  if (fast) slow = slow.next;
  while (node) {
    if (node.val !== slow.val) return false;
    node = node.next;
    slow = slow.next;
  }
  return true;
};
