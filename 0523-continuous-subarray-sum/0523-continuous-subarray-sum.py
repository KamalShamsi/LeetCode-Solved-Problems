class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        remainder_map = {0: -1}
        prefix_sum = 0
        
        for i in range(n):
            prefix_sum += nums[i]
            
            remainder = prefix_sum % k if k != 0 else prefix_sum
            
            if remainder in remainder_map:
                if i - remainder_map[remainder] > 1:
                    return True
            else:
                remainder_map[remainder] = i
        
        return False
    
    
    