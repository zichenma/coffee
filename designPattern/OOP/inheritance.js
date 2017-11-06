var Shape = function (name) {
    this.name = name;
    this.nums = [1,2,3,4,5];
}

Shape.prototype.getNum = function() {
    return this.nums;
}
var Circle = function(){
    Shape.call(this, "rectangle");
};

// Inheritance
Circle.prototype = Object.create(Shape.prototype); 

// This is a bad way
// https://stackoverflow.com/questions/17392857/benefits-of-using-object-create-for-inheritance
// Circle.prototype = new Shape();

var circle1 = new Circle();
circle1.nums.push(6);
console.log(circle1.nums); // 1, 2, 3, 4, 5, 6

var circle2 = new Circle();
console.log(circle2.getNum()); // 1, 2, 3, 4, 5, 6

var circle3 = new Circle();
console.log(circle2.getNum()); // 1, 2, 3, 4, 5

var circle4 = new Circle();
console.log(circle4.name); // rectangle
