var wordBreak = function(s, wordDict) {
    // Convert wordDict into a Set for O(1) lookup
    const wordSet = new Set(wordDict);
    
    // dp[i] represents if s up to i can be segmented into dictionary words.
    const dp = new Array(s.length + 1).fill(false);
    
    // Base case: an empty string can always be segmented
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            // If the string before index j is breakable and the substring from j to i is in the dictionary, then string up to i is breakable.
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; // Exit early once found a valid break
            }
        }
    }
    return dp[s.length];
};
