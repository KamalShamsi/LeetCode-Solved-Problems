class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
     # The number of rows and columns in the grid.
        rows, cols = len(grid), len(grid[0])
        perimeter = 0

        # Iterate through each cell in the grid.
        for r in range(rows):
            for c in range(cols):
                # If the cell is land.
                if grid[r][c] == 1:
                    perimeter += 4  # Assume all four sides are water initially.
                    # Check the upper cell, if it's land, remove one side of perimeter.
                    if r > 0 and grid[r - 1][c] == 1:
                        perimeter -= 2
                    # Check the left cell, if it's land, remove one side of perimeter.
                    if c > 0 and grid[r][c - 1] == 1:
                        perimeter -= 2
        return perimeter