//Destructuring(giải nén mảng): lấy các phần tử trong mảng ra thành các biến
var array = ['java', 'python', 'c++', 'javascript'];
var [a,b,c,d] = array; // Destructuring 
console.log(a,b,c,d);
var [x, ,y] = array;
console.log(x,y); // Skip second element
//Rest:khi sử dụng cùng với destructuring thì sẽ là rest operator
var array1 = ['java', 'python', 'c++', 'javascript'];
var [a1, ...rest] = array1; // ... rest operator(toán tử rest): lấy tất cả các phần tử còn lại
console.log(a1); // java
console.log(rest); // [ 'python', 'c++', 'javascript' ]

var course = {
    name: 'JavaScript',
    price: 1000,
    Image: 'image-address'
}
var {name, price, Image} = course; // Destructuring(với object thì phải giống tên với key trong object)
console.log(name, price, Image); // JavaScript 1000

var course1 = {
    name: 'JavaScript',
    price: 1000,
    Image: 'image-address',
    children: {
        name: 'ReactJS',
        price: 2000,
        Image: 'image-address'
    }
}
var {name, ...newObject} = course1; // ... rest operator:lấy tất cả các thuộc tính còn lại
console.log(name);
console.log(newObject); // { price: 1000, Image: 'image-address' } 

var {name, children: {name: name1}} = course1; // Destructuring
console.log(name, name1); // JavaScript ReactJS
var {name:parentName, children: {name:childrenName}} = course1; // Destructuring
console.log(parentName, childrenName); // JavaScript ReactJS
var course2= {
    name: 'JavaScript',
    price: 1000,
    Image: 'image-address',
}
var {name: parentName, description = "description"} = course2;
console.log(parentName); // JavaScript
console.log(description); // description

function logger(...params){// ... rest operator:lấy tất cả các tham số còn lại như không có thâm số đằng trước nên có lấy ra tât cả các tham số
    console.log(params); // [ 1, 2, 3, 4 ]
}
console.log(logger(1,2,3,4)); // [ 1, 2, 3, 4 ]

function logger1(a,b,...params){
    console.log(params);// [ 3, 4 ]
}
console.log(logger1(1,2,3,4)); // [ 3, 4 ]

function loggerObj({name, price, ...params}){
    console.log(params);// [ 3, 4 ]
}
loggerObj({
    name: 'JavaScript',
    price: 1000,
    description: 'description',
});
function loggerArray([a,b,...params]){ // [a,b] là các tham số đầu tiên, ...params là các tham số còn lại ...params là rest parameter
    console.log(params);// [ 3, 4 ]
}

loggerArray([1,2,3,4]); // [ 3, 4 ]
//rest parameter: là một tham số đặc biệt trong hàm, nó cho phép bạn truyền một số lượng không xác định các đối số vào hàm và nhóm chúng thành một mảng.