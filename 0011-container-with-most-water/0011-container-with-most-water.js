/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //initiate values for left and right pointers, maxArea to keep track of maximum area
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;

    //move left and right pointers closer to each other, meanwhile calculating area
    while (left < right){
        let area = Math.min(height[left],height[right]) * (right - left);

        //update & keep track of max area
        maxArea = Math.max(area, maxArea);

        //move closer left and right to each other
        if(height[left] < height[right])
            left++;
        else
            right--;
    }

    return maxArea;
};