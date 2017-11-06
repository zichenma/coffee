function Person (name, age) {
    this.name = name;
    this.age = age;
    this.get = function () {
        return this.name + ":" + this.age;
    }
}

var newPerson = new Person("Tom", 23);

console.log(newPerson.get());