/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    let first = head
    let second = first.next
    first.next = swapPairs(second.next)
    second.next = first
    return second
};
var swapPairs = function(head) {
    let dummy = new ListNode(0)
    dummy.next = head
    let pre = dummy
    while (head !== null && head.next !== null) {
        let first = head
        let second = head.next

        pre.next = second
        first.next = second.next
        second.next = first

        pre = first
        head = first.next
    }
    return dummy.next
};
// @lc code=end

