/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mappings = {
        ')':'(',
        '}':'{',
        ']':'['
    };

    for (let char of s) {
        // Check if character is a closing bracket
        if (mappings[char]) {
            // Pop the top element from stack. If the stack is empty, assign a dummy value '#'
            const topElement = stack.pop() || '#';

            // Check the popped element against the current character
            if (topElement !== mappings[char]) {
                return false;
            }
        } else {
            // It's opening bracket, push onto the stack
            stack.push(char);
        }
    }

    // If the stack still has elements, then it's unbalanced
    return stack.length === 0;
};