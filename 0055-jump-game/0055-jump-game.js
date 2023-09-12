/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // Maximum index we can reach
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        // if current index is beyond our reach, we can't move forward
        if (i > maxReach) return false;
        //update maxReach based on current number
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
};