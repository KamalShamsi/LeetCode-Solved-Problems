
var MinStack = function() {
    this.mainStack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // Push value onto the mainStack
    this.mainStack.push(val);

    // Push the minimu value onto the minStack
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    } else {
        this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // Pop from both mainStack and minStack
    this.mainStack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // Return the top of the mainStack
     return this.mainStack[this.mainStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // Return the top of the minStack (which represents the minimum value)
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */