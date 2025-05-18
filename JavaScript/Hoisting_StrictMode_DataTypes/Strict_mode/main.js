/**
 * Strict mode:báo lỗi hoặc ngăn chặn những đoạn mã ko an toàn hay dễ gây nhầm lẫn
 * -báo lỗi khi gán lại giá trị cho thuộc tính có  writable:false
 * -báo lỗi khi có hàm tham số trùng tên
 * -khai báo hàm code block thì hàm sẽ chỉ thuộc code block thôi 
 * -ko đặt tên biến,tên hàm bằng 1 từ khóa "nhạy cảm" của ngôn ngữ
 * */

"use strict";//thêm dòng này sẽ thì sẽ khắc phục (trước "use strict" ko đc có đoạn code nào ở đằng trước)
// //VD
// fullName = 'Nguyễn Đức Anh'//tạo ra biến fullName ở phạm vi global
// function testFunc(){
//     "use strict";//có thể để đc ở đây để ko cho age hoạt động nhưng fullName vẫn hoạt động
//     age = 18//tạo ra biến fullName ở phạm vi global
// }
// testFunc()
// console.log(fullName)
// console.log(age)

//Strict mode:nếu mà thêm vào đoạn mã trên thì Strict mode sẽ báo lỗi ngay và ko thể thêm vào để tránh ảnh hưởng đến các code khác

// const student = {
//     fullName:'Nguyễn Văn A'
// }//Writable = true(có thể sửa)
// student.fullName='Nguyễn Đức Anh'
// const student = Object.freeze({
//     fullName:'Nguyễn Văn A'
// })//Writable = false(ko thể sửa)
// student.fullName='Nguyễn Đức Anh'//như vậy dòng này ko tác dụng j để thế này sẽ dễ gây nhầm lẫn ta thêm "use strict" thì dòng này sẽ bão lỗi luôn
// console.log(student.fullName)

//cách viết khác ko dùng freeze
const student1 = {}
Object.defineProperty(student1,'fullName',{
    value:'Nguyễn Văn A',
    writable:false
})//chỉ có thể đọc
// const student2 = {
//     fullName:'Nguyễn Văn A'
// }
// delete student2 //ko thể xóa đc object chỉ có thể xóa đc thuộc tính nhưng nó vẫn ko báo lỗi thêm Strict mode sẽ lỗi ngay
// console.log(student2.fullName)
// function sum(a,a){//nếu thêm Strict mode gặp lỗi thế này sẽ báo ngay
//     return a + a;
// }
// console.log(sum(1,2))
// {
//     function sum1(a,b){
//         return a + b;
//     }
// }
// console.log(sum1(1,2))//nếu thêm Strict mode gặp lỗi thế này sẽ báo ngay vì
// var private = 123
// console.log(private)//nếu thêm Strict mode gặp lỗi thế này sẽ báo ngay vì