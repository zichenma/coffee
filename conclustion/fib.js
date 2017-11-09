// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
//Recursive solution time (O(2^n))
function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// Memoization time (O(n))
function fibonacci(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }