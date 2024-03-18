class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        # Initialize a memoization table to store intermediate results
        memo = {}

        def dp(i, j):
            # Check if we've already computed the result for this (i, j) pair
            if (i, j) in memo:
                return memo[(i, j)]
            
            # Base case: if both strings are exhausted, they match
            if j == len(p):
                return i == len(s)

            # Check if the current characters match
            first_match = i < len(s) and (s[i] == p[j] or p[j] == '.')

            # Handle the case of '*' wildcard
            if j + 1 < len(p) and p[j + 1] == '*':
                # Case 1: '*' matches 0 preceding elements
                ans = dp(i, j + 2)
                # Case 2: '*' matches 1 or more preceding elements
                ans |= first_match and dp(i + 1, j)
            else:
                # If no wildcard, just move to the next characters in both strings
                ans = first_match and dp(i + 1, j + 1)
            
            # Store the result in the memoization table
            memo[(i, j)] = ans
            return ans

        # Start the dynamic programming recursion from the beginning of both strings
        return dp(0, 0)