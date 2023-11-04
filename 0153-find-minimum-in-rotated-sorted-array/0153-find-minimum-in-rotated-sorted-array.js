var findMin = function(nums) {
  nums.sort((a, b) => a - b);
  return nums[0];
};