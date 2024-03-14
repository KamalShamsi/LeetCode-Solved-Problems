class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) < 1:
            return ""
        
        start, end = 0, 0
        for i in range(len(s)):
            len1 = self.expandAroundCenter(s, i, i)  # Odd length palindrome
            len2 = self.expandAroundCenter(s, i, i + 1)  # Even length palindrome
            maxlen = max(len1, len2)
            if maxlen > end - start:
                start = i - (maxlen - 1) // 2
                end = i + maxlen // 2
        
        return s[start:end + 1]

    def expandAroundCenter(self, s, left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1
