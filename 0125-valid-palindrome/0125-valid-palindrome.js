/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Convert the string to lowercase to ensure case insensitivity.
    s = s.toLowerCase();
    
    // Define two pointers, one starting from the beginning and one from the end.
    let startPointer = 0;
    let endPointer = s.length - 1;

    // Helper function to check if a character is alphanumeric.
    const isAlphaNumeric = (char) => {
        return /^[a-z0-9]$/.test(char);
    }

    // Traverse the string using the two pointers.
    while (startPointer < endPointer) {
        // If characters are the same, move the pointers.
        if(s[startPointer] === s[endPointer]) {     
            startPointer++;
            endPointer--;
            continue;
        }

        // If the character at startPointer is not alphanumeric, move the pointer to the next character.
        if (!isAlphaNumeric(s[startPointer])) {
            startPointer++;
            continue;
        }
        
        // If the character at endPointer is not alphanumeric, move the pointer to the previous character.
        if (!isAlphaNumeric(s[endPointer])) {
            endPointer--;
            continue;
        }

        // If the characters at both pointers are different, return false.
        return false;
    }

    // If the loop completes without returning false, the string is a palindrome.
    return true;
};
