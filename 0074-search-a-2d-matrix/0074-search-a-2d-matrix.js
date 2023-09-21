/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Get the number of rows and columns in the matrix.
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    // Initialize two pointers for binary search.
    let left = 0, right = rows * cols - 1;
    
    while (left <= right) {
        // Calculate mid-point of the current search space.
        let mid = Math.floor((left + right) / 2);
        
        // Convert the 1D index to a 2D index.
        let midElement = matrix[Math.floor(mid / cols)][mid % cols];
        
        // Check for target.
        if (midElement === target) {
            return true;
        } else if (midElement < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // If we reach here, target is not in matrix.
    return false;
};
