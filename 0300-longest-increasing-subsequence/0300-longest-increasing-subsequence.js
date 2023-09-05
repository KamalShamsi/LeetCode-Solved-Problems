/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // If the nums array is empty, return 0.
    if (nums.length === 0) return 0;

    // Initialize a dp array filled with 1s. The reason is, every single number is an increasing subsequence of length 1 by itself.
    let dp = new Array(nums.length).fill(1);

    // Maximum length of LIS initialized to 1 (because every individual number is a subsequence).
    let maxLen = 1;

    // Start iterating from the second number.
    for (let i = 1; i < nums.length; i++) {
        // For each number, compare with all previous numbers.
        for (let j = 0; j < i; j++) {
            // If the current number (nums[i]) is greater than the previous number (nums[j]), 
            // it means it can form an increasing sequence with it.
            if (nums[i] > nums[j]) {
                // Update the dp value at position i.
                // dp[i] is the maximum length of increasing subsequence ending at i.
                // It's either the current value (dp[i]) or the value of dp[j] + 1.
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        // Update the overall maximum length.
        maxLen = Math.max(maxLen, dp[i]);
    }

    // Return the maximum length found.
    return maxLen;
};
