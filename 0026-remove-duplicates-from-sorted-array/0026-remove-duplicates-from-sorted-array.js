var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  var k = 0;

  nums.map((num) => {
    if (num !== nums[k]) {
      k++;
      nums[k] = num;
    }
  });

  return k + 1;
};