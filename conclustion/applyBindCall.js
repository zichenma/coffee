var person = {
    name: "Zichen Ma",
    hello: function (str) {
        console.log(this.name + " says hello to " + str);
    }
}

// call and apply invoke immediately
// apply can be used for array-like object
// bind return a function will be used later

person.hello("everyone"); //Zichen Ma says hello to everyone
person.hello.call({name: "Jim Smith"}, "world"); // Jim Smith says hello to world

var helloFun = person.hello.bind({name: "Kelly"}, "someone");
helloFun(); // Kelly says hello to someone


function personContainer() {
    var person = {  
       name: "James Smith",
       hello: function() {
         console.log(this.name + " says hello " + arguments[1]);
       }
    }
    person.hello.apply(person, arguments);
}
personContainer("world", "mars"); // James Smith says hello mars
// note: arguments[0] = "world" , arguments[1] = "mars" 



