class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Check if the lengths of the strings are different
        if len(s) != len(t):
            return False
        
        # Count the frequency of each character in both strings
        countS = {}
        countT = {}
        for char in s:
            countS[char] = countS.get(char, 0) + 1
        for char in t:
            countT[char] = countT.get(char, 0) + 1
        
        # Check if both dictionaries have the same character frequency
        return countS == countT
