/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(), cur = dummy
    let t = 0
    while (l1 || l2 || t) {
        if (l1) {
            t += l1.val
            l1 = l1.next
        }
        if (l2) {
            t += l2.val
            l2 = l2.next
        }
        cur = cur.next = new ListNode(t % 10)
        t = Math.floor(t / 10)
    }
    return dummy.next
};