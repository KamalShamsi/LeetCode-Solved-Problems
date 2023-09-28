function characterReplacement(s, k) {
    let left = 0, right = 0, maxCharCount = 0, maxLength = 0;
    const freqMap = {};

    for (right = 0; right < s.length; right++) {
        // Increase the count of current character
        freqMap[s[right]] = (freqMap[s[right]] || 0) + 1;
        
        // Update maxCharCount with the frequency of the current character
        maxCharCount = Math.max(maxCharCount, freqMap[s[right]]);
        
        // Check if the current window is valid
        if (right - left + 1 - maxCharCount > k) {
            freqMap[s[left]]--;  // Decrease the count of the character that is being removed
            left++;  // Move the left pointer of the window
        }
        
        // Update maxLength with the size of the current window
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
