function uniquePaths(m, n) {
    // Create an m x n matrix filled with 1s
    let dp = Array(m).fill().map(() => Array(n).fill(1));

    // Start iterating from the second row (since first row can only be reached from the left)
    for(let i = 1; i < m; i++) {
        // Start iterating from the second column (since first column can only be reached from above)
        for(let j = 1; j < n; j++) {
            // For each cell, its value is the sum of the cell above it and the cell to its left
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    // Return value in the bottom-right cell which contains the total unique paths
    return dp[m-1][n-1];
}
