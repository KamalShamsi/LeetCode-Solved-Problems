# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        # Initialize the dummy head of the returning list.
        dummy_head = ListNode(0)
        current = dummy_head
        carry = 0
        
        # Iterate through lists l1 and l2 until you reach both ends.
        while l1 or l2:
            # At the start of each iteration, if a list is already exhausted,
            # its value is considered as 0.
            x = l1.val if l1 else 0
            y = l2.val if l2 else 0
            
            # Sum the current digits along with the carry from the last iteration.
            sum = carry + x + y
            
            # Update carry for next iteration.
            carry = sum // 10
            
            # Create a new node with the digit value of (sum mod 10) and set it
            # as the next of the current node.
            current.next = ListNode(sum % 10)
            current = current.next
            
            # Move to the next elements in the list.
            if l1: l1 = l1.next
            if l2: l2 = l2.next
        
        # After fully iterating through both lists, check if there is a carry left.
        if carry > 0:
            # If so, add a new node with carry value.
            current.next = ListNode(carry)
        
        # Return the sum list, which starts from dummy_head's next node.
        return dummy_head.next
