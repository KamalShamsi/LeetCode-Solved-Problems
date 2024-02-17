class Solution:
    def removeElement(self, nums, val):
        k = 0  # Initialize a counter for the index of the next non-val element
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1
        return k
