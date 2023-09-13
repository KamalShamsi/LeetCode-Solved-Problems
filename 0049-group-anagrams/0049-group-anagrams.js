/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};

    for (let str of strs) {
        // Sort the string to get the key
        const sorted = [...str].sort().join('');

        // If the key is not in the map, add it
        if (!map[sorted]) {
            map[sorted] = [];
        }

        // Push the original string to the appropriate key
        map[sorted].push(str);
    }

    // Return the grouped anagrams
    return Object.values(map);
};