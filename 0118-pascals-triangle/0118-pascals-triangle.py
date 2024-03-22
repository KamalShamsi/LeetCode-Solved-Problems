class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        # Initialize the triangle with the first row
        pascal_triangle = [[1]]
        
        # Generate each row of Pascal's triangle
        for i in range(1, numRows):
            # Initialize the row with 1 at the beginning
            row = [1]
            # Calculate the values in the middle of the row
            for j in range(1, i):
                # Sum the two values directly above this position
                row.append(pascal_triangle[i-1][j-1] + pascal_triangle[i-1][j])
            # End each row with 1
            row.append(1)
            # Add the completed row to the triangle
            pascal_triangle.append(row)
        
        return pascal_triangle
