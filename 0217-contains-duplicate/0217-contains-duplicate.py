class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        #initialize an empty set to store the unique elements from nums
        seen  = set ()
        for num in nums:
            #if num is already in seen, a duplicate exists, return true
            if num in seen:
                return True
            #Otherwise, add num to seen and continue checking
            seen.add(num)
        #If no duplicates found after checking all elements, return False
        return False