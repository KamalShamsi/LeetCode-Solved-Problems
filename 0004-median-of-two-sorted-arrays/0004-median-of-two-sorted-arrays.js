function findMedianSortedArrays(nums1, nums2) {
    // Always make sure nums1 is the smaller array.
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;

        // Adjusting the partition in nums1 to the right.
        if (i < m && nums1[i] < nums2[j - 1]) {
            imin = i + 1;
        }
        // Adjusting the partition in nums1 to the left.
        else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1;
        } else {
            // Found the correct partition.
            let maxOfLeft;
            if (i === 0) { maxOfLeft = nums2[j - 1]; }
            else if (j === 0) { maxOfLeft = nums1[i - 1]; }
            else { maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]); }

            // If odd number of elements, return max of left.
            if ((m + n) % 2 === 1) {
                return maxOfLeft;
            }

            // If even number of elements, return average of max of left and min of right.
            let minOfRight;
            if (i === m) { minOfRight = nums2[j]; }
            else if (j === n) { minOfRight = nums1[i]; }
            else { minOfRight = Math.min(nums1[i], nums2[j]); }

            return (maxOfLeft + minOfRight) / 2.0;
        }
    }

    // Return 0.0 if no solution exists (though this shouldn't happen with valid input).
    return 0.0;
}
