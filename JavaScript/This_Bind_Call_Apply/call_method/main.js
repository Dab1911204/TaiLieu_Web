//call:là phương thức trong prototype của function constructor,phương thức này đc sửa dụng để gọi hàm và cũng có thể bind function cho hàm
// function random(){
//     console.log(Math.random())
// }
// //gọi hàm với call method
// random.call()

// //gọi hàm và bind method
// const teacher = {
//     firstName:"Văn",
//     lastName:"A",
// }

// const me = {
//     firstName:"Đức",
//     lastName:"Anh",
//     getFullName(){
//         console.log(this)
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }
// me.getFullName.call()//gọi với call thì this lại là window khi có strict mode lại thành undefined
// me.getFullName.call(me)//Đức Anh
// me.getFullName.call(teacher)//Văn A
// //call khác với bind ở chỗ là call ràng buộc và gọi hàm luôn còn bind chỉ ràng buộc thôi và chưa gọi hàm

//lưu ý trong strict mode thì vấn có this nếu đc bind
// "use strict"
// this.firstName="Đức"
// this.lastName="Anh"
// function getFullName1(){
//     console.log(this)
//     console.log(`${this.firstName} ${this.lastName}`)//ở đây this chính là undefined nên sẽ gây lỗi
// }
// //getFullName()//undefined
// getFullName1.call(this)//Vì this đã đc ràng buộc lên strict mode sẽ nhận this là window

//có thể thể hiện tính kế thừa (extends) trong OOP
function Animal(name,weight){
    this.name = name
    this.weight = weight
}
function Chicken(name,weight,legs){
    Animal.call(this,name,weight)//gọi Animal và bind cái this là chicken và chuyền các tham số tương ứng
    this.legs = legs
}
const ducAnh = new Chicken('Nguyễn Đức Anh',66,2)
console.log(ducAnh)

//mượn hàm (function borrowning), thêm ví dụ với arguments
// function logger(){
//     console.log(arguments)//gần giống với array(cũng đánh index) mà sẽ nhưng ko có nhiều hàm như array
//     arguments.array.forEach(element => {
            
//     });//sẽ lỗi ngay bởi arguments ko có hàm forEach
// }
//nên ta sẽ mượn hàm cho arguments từ array
function logger(){
    //cách 1:
    // Array.prototype.forEach.call(arguments,function(item){
    //     console.log(item)
    // })//dùng call để mượn hàm cho arguments
    //cách 2:
    [...arguments].forEach(function(item){
        console.log(item)
    })
    //cách 3:
    Array.from(arguments).forEach(function(item){
        console.log(item)
    })
}
logger(1,2,3,4)