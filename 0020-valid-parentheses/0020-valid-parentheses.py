class Solution:
    def isValid(self, s: str) -> bool:
        # Map to hold matching pairs of brackets
        bracket_map = {')': '(', '}': '{', ']': '['}
        stack = []
        
        for char in s:
            if char in bracket_map:  # If it's a closing bracket
                top_element = stack.pop() if stack else '#'
                if bracket_map[char] != top_element:
                    return False
            else:  # If it's an opening bracket
                stack.append(char)
        
        # If the stack is empty, all brackets were properly closed and nested
        return not stack
