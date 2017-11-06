// The singleton pattern restricts instantiation of a class to a single object. It serves as a shared resource
// namespace and isolates implementation code from the global namespace. The pattern provides a single
// point of access for the defined functions.
var mySingleton = (function(){
    var instance;
    function init() {
        return {
            number : Math.random()
        };
    };
    return {
        getInstance: function() {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA === singleB);