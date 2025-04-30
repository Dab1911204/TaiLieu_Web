//Arrow Function
const logger = (message) => {
    console.log(message);
}
logger("Hello World!"); // Output: Hello World!

const sum = (a, b) => a + b;//Arrow function
console.log(sum(5, 10)); // Output: 15

const opject = (a,b) => ({a:a, b:b});//Arrow function
console.log(opject(5, 10)); // Output: { a: 5, b: 10 }

const course = {
    name: "JavaScript",
    getName: function() {
        return this.name;//JavaScript
    }
}
console.log(course.getName()); // Output: JavaScript
const course2 = {
    name: "JavaScript",
    getName: () => { //Arrow function không có context (this)
        return this.name;//undefined
    }
}
//Arrow function ko thể sử dụng this trong arrow function
//Arrow function ko thể sử dụng để làm constructor function 

const Course = function(name, price) {
    this.name = name;
    this.price = price;
}
const Course1 = (name, price) => {
    this.name = name;
    this.price = price;
}//Arrow function ko thể sử dụng để làm constructor function

const jsCourse = new Course("JavaScript", 1000);
console.log(jsCourse); // Output: Course { name: 'JavaScript', price: 1000 }
const jsCourse1 = new Course1("JavaScript", 1000); // TypeError: Course1 is not a constructor
console.log(jsCourse1);//undefined