/**
 * Pass by value:Truyền theo giá trị
 * 1.Sao chép giá trị của biến:let y = x;
 * 2.Truyền bản sao vào bên trong hàm
 * -Đặc điểm tham số trong hàm ko làm thay đổi biến bên ngoài hàm
 * 
 * Pass by reference:Truyền theo tham chiếu(js ko có ko hỗ trợ)
 * Truyền trực tiếp tham chiếu của biến vào bên trong hàm
 * -Đặc điểm:gán lại tham số trong hàm,ngay lập tức biến ngoài hàm cũng bị thay đổi
*/

//Pass by value:Truyền theo giá trị
// function changeValue(y){

//     y = 20
// }
// let x = 10
// changeValue(x)
// console.log(x)

//Pass by reference:Truyền theo tham chiếu
function changeValue(y){
    y = {name:"Bob"}//bên ngoài vẫn là John(vì vẫn là gán lại tham số)
    //y.name = "Bob"//bên ngoài sẽ là Bob(vì là gán lại thuộc tính)
}
let x = {name:"John"}
changeValue(x)
console.log(x)
