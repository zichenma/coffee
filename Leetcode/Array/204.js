var countPrimes = function(n) {
    if (n < 2) return 0;
    var notPrime  = new Array(n), counter = 0;
    notPrime[0] = true;
    notPrime[1] = true;
    for (var i = 2; i < Math.sqrt(n); i++) {
        if(!notPrime[i]){
            for (var j = 2; j * i < n; j++) {
                notPrime[i * j] = true;
            }
        }
    }
    for (var i = 2; i < n; i++) {
        if (!notPrime[i]) counter++;
    }
    return counter;
};