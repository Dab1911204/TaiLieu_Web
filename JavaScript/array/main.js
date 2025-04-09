/**
 * Mảng trong JavaScript - Array
 * 1. Tạo mảng
 *   -cách tạo
 *   -cách truy cập
 *   -kiểm tra data type
 * 2.Truy xuất mảng
 *   -lấy độ dài mảng
 *   -lấy phần tử theo index
 */
// Cách 1.
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
    'Dart',
    'Python',
    null,
    undefined,
    function() {},
    {},
    123
];
console.log(languages);
//Cách 2.
// var languages = new Array(
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     'Dart',
//     'Python',
//     null,
//     undefined,
//     function() {},
//     {},
//     123
// );

console.log(typeof languages);
console.log(Array.isArray(languages));
console.log(languages.length);
console.log(languages[0]);