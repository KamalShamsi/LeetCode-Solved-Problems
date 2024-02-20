class ListNode:
    def __init__(self, val):
        self.val = val
        self.prev = None
        self.next = None

class MyLinkedList:
    def __init__(self):
        self.left = ListNode(0)  # Sentinel node as pseudo-head
        self.right = ListNode(0)  # Sentinel node as pseudo-tail
        self.left.next = self.right
        self.right.prev = self.left
        self.length = 0  # Initialize list length

    def get(self, index: int) -> int:
        if index < 0 or index >= self.length:
            return -1
        cur = self.left.next
        for _ in range(index):
            cur = cur.next
        return cur.val

    def addAtHead(self, val: int) -> None:
        node = ListNode(val)
        node.next = self.left.next
        node.prev = self.left
        self.left.next.prev = node
        self.left.next = node
        self.length += 1

    def addAtTail(self, val: int) -> None:
        node = ListNode(val)
        node.prev = self.right.prev
        node.next = self.right
        self.right.prev.next = node
        self.right.prev = node
        self.length += 1

    def addAtIndex(self, index: int, val: int) -> None:
        if index < 0 or index > self.length:  # Check bounds
            return
        if index == 0:
            self.addAtHead(val)
            return
        if index == self.length:
            self.addAtTail(val)
            return
        cur = self.left.next
        for _ in range(index):
            cur = cur.next
        node = ListNode(val)
        node.prev = cur.prev
        node.next = cur
        cur.prev.next = node
        cur.prev = node
        self.length += 1

    def deleteAtIndex(self, index: int) -> None:
        if index < 0 or index >= self.length:
            return
        cur = self.left.next
        for _ in range(index):
            cur = cur.next
        cur.prev.next = cur.next
        cur.next.prev = cur.prev
        self.length -= 1
