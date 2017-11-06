var testModule = (function() {
    var counter = 0;
    return {
        incrementCounter: function() {
            return counter++;
        },
        resetCounter: function() {
            console.log("Current counter value: " + counter);
            counter = 0;
        }
    };
})();

console.log(testModule.incrementCounter());
console.log(testModule.incrementCounter());
testModule.resetCounter();

var myNamespace = (function () {
    var myPrivateVar, myPrivateMethod;

    // A private variable
    myPrivateVar = 0;
    // A private function which logs any arguments
    myPrivateMethod = function( foo ) {
        console.log( foo );
    };

    return {
        // A public variable
        myPublicVar: "foo",

        // A public function utilizing private data
        myPublicFunction: function( bar ) {
            // Increment the private counter
            myPrivateVar++;
            // Call the private method using bar        
            myPrivateMethod( bar );
        }
       };
     })();
