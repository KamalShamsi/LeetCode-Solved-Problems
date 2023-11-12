/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [];
    const length = nums1.length + nums2.length;
    const lengthIsOdd = !!(length % 2);
    let i1 = 0, i2 = 0;

    while (mergedArray.length <= length/2) {
        if (nums1[i1] <= nums2[i2] || nums2[i2] === undefined) {
            mergedArray.push(nums1[i1]);
            i1++;
        } else {
            mergedArray.push(nums2[i2]);
            i2++;
        }
    }

    console.log(lengthIsOdd, mergedArray);

    if (lengthIsOdd) return mergedArray[mergedArray.length-1];
    return (mergedArray[mergedArray.length-1] + mergedArray[mergedArray.length-2]) / 2;
};