function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // If the left part is sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // Narrow search to the left part
            } else {
                left = mid + 1; // Move to the right part
            }
        } else { // If the right part is sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1; // Narrow search to the right part
            } else {
                right = mid - 1; // Move to the left part
            }
        }
    }

    return -1; // If target isn't found
}
