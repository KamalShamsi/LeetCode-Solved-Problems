class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Negative numbers cannot be palindromes
        if x < 0:
            return False
        # If the last digit is 0, the first digit must also be 0, which is only possible for 0
        if x % 10 == 0 and x != 0:
            return False
        
        reversed_half = 0
        while x > reversed_half:
            reversed_half = reversed_half * 10 + x % 10
            x //= 10
        
        # For numbers with an odd number of digits, we get rid of the middle digit by reversed_half // 10
        # For even digits, x == reversed_half will check if the number is palindrome
        return x == reversed_half or x == reversed_half // 10
