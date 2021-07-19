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

 const rever = (head: ListNode | null, k: number) => {
    if (k === 1) return head
    let tail = head.next // 2
    let p = rever(tail.next, k - 1) // 1
    head.next = tail.next // 1.next = 3
    tail.next = head // 2.next = 1
    return tail
}

function swapPairs(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(0, head)
    let p = dummy
    let q = p.next
    while (q && q.next) {
        p.next = rever(q, 2)
        p = q
        q = q.next
    }
    return dummy.next
};