class ListNode:
    def __init__(self, key=None, value=None):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}
        # Dummy nodes for the head and tail of the doubly linked list
        self.head = ListNode()
        self.tail = ListNode()
        self.head.next = self.tail
        self.tail.prev = self.head
        
    def _remove_node(self, node: ListNode):
        node.prev.next = node.next
        node.next.prev = node.prev
    
    def _add_node_to_front(self, node: ListNode):
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = node
        self.head.next = node
    
    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        node = self.cache[key]
        self._remove_node(node)
        self._add_node_to_front(node)
        return node.value
    
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self._remove_node(self.cache[key])
        node = ListNode(key, value)
        self._add_node_to_front(node)
        self.cache[key] = node
        if len(self.cache) > self.capacity:
            del self.cache[self.tail.prev.key]
            self._remove_node(self.tail.prev)
   


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)