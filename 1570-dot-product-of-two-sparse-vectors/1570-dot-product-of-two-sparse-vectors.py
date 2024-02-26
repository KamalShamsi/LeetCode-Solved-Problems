class SparseVector:
    def __init__(self, nums: List[int]):
        self.nonzeros = {i: val for i, val in enumerate(nums) if val != 0}
            
    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: 'SparseVector') -> int:
        result = 0
        
        if len(self.nonzeros) < len (vec.nonzeros):
            for i, val in self.nonzeros.items():
                if i in vec.nonzeros:
                    result += val * vec.nonzeros[i]
        else:
            for i, val in vec.nonzeros.items():
                if i in self.nonzeros:
                    result += val * self.nonzeros[i]
        return result

# Your SparseVector object will be instantiated and called as such:
# v1 = SparseVector(nums1)
# v2 = SparseVector(nums2)
# ans = v1.dotProduct(v2)