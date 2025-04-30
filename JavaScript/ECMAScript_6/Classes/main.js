function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        return this.name;
    }
}
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
console.log(person1);
console.log(person2);
//Classes
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const person3 = new PersonClass("Alice", 28);
person3.greet();


