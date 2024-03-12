class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        distances = [(math.sqrt(x**2 + y**2), [x, y]) for x, y in points]
        
        distances.sort()
        
        return [point for dist, point in distances[:k]]
    
    