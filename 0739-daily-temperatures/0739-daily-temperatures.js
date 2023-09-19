var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let result = new Array(n).fill(0);  // Initialize result as an array of zeros.
    let helperStack = [];  // Initialize the helper stack.

    for (let idx = n - 1; idx >= 0; idx--) {
        // Remove indices with a temperature less than or equal to the current temperature.
        while (helperStack.length > 0 && temperatures[idx] >= temperatures[helperStack[helperStack.length - 1]]) {
            helperStack.pop();
        }

        // If there are still temperatures in the stack, then a warmer day exists in the future.
        if (helperStack.length > 0) {
            result[idx] = helperStack[helperStack.length - 1] - idx;
        }

        // Push the current index onto the stack.
        helperStack.push(idx);
    }

    return result;
};
