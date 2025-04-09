/*
    Giới thiệu 1 số hàm built-in
        1.Alert
        2.Console
        3.Confirm
        4.Prompt
        5.setTimeout
        6.setInterval
*/


// alert: Hiển thị một thông báo/thông điệp

alert('Hello, I am JavaScript!');

console.log('==============================='); // console
console.error('Hello, I am JavaScript!');
console.warn('==============================='); // console

// console.log: In ra giá trị của biến hoặc thông tin

confirm('Xác nhận bạn đủ tuổi!');
//confirm : chọn ok or cancel

prompt('Bạn bao nhiêu tuổi!');

// prompt: nhập dữ liệu và trả về giá trị nhập vào

setTimeout(() => {
    alert('Hello, I am JavaScript after 3 seconds!');
}, 3000);
//có thể viết bằng cách này 
// setTimeout(function() {
//     alert('Hello, I am JavaScript after 3 seconds!');
// }, 3000);

// setTimeout: chạy một hàm sau khi thời gian đã qua

setInterval(() => {
    alert('Hello, I am JavaScript every 2 seconds!');
}, 2000);

// setInterval: chạy một hàm liên tục theo thời gian nhất định