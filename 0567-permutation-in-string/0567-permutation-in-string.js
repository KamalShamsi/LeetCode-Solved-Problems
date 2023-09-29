/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;

    const s1Freq = new Array(26).fill(0);
    const s2Freq = new Array(26).fill(0);

    // Populate frequency map for s1 and the initial window in s2
    for (let i = 0; i < s1.length; i++) {
        s1Freq[s1.charCodeAt(i) - 97]++;
        s2Freq[s2.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s2.length - s1.length; i++) {
        // Check if the two frequency maps match
        if (s1Freq.toString() === s2Freq.toString()) return true;

        // Move the window: remove the leftmost character and add the next character in s2
        s2Freq[s2.charCodeAt(i) - 97]--;
        s2Freq[s2.charCodeAt(i + s1.length) - 97]++;
    }

    return s1Freq.toString() === s2Freq.toString();
};