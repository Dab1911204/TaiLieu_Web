Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {
       result = callback(result, this[i], i, this);
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce2((total, value,index,array) => {
    console.log(total, value, index, array);
    return total + value;
}, 0);

console.log(result); // 15

function arrToObj(arr){
    return arr.reduce(function(a,b){
       a[b[0]] = b[1];
       return a
    },{});
}
 
// Expected results:
var arr = [
    ['name', 'Nguyễn Văn A'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Nguyễn Văn A', age: 18 }

var title = "Javascript: The Definitive Guide";
console.log(title.includes("Javascript"),1); // false
console.log(title.includes("Javascript")); // true

var courses = ['Javascript', 'PHP', 'Dart'];
console.log(courses.includes("Javascript")); // true
console.log(courses.includes("Java",1)); // false
console.log(courses.includes("Java")); // false
console.log(courses.includes("Java",-1)); // false tìm từ vị chí cources.length + (-1)