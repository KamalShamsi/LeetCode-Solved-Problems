/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    let next = head.next;
    const stack = [head];
    
    while(next) {
    
        stack.push(next);
        next = next.next;
    }

    let l = 0;
    let r = stack.length - 1;

    let lastProcessed = null;

    while(l <= r) {
        if (lastProcessed) {
            lastProcessed.next = stack[l];
        }
        stack[l].next = stack[r];
        lastProcessed = stack[r];

        l++;
        r--;      
    }

    lastProcessed.next = null;
};