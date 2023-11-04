/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0
    let right = nums.length - 1

    let min = nums[0]

    let mid = Math.floor((left + right) / 2)

    while (left <= right) {
        if (min > nums[mid]) {
            min = nums[mid]
        }

        if (nums[mid] > nums[left]) {
            left = mid
        } else if (nums[mid] < nums[left]) {
            right = mid
        } else {
            left++
        }

        mid = Math.floor((left + right) / 2)
    }

    return min
}