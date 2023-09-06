/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // Initialize a 2D array (dp) with dimensions (text1.length + 1) x (text2.length + 1)
    let dp = Array(text1.length + 1).fill(0).map(() => Array(text2.length + 1).fill(0));

    // Loop through each character of both text1 and text2
    for(let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            
            // If characters from both texts match
            if (text1.charAt(i-1) === text2.charAt(j-1)) {
                // The value is the diagonal value incremented by 1
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                // Otherwise, it's the max of the value above or to the left in the dp array
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j-1]);
            }
        }
    }
    // Return the bottom-right value in the dp array, which is the length of the LCS
    return dp[text1.length][text2.length];
};
