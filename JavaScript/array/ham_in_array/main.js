/**
 * 1.ToString() - Chuyển mảng thành chuỗi
 * 2.Join() - Chuyển mảng thành chuỗi (tùy chỉnh)
 * 3.Pop() - Xóa phần tử cuối mảng
 * 4.Push() - Thêm phần tử vào cuối mảng
 * 5.Shift() - Xóa phần tử đầu mảng
 * 6.Unshift() - Thêm phần tử vào đầu mảng
 * 7.Splice() - Xóa hoặc thêm phần tử ở giữa mảng
 * 8.Concat() - Nối mảng
 * 9.Slice() - Cắt mảng
 */
// Cách 1.
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
];
languages.le
console.log(languages.toString());
console.log(typeof languages.toString());
console.log(languages.join(' - '));
console.log(languages.pop());
console.log(languages);
console.log(languages.push('Dart'));
console.log(languages);
console.log(languages.shift());
console.log(languages);
console.log(languages.unshift('Python'));
console.log(languages);
console.log(languages.splice(1, 0, 'Java', 'Dart'));
console.log(languages);
console.log(languages.concat(['PHP', 'Ruby']));
console.log(languages.slice(1, 3));