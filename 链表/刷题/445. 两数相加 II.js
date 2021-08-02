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
 var addTwoNumbers = function(l1, l2) {
    let p = [], q = []
    while (l1) {
        p.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        q.push(l2.val)
        l2 = l2.next
    }
    let dummy = new ListNode(), cur = dummy
    let t = 0
    while (p.length || q.length || t) {
        if (p.length) {
            t += p.pop()
        }
        if (q.length) {
            t += q.pop()
        }
        cur.next = new ListNode(t % 10)
        cur = cur.next
        t = Math.floor(t / 10)
    }
    return revers(dummy.next)
};

var revers = (head) => {
    if (!head || !head.next) return head
    const tail = head.next
    const p = revers(head.next)
    head.next = tail.next
    tail.next = head
    return p
}