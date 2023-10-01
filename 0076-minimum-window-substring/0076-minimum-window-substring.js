function minWindow(s, t) {
    let tFreq = new Map();
    let windowFreq = new Map();
    let minLength = Infinity;
    let minStart = 0;

    // Build frequency map for t
    for (let char of t) {
        tFreq.set(char, (tFreq.get(char) || 0) + 1);
    }

    let left = 0;
    let requiredChars = t.length;

    for (let right = 0; right < s.length; right++) {
        // Add right char to windowFreq
        windowFreq.set(s[right], (windowFreq.get(s[right]) || 0) + 1);

        // If char is in t and needed, decrease requiredChars
        if (tFreq.get(s[right]) && windowFreq.get(s[right]) <= tFreq.get(s[right])) {
            requiredChars--;
        }

        // If window is valid, contract it
        while (requiredChars === 0) {
            // Update min substring if needed
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minStart = left;
            }

            // Remove left char from windowFreq
            windowFreq.set(s[left], windowFreq.get(s[left]) - 1);
            // If char is in t and needed, increase requiredChars
            if (tFreq.get(s[left]) && windowFreq.get(s[left]) < tFreq.get(s[left])) {
                requiredChars++;
            }

            // Move left pointer inward
            left++;
        }
    }

    return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
}
