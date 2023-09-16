/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // If there is less than 3 blocks, no water can be trapped
    if (height.length < 3) return 0;

    let leftMax = height[0];
    let rightMax = height[height.length-1];
    let leftPointer = 1;
    let rightPointer = height.length-2;
    let maxWaterTrapped = 0;

    while (leftPointer <= rightPointer) {
        if(leftMax <= rightMax) {
            // Water trapped is the difference between leftMax and current height
            // If negative, it means no water is trapped
            maxWaterTrapped += Math.max(0, leftMax - height[leftPointer]);

            // Update leftMax if current height is greater
            leftMax = Math.max(leftMax, height[leftPointer]);
            leftPointer++;
        } else {
            // Water trapped is the difference between rightMax and current height
            maxWaterTrapped += Math.max(0, rightMax - height[rightPointer]);

            // Update rightMax if current height is greater
            rightMax = Math.max(rightMax, height[rightPointer]);
            rightPointer--;
        }
    }

    return maxWaterTrapped;
};