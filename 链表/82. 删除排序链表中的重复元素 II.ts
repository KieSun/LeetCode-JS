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

 function deleteDuplicates(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(null, head)
    let p
    let q = dummy
    while (q.next) {
        if (q.next.next && q.next.val === q.next.next.val) {
            p = q.next.next
            while (p && p.val === q.next.val) {
                p = p.next
            }
            q.next = p
        } else {
            q = q.next
        }
    }
    return dummy.next
};