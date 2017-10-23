// see java



/**
 * initialize your data structure here.
 */
var MinStack = function() {
    // initial a min stack and a nomal stack
    this.min = [];
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    var min = this.getMin();
    this.stack.push(x);
    // compare x and min, if x is less and equal to min, then push x into min
    if (min === undefined || x <= min) {
        this.min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var min = this.getMin();
    var val = this.stack.pop();
    // if min is equal to stack.pop(), then get min.pop();
    if (min === val) {
        this.min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */