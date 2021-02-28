/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let cur = head
    let count = 0 
    while (cur && count !== k) {
        count++
        cur = cur.next
    }
    if (k === count) {
        cur = reverseKGroup(cur, k)
        while (count !== 0) {
            count --
            let tmp = head.next
            head.next = cur
            cur = head
            head = tmp
        }
        head = cur
    }
    return head
};
// @lc code=end

