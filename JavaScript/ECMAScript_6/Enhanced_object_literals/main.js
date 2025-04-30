//Enhanced object literals
//1.Định nghĩ key: value cho object
//2.Định nghĩa method cho object
//3.Định nghĩa key cho object dưới dang biến

var name = 'Đức Anh';
var age = 20;

var student = {
    name,//không cần viết name: name
    age,
    getName() { //định nghĩa method cho object
        return this.name;
    }

};

console.log(student);

var fieldName = 'name';
var fieldAge = 'age';

var student2 = {
    [fieldName]: 'Đức Anh',//định nghĩa key cho object dưới dang biến
    [fieldAge]: 20,
    getName() {
        return this.name;
    }
};
console.log(student2);