/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let q = head
    let dummy = new ListNode(0, head)
    let p = dummy
    while (n--) {
        q = q.next
    }
    while (q) {
        q = q.next
        p = p.next
    }
    p.next = p.next.next
    return dummy.next
};