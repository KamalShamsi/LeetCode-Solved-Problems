/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 
 * This function determines if the array "numbers" contains two entries that add up to the "target" value.
 * Approach:
 * - Use the Two-Pointer method.
 * - Initialize a pointer at the start (left) and another at the end (right) of the sorted array.
 * - Calculate the sum of values at these pointers.
 *   - If the sum equals the target, we found our two numbers.
 *   - If the sum is less than the target, move the left pointer one step to the right.
 *   - If the sum is greater than the target, move the right pointer one step to the left.
 * - Continue until the two pointers meet.
 */
var twoSum = function(numbers, target) {
    // Initialize left pointer at the beginning of the array
    let leftPointer = 0;
    // Initialize right pointer at the end of the array
    let rightPointer = numbers.length - 1;

    // Continue while left pointer is less than right pointer
    while (leftPointer < rightPointer) {
        const sumOfTwoPointers = numbers[leftPointer] + numbers[rightPointer];
        
        if (sumOfTwoPointers === target) {
            // Return indices. Added 1 because the problem is 1-based index.
            return [leftPointer + 1, rightPointer + 1];
        } 
        
        if (sumOfTwoPointers < target) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }
};
