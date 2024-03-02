class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        balance = 0
        additions = 0
        
        for char in s:
            if char == '(':
                balance += 1
            else:
                if balance == 0:
                    additions += 1
                else:
                    balance -= 1
        
        additions += balance
        
        return additions
    