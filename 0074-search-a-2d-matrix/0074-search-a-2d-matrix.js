/**
 * Function to search for a target value in a sorted 2D matrix
 * @param {number[][]} matrix - The 2D array containing integers
 * @param {number} target - The integer value to search for
 * @return {boolean} - Returns true if the target exists in the matrix, otherwise false
 */
var searchMatrix = function(matrix, target) {
    // Get the number of rows and columns in the matrix
    let rows = matrix.length;
    let cols = matrix[0].length;

    // Initialize pointers for binary search
    let left = 0;
    let right = rows * cols - 1;

    // Perform binary search
    while (left <= right) {
        // Calculate the mid-point of the flattened matrix
        let mid = Math.floor((left + right) / 2);

        // Convert the mid-point index to its 2D matrix indices
        let midElement = matrix[Math.floor(mid / cols)][mid % cols];

        // Check if the midElement matches the target value
        if (midElement === target) {
            return true;
        } 
        // If midElement is smaller than target, discard the left half
        else if (midElement < target) {
            left = mid + 1;
        } 
        // If midElement is greater than target, discard the right half
        else {
            right = mid - 1;
        }
    }

    // If we've reached this point, the target doesn't exist in the matrix
    return false;
};
