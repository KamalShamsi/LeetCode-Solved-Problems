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
    const nodes = [];

    let node = head;

    while (node) {
        nodes.push(node);

        node = node.next;
    }

    let left = 0;
    let right = nodes.length - 1;
    let prevNode = null

    while (left <= right) {
        const leftNode = nodes[left];
        const rightNode = nodes[right];

        if (prevNode) {
            prevNode.next = leftNode;
        }

        if (leftNode !== rightNode) {
            leftNode.next = rightNode;
        }

        prevNode = rightNode;

        left++;
        right--;
    }

    prevNode.next = null;

    return nodes[0];
};