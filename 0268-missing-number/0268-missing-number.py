class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        lengthOfTheArray = len(nums)
        expectedSum = (lengthOfTheArray*(lengthOfTheArray+1))//2
        actualSum = sum(nums)
        missingNumber = expectedSum - actualSum
        return missingNumber