var outer = (function (){
    var a = 1;
    return function () {
        console.log(a);
    }
})()

outer();


function mul (x) {
    return function (y) { // anonymous function 
        return function (z) { // anonymous function 
            return x * y * z; 
        };
    };
}

console.log(mul(2)(3)(4));