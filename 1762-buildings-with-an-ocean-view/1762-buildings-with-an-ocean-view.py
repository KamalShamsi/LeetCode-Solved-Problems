class Solution:
    def findBuildings(self, heights: List[int]) -> List[int]:
        oceanView = []
        maxHeight = 0
        
        for i in range(len(heights) - 1, -1, -1):
            if heights[i] > maxHeight:
                oceanView.append(i)
                maxHeight = heights[i]
                
        return oceanView[::-1]