class Solution:
    def longestCommonPrefix(self, strs) -> str:
        if not strs:
            return ""
        
        # Start with the first string in the array as the initial prefix.
        prefix = strs[0]
        
        # Iterate over all other strings in the array.
        for s in strs[1:]:
            # Keep reducing the prefix until it matches the start of the current string.
            while s[:len(prefix)] != prefix and prefix:
                prefix = prefix[:-1]
                
            # If the prefix is empty, no common prefix exists.
            if not prefix:
                return ""
        
        return prefix

# Example usage
sol = Solution()
print(sol.longestCommonPrefix(["flower","flow","flight"]))  # Output: "fl"
print(sol.longestCommonPrefix(["dog","racecar","car"]))  # Output: ""
