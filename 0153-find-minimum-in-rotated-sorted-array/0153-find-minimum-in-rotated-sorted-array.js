/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (!nums || nums.length === 0) {
        return null;
    }

    let low = 0, high = nums.length - 1;

    // If list has one element, return that element
    if (nums.length === 1) {
        return nums[0];
    }

    // If the last element is greater than the first element, then no rotation
    if (nums[high] > nums[0]) {
        return nums[0];
    }

    // Binary search way
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // If the mid element is greater than its next element, then mid + 1 is pivot
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }

        // If the mid element is lesser than its previous element, then mid element is pivot
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }
        
        // Decide whether to go left or right. If middle element is greater than the 0th element, this means the smalles value is on the right
        if (nums[mid] > nums[0]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // Default return, in case of an error
};