// The Constructor pattern is used for defining the instance
// properties

// The prototype pattern is used for defining shared methods
// and properties.

function Person (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Ed", "Fred"];
}

Person.prototype = {
    constructor: Person,
    sayName : function () {
        console.log(this.name);
    }
}

var person1 = new Person("Bob", 25, "developer");
var person2 = new Person("Charlie", 30, "Architect");

person1.friends.push("Dave");

console.log(person1.friends); //Ed, Fred, Dave
console.log(person2.friends); //Ed, Fred

console.log(person1.friends === person2.friends); // false
console.log(person1.sayName === person2.sayName); // true