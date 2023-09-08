/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    let n = nums.length;

    // No houses to rob
    if(n == 0) return 0;
    // Only one house to rob
    if(n == 1) return nums[0];

    // Create arrays with the size of nums length and initialized with 0's
    let dp1 = new Array(n).fill(0);
    let dp2 = new Array(n).fill(0);

    // Base cases
    dp1[0] = nums[0];
    dp1[1] = Math.max(nums[0], nums[1]);
    dp2[0] = 0;  // We don't rob the first house in dp2
    dp2[1] = nums[1];

    // Loop for scenarios excluding the last and first houses, respectively
    for (let i = 2; i < n-1; i++) {
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + nums[i]);
    }
    for (let j = 2; j < n; j++) {
        dp2[j] = Math.max(dp2[j-1], dp2[j-2] + nums[j]);
    }
    
    // Return the maximum between the two scenarios
    let maxRobbery = Math.max(dp1[n-2], dp2[n-1]);

    return maxRobbery;
};
