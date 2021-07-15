const reverseN = (head: ListNode | null, count: number) => {
    if (count === 1) return head
    const tail = head.next
    const p = reverseN(head.next, count - 1)
    head.next = tail.next
    tail.next = head
    return p 
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head) return head
    let dummy = new ListNode(0, head)
    let newHead = dummy
    let count = right - left + 1
    while(--left) {
        newHead = newHead.next
    }
    newHead.next = reverseN(newHead.next, count)
    return dummy.next
};