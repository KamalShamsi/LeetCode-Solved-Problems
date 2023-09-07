/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    // Array to story number of combinations for each target from 0 to given target
    const dp = Array(target + 1).fill(0);

    // There is one way to get the target 0: by not choosing any number
    dp[0] = 1;

    // Loop through all targets up to the given target
    for (let t = 1; t <= target; t++) {
        //For each number in nums
        for (let num of nums) {
            //if the current target is greater than or equal to the number
            if(t >= num) {
                // Add to dp[t] the number of ways to get (t - num)
                dp[t] += dp[t - num];
            } 
        }
    }

    // dp[target] now contains the number of ways to get the target
    return dp[target];
};