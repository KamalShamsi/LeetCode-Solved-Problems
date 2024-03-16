var createCounter = function(n) {
    // Start the counter from n
    let counterValue = n;
    
    // Return a function that increments and returns the counter value
    return function() {
        return counterValue++;
    };
};