/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let dummy = new ListNode(null, head), cur = dummy
    let p = cur.next
    while (p && p.next) {
        cur.next = reversK(p, 2)
        cur = p
        p = p.next
    }
    return dummy.next
};

var reversK = (head, k) => {
    if (k === 1) return head
    const tail = head.next
    const p = reversK(head.next, k - 1)
    head.next = tail.next
    tail.next = head
    return p
}