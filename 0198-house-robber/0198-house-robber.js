/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // Initialize n represent length of the array nums
    let n = nums.length;

    // No houses to rob
    if(n == 0) return 0; 
    //Only one house to rob
    if(n == 0) return nums[0];

    // Create an array with the size of nums length and initialized with 0's
    let dp = new Array(n).fill(0);

    // Base case
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    // Going through the num's array, make a decision: rob or skip
    for (let i = 2; i < n; i++) {
        // if decision: skip, then we move to dp[i-1]
        // if devision: rob, we move to dp[i-2] and add the amount was in house at nums[i]
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
    }

    // since we arrays are 0-indexed, therefore n-1
    return dp[n-1];
};