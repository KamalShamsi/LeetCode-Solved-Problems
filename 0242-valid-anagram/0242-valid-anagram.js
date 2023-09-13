/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        // Different lenghts, not an anagram
        return false;
    }

    // Initialize count array with the size 26 (the amount of letters in english alphabet), fill it with 0's
    const count = new Array(26).fill(0);

    // Iterate over s and increment character counts
    for(let char of s) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Iterate over t and decrement character counts
    for(let char of t) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    // Check if all counts are zero
    for(let c of count) {
        if(c !== 0) {
            return false;
        }
    }

    return true
};