/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !k) return head
    let fast = head
    let slow = head
    let length = 1
    while (fast.next) {
        length++
        fast = fast.next
    }
    let step = length - k % length
    fast.next = head
    while (step > 1) {
        step--
        slow = slow.next
    }
    let temp = slow.next
    slow.next = null
    return temp
};