class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        i = j = len(nums) - 1
        # Step 1: Find the first pair where the next number is greater than the current.
        while i > 0 and nums[i - 1] >= nums[i]:
            i -= 1
        if i == 0:  # Entire array is in descending order
            nums.reverse()
            return
        # Step 2: Find element to swap with.
        while nums[j] <= nums[i - 1]:
            j -= 1
        nums[i - 1], nums[j] = nums[j], nums[i - 1]
        
        # Step 3: Reverse the sub-array.
        nums[i:] = reversed(nums[i:])
