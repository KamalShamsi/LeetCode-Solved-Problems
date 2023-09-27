function lengthOfLongestSubstring(s) {
    let windowCharsMap = new Map();
    let windowStart = 0;
    let maxLength = 0;
    
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const endChar = s[windowEnd];
        if(windowCharsMap.has(endChar)) {
            // Move the start pointer so we're not counting the repeating character
            windowStart = Math.max(windowStart, windowCharsMap.get(endChar) + 1);
        }
        // Save the current character's position
        windowCharsMap.set(endChar, windowEnd);
        
        // Update the maximum length
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}
