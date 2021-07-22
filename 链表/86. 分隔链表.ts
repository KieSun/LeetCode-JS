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

 function partition(head: ListNode | null, x: number): ListNode | null {
    let small = new ListNode()
    let p = small
    let big = new ListNode()
    let q = big
    while (head) {
        if (head.val < x) {
            p.next = head
            p = p.next
        } else {
            q.next = head
            q = q.next
        }
        head = head.next
    }
    q.next = null
    p.next = big.next
    return small.next
};