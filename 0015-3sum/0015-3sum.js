/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * This function returns an array of all unique triplets in the array "nums" which gives the sum of zero.
 * Approach:
 * - First, sort the array.
 * - Iterate through the array. For each element:
 *   - Use two pointers method to check for pairs in the remaining subarray that sum up to the negative of the current element.
 * - This ensures that the triplet's sum is zero.
 */
var threeSum = function(nums) {
    const res = [];
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        
        // If current number is positive, no further triplets can be found (as the array is sorted)
        if (a > 0) break;
        
        // Skip duplicate numbers to avoid duplicate triplets
        if (i > 0 && a === nums[i - 1]) continue;

        let l = i + 1; // Left pointer
        let r = nums.length - 1; // Right pointer

        // Use two-pointer technique to find pairs that sum up to the negative of current number
        while (l < r) {
            const threeSum = a + nums[l] + nums[r];
            
            if (threeSum > 0) {
                r--; // Move right pointer to the left
            } else if (threeSum < 0) {
                l++; // Move left pointer to the right
            } else {
                res.push([a, nums[l], nums[r]]);
                l++;
                r--;
                // Skip duplicates for left pointer
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }
    return res;
}
