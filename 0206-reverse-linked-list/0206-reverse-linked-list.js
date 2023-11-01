/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // let node = new ListNode(0)
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    let reversed = arr.reverse()

    let node1 = new ListNode(0)
    let node2 = node1

    for(let item of reversed){
        node1.next = new ListNode(item)
        node1 = node1.next
    }

    return node2.next
};