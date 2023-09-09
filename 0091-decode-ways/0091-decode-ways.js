/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // If the string starts with '0', it cannot be decoded
    if (s[0] === '0') return 0;

    let n = s.length;
    let dp = new Array(n + 1).fill(0); // Create an array to story the number of ways to decode up to each index

    dp[0] = 1; // Base case: An empty string can be decoded in 1 way
    dp[1] = 1; // Base case: A string of length 1 can be decoded in 1 way, unless it's '0' which we've already checked

    // Start iterating from the 2nd character
    for (let i = 2; i <= n; i++) {
        // If the current character is not '0', it can be decoded individualy
        if (s[i - 1] !== '0') {
            // The number of ways to decode up to this character is the same as the number of ways to decode up to the previous character
            dp[i] += dp[i-1];
        }

        // Get the two-digit number formed by the current character and the previous one
        let twoDigits = parseInt(s.substring(i - 2, i));

        // Check if the two-digit number is a valid encoding (between '10' and '26')
        if(twoDigits >= 10 && twoDigits <= 26) {
            // if it's a valid encoding, we can decode these two characters as a pair
            // So, we add the number of ways to decode up to the character before the previous one.
            dp[i] += dp[i - 2];
        }
    }

    // By the end of the loop, dp[n] will give us the number of ways to decode the entire string
    return dp[n];
 };