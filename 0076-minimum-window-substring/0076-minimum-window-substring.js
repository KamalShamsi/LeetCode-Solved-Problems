const minWindow = function (s, t) {
  // Edge case: if either string is empty or s is shorter than t, return an empty string
  if (!s || !t || s.length < t.length) return "";

  // Initialize pointers and variables to keep track of the window and result
  let l = 0, r = 0;
  let count = 0, minI = s.length + 1, minL = s.length + 1;

  // Initialize a frequency map for characters in t
  const freqMap = {};
  for (const ch of t) freqMap[ch] = (freqMap[ch] || 0) + 1;

  // Expand the window to the right
  while (r < s.length) {
    // If the character is needed, decrement its count in the map and increase the count
    if (freqMap[s[r]]-- >= 1) count += 1;
    r += 1;

    // Check if the window is valid (contains all characters of t)
    while (count == t.length) {
      // Update the result if the current window is smaller
      if (r - l < minL) {
        minL = r - l;
        minI = l;
      }
      // Try to minimize the window by moving the left pointer to the right
      if (freqMap[s[l]]++ >= 0) count -= 1;
      l += 1;
    }
  }
  // Return the minimum window substring
  return s.slice(minI, minI + minL);
};
