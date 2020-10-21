/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let current = head
    let pre = null
    let i = 0
    while(current && (i < m - 1)) {
        pre = current
        current = current.next
        i++
    }
    let n1 = pre
    let n2 = current
    i = 0
    while (current && i < (n - m + 1)) {
        let temp = current.next
        current.next = pre
        pre = current
        current = temp
        i++
    }
    if (n1) {
        n1.next = pre
    } else {
        head = pre
    }
    n2.next = current
    return head
};