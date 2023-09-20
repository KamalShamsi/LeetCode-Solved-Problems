var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2); // Calculate the middle index

        if (nums[mid] === target) return mid; // If the middle element is the target, return its index
        if (nums[mid] > target) {
            right = mid - 1; // If the middle element is greater than the target, search the left half
        } else {
            left = mid + 1; // If the middle element is less than the target, search the right half
        }
    }

    return -1; // Target not found
};
