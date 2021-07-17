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

 function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return head
    let p = head
    let n = 1
    while (p.next) {
        p = p.next
        n++
    }
    p.next = head
    k = k % n
    k = n - k
    while (k--) {
        p = p.next
    }
    head = p.next
    p.next = null
    return head
};