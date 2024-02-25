class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        # Identify positions of invalid parentheses
        stack = []
        invalid_indices = set()
        
        for i, char in enumerate(s):
            if char == '(':
                stack.append(i)
            elif char == ')':
                if stack:
                    stack.pop()
                else:
                    invalid_indices.add(i)
                    
        invalid_indices = invalid_indices.union(set(stack))
        
        result = []
        for i, char in enumerate(s):
            if i not in invalid_indices:
                result.append(char)
                
        return ''.join(result)