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

 const _reverseK = (head: ListNode | null, count: number) => {
    if (count === 1) return head
    const tail = head.next
    const p = _reverseK(head.next, count - 1)
    head.next = tail.next
    tail.next = head
    return p 
}

const reverseK = (head: ListNode | null, count: number) => {
    let p = head
    let k = count
    while(--k && p) {
        p = p.next
    }
    if (!p) return head
    return _reverseK(head, count)
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let dummy = new ListNode(0, head)
    let p = dummy
    let q = p.next
    while ((p.next = reverseK(q, k)) !== q) {
        p = q
        q = q.next
    }
    return dummy.next
};