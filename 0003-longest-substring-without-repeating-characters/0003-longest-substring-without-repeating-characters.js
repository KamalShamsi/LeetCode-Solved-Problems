/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const setMap = new Set();
    let max = 0;
    let index = 0;
    for(let i = 0; i<s.length; i++){
        let key = s[i];
        while(setMap.has(key)){
            setMap.delete(s[index]);
            index++;
        }
        setMap.add(key);
        max = Math.max(max, setMap.size);
    }
    return max;
};