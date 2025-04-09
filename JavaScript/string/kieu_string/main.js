/*
CHUỖI TRONG JAVASCRIPT
1.Tạo chuỗi
    -Các cách tạo chuỗi
    -Nên dùng cách nào?Lý do?
    -Kiểm tra data type
2.Một số case sử dụng backslash(\)
3.Xem độ dài chuỗi
4.Chú ý độ dài khi viết code
5.Template String ES6
*/

//tạo chuỗi
//c1:
var fullName = 'Nguyễn Đức Anh'

//c2:
var name = new String('Nguyễn Đức Anh')

console.log(typeof name)

var job = 'Nguyễn Đức Anh \'là coder\''

console.log( job)

var ho = 'Nguyen'
var ten = 'Duc Anh'

console.log(`Tôi là: ${ho} ${ten}`) //Template String

console.log("Tôi là: " + ho + " " + ten)