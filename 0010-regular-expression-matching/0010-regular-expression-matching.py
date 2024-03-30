class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        memo = {}  # Memoization table to store results of subproblems
        
        def dp(i, j):
            if (i, j) not in memo:  # Check if result for dp(i, j) is not already computed
                if j == len(p):  # End of pattern
                    ans = i == len(s)  # True if also at the end of string s
                else:
                    first_match = i < len(s) and p[j] in {s[i], '.'}
                    if j + 1 < len(p) and p[j + 1] == '*':  # If '*' wildcard is found
                        ans = dp(i, j + 2) or first_match and dp(i + 1, j)  # Skip or use '*'
                    else:
                        ans = first_match and dp(i + 1, j + 1)  # Move forward in both strings
                        
                memo[(i, j)] = ans  # Store result in memo
            return memo[(i, j)]
        
        return dp(0, 0)  # Start from the beginning of both s and p
