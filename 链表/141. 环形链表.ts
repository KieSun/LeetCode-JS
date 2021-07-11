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

 function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) return false
    let fast = head.next
    let slow = head
    while (fast !== slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return fast === slow
};