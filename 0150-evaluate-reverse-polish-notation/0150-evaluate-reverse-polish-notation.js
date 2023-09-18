/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // Create stack for keeping numbers
    let stack = [];

    // Iterate through the array of strings
    for (let token of tokens) {
        // If token is operator, pop last 2 elements from stack, perform operation, then push result back onto stack
        if (["+","-","*","/"].includes(token)) {
            let y = stack.pop();
            let x = stack.pop();
            switch(token) {
                case "+": stack.push(x+y); break;
                case "-": stack.push(x-y); break;
                case "*": stack.push(x*y); break;
                case "/": stack.push(~~(x/y)); break;
            }
        } else {
            // If token is not operator, then it is a number, we push it onto stack
            stack.push(Number(token));
        }
    }

    // Return the result of operations
    return stack[0];
};