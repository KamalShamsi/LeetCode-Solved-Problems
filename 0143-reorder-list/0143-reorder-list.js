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
var reorderList = function (head) {
  if (head === null) {
    return;
  }
  const secondHalf = split(head);
  const reversedSecondHalf = reverseLinkedList(secondHalf);
  // after split(), the head only has first half nodes
  mergeTwoLists(head, reversedSecondHalf);
};

/**
 * Use two pointers to find the middle of a linked list: fast and slow.
 * The fast pointer moves twice as fast as the slow pointer.
 * When the fast pointer reach the end of the list (or second to end),
 * it has "pulled" the slow pointer to the middle.
 */
function split(head) {
  let slow = head,
    fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const secondHalf = slow.next;
  slow.next = null;

  return secondHalf;
}

function reverseLinkedList(head) {
  let prev = null;
  // exit loop when reaching the end of list
  while (head !== null) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

/**
 * list1 will always longer or equal length with list2.
 * head1 is the main head, so it will jump between two lists in zigzag mode
 */
function mergeTwoLists(list1, list2) {
  while (list2 !== null) {
    let nxt1 = list1.next;
    let nxt2 = list2.next;

    list1.next = list2; // at this point, list1 will be [head1, head2+tail2]
    list1 = nxt1; // we abandoned nodes of tail1, that's why we have to assign it to the next value immediately, so in the next step, we point back to tail1

    list2.next = list1;
    list2 = nxt2;
  }
}