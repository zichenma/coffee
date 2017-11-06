function Person () {};
Person.prototype.name = "Tom";
Person.prototype.age = 23;
Person.prototype.get = function () {
    console.log(this.name + ":" + this.age);
}
Person.prototype.friends = ["Charlie", "Dave"];

var person1 = new Person();
var person2 = new Person();

console.log(person1.friends); // Charlie, Dave
console.log(person2.friends); // Charlie, Dave

person1.friends.push("Ed") 

// Problem 2 person objects have same property
console.log(person1.friends) // Charlie, Dave, Ed
console.log(person2.friends) // Charlie, Dave, Ed

