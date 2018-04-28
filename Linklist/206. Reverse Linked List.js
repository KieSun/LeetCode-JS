// Reverse a singly linked list.

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
var reverseList = function (head) {
    if (!head || !head.next) return head
    let pre = null
    let current = head
    let next
    while (current) {
        next = current.next
        current.next = pre
        pre = current
        current = next
    }
    return pre
};