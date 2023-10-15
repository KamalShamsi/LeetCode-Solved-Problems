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
const reorderList = (head) => {
    // First find the middle of the list 
    let mid = head, tail = head;
    while (tail && tail.next) {
        mid = mid.next;
        tail = tail.next.next
    }

    // Reverse it until the middle
    let [p, c, n] = [null, mid, null]
    while(c) {
        n = c.next
        c.next = p
        p = c
        c = n
    }
    // setup for the final step, mainly setting up two pointers we 
    // will use to make sure the reorder works
    c = p;
    tail = c;
    let end = tail.next;
    c = head, n = c.next;
    // Go one at a time reordering the list 
    while(n && end) {
        c.next = tail;
        tail.next = n;
        c = n;
        n = n.next;
        tail = end;
        end = end.next;
    }
    return head;
};