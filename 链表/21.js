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
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    let r1 = new ListNode(0, null)
    let r = r1
    while (l1 && l2) {
        const v1 = l1.val
        const v2 = l2.val
        if (v1 > v2) {
            r.next = l2
            l2 = l2.next
        } else {
            r.next = l1
            l1 = l1.next
        }
        r = r.next
    }
    if (l1) {
        r.next = l1
    }
    if (l2) {
        r.next = l2
    }
    return r1.next
};