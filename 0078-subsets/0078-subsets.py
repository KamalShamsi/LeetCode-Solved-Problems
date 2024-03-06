class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        def backtrack(start, path):
            # Add the current subset to the list of subsets
            res.append(path[:])  # Use path[:] to add a copy of path
            for i in range(start, len(nums)):
                # Include nums[i] in the current subset
                path.append(nums[i])
                # Recurse with remaining elements
                backtrack(i + 1, path)
                # Backtrack, removing the last element added
                path.pop()
        
        res = []
        backtrack(0, [])
        return res
