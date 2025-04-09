/*
Kiểu dữ liệu trong javascript

1.Dữ liệu nguyên thủy - Primitive Data
    -Number
    -String
    -Boolean
    -Undefined
    -Null
    -Symbol

2.Dữ liệu phức tạp - Complex Data
    -Object
    -Function
*/

// Numer
var age = 20;
console.log(typeof age);
//String
var fullName = 'Nguyễn Đức Anh';
console.log(typeof fullName);
//Boolean
var isStudent = true;
console.log(typeof isStudent);
//Undefined
var studentName;
console.log(typeof studentName);
//Null
var studentAge = null;
console.log(typeof studentAge);
//Symbol
var studentId = Symbol('studentId'); // có tính unique
var student = Symbol('studentId'); // có tính unique
console.log(typeof student);
console.log(studentId === student);

//Function
var myFunction = function(){
    alert('Hi');
}

console.log(typeof myFunction);

myFunction();

//object

var student = {
    name: 'Nguyễn Đức Anh',
    age: 20,
    isStudent: true,
    myFunction: function(){
        alert('Hi');
    }
};
console.log(typeof student);

student.myFunction();
console.log('Object',student);

var myArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

console.log('Array', myArray);
console.log(typeof myArray);