const longestConsecutive = (nums) => {
    if (!nums.length) return 0;

    // Convert the array into a set
    let numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        // Check if current number is the starting number of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Try to extend the sequence from the current number
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // Update the result if a longer sequence is found
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
