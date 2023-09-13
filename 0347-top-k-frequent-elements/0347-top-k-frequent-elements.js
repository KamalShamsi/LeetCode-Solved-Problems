/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Frequency Count (Step 1)
    // Hashmap to store frequency of each number in nums
    const frequencyMap = {};
    for (let num of nums) {
        // if number is not yet in the map, initialize its frequency to 0
        // Then increment frequency
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Bucket Sort (Step 2)
    // its index is an array of frequncy of numbers in nums
    const buckets = [];
    for (let num in frequencyMap) {
        const freq = frequencyMap[num];
        // If there's no bucket for this frequency yet, initialize it
        if (!buckets[freq]) {
            buckets[freq] = [];
        }
        // Add the number to the corresponding frequency bucket
        buckets[freq].push(parseInt(num));
    }

    // Gather Results (Step 3)
    // We will gather the k most frequent numbers by iterating through the buckets array from the end, highest frequesncy.
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        // If there is a bucket for this frequency, add its numbers to the result
        if (buckets[i]) {
            result.push(...buckets[i]);
        }
    }
    return result;
};