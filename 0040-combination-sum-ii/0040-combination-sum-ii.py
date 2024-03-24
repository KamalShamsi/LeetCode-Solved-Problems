from typing import List

class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(start, current, total):
            # If the current sum equals target, add the current combination to the result.
            if total == target:
                result.append(current.copy())
                return
            if total > target:
                return  # Stop exploring further as the sum has exceeded the target.
            
            for i in range(start, len(candidates)):
                # Skip duplicates.
                if i > start and candidates[i] == candidates[i-1]:
                    continue
                # Include the current candidate and explore further.
                current.append(candidates[i])
                backtrack(i + 1, current, total + candidates[i])
                # Backtrack to explore other combinations.
                current.pop()
        
        candidates.sort()  # Sort to handle duplicates easily.
        result = []
        backtrack(0, [], 0)
        return result
