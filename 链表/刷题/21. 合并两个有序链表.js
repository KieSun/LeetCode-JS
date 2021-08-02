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
    let dummy = new ListNode(), cur = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            cur.next = new ListNode(l2.val)
            l2 = l2.next
        }
        cur = cur.next
    }
    if (l1) {
        cur.next = l1
    }
    if (l2) {
        cur.next = l2
    }
    return dummy.next
};