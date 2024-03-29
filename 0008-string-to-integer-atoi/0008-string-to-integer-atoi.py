class Solution:
    def myAtoi(self, s: str) -> int:
        # Constants for 32-bit signed integer limits
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31
        
        # 1. Strip leading spaces
        s = s.lstrip()
        
        # 2. Check for a sign
        if s and s[0] in ('+', '-'):
            sign = -1 if s[0] == '-' else 1
            s = s[1:]
        else:
            sign = 1
        
        # 3. Convert characters to integer
        result = 0
        for char in s:
            if char.isdigit():
                result = result * 10 + int(char)
            else:
                break
        
        # 4. Apply sign
        result *= sign
        
        # 5. Clamp to 32-bit signed integer range
        if result < INT_MIN:
            return INT_MIN
        if result > INT_MAX:
            return INT_MAX
        
        return result
