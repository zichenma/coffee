// 1. Class
class Animal {
    constructor (name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a noise.");
    }
}
var animal = new Animal('cat');
animal.speak();

// 2. RAM leaking in ES5:
{
    var private = 1;
}
console.log(private); //1

(function() {
    var private2 = 1;
})();
//console.log(private); // Uncaught ReferenceError

// ES6:
{
    let private3 = 1;
}
  console.log(private3); // Uncaught ReferenceError

  // 3. tamplating 
  // ES5
 var first = 'Adrian';
 var last = 'Mejia';
 console.log('Your name is ' + first + ' ' + last + '.');

 // ES6
const first = 'Adrian';
const last = 'Mejia';
console.log(`Your name is ${first} ${last}.`);

// Get Array Elements

//ES5
var array = [1, 2, 3, 4];
var first = array[0];
var third = array[2];
console.log(first, third); // 1 3

//ES6
const array = [1, 2, 3, 4];
const [first, ,third] = array;
console.log(first, third); // 1 3

