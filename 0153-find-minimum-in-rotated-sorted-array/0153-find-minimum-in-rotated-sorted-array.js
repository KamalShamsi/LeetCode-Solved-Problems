/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = Number.POSITIVE_INFINITY
    return helper(nums, 0, nums.length - 1, min)
};

const helper = function (nums, i, j, min) {

    if (nums.length === 1) {
        min = Math.min(min, nums[0])
    }else {
        if (nums[i] <= nums[j]) {
            min = nums[i]
        }else {
            min = Math.min(helper(nums, 0, Math.floor((i+j) / 2), min), helper(nums, Math.floor((i+j)/2) + 1, j, min))
        }
    }
    return min
}