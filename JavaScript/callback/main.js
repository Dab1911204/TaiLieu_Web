// Callback

// là hàm (function) được truyền qua đối số khi gọi hàm khác
// khi gọi hàm khác

//1. Là hàm
//2. Được truyền qua đối số

function myFunction1(param) {
    console.log(typeof param);
}
function myCallback1() {
    console.log("Hello");
}
function myFunction2(param) {
    if (typeof param === "function") {
        param('Nguyễn Đức Anh');
    }
}
function myCallback2(value) {
    console.log("Hello: " + value);
}
myFunction1(myCallback1)
myFunction2(myCallback2)

var courses = [
    'HTML',
    'CSS',
    'JavaScript'
];
courses.map(function (course, index) {
    console.log(index + ": " + course);
});

var htmls = courses.map(function (course) {
    return `<h2>${course}</h2>`;
});

console.log(htmls.join(''));
Array.prototype.map2 = function (callback) {
    var output = [];
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}
var htmls2 = courses.map2(function (course, index) {
    console.log(index + ": " + course);
});