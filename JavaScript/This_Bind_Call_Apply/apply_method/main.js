//Apply:phương thức này cho phép gọi 1 hàm với 1 this (tức là bind 1 cái this ms cho cái hàm đó)
//và chuyển đổi số cho hàm gốc dưới dạng 1 mảng(giống với call nhưng chuyển đối số lại là 1 mảng)
//VD1:
// const teacher = {
//     firstName:"Văn",
//     lastName:"A",
// }
// function greet(greetinng,message){
//     return `${greetinng} ${this.firstName} ${this.lastName}. ${message}`
// }

// let result = greet.apply(teacher,['Xin chào','(1 giáo viên)'])
// console.log(result)//Xin chào Văn A. (1 giáo viên)
// //so sánh với call
// result = greet.call(teacher,'Xin chào','(1 giáo viên)')
// console.log(result)//Xin chào Văn A. (1 giáo viên)

//VD2:(sử dụng khĩ thuật function borrowing)
// const teacher = {
//     firstName:"Văn",
//     lastName:"A",
//     isOnline:false,
//     goOnline(){
//         this.isOnline = true
//         console.log(`${this.firstName} ${this.lastName} đang online`) 
//     },
//     goOffline(){
//         this.isOnline = false
//         console.log(`${this.firstName} ${this.lastName} đang offline`)
//     }
// }
// const me = {
//     firstName:"Đức",
//     lastName:"Anh",
//     isOnline:false,
// }
// console.log(`Teacher: ${teacher.isOnline}`)
// teacher.goOnline()
// console.log(`Teacher: ${teacher.isOnline}`)
// console.log(`-------------------------------`)
// console.log(`Student: ${me.isOnline}`)
// teacher.goOnline.apply(me)
// console.log(`Student: ${me.isOnline}`)

//VD3:Extends
function Animal(name,weight){
    this.name = name
    this.weight = weight
}
function Parrot(){
    //argument:đại diện cho nhứng tham số đc chuyền vào trong hàm(nó có tính chất tương tự cái mảng)
    Animal.apply(this,arguments)
    this.speak = function(){
        console.log('Nhà có khách!')
    }
}
const conVet = new Parrot('Vẹt',300)
console.log(conVet)

function fn(){}
//Giống nhau giữa 3 method(bind,call,apply)
//-Cú pháp truy cập.(VD fn.bind(),fn.call(),fn.apply())
//-Đều là các method được kế thứa từ Function.prototype
console.log(fn.bind === Function.prototype.bind)
console.log(fn.call === Function.prototype.call)
console.log(fn.apply === Function.prototype.apply)

//Khác nhau
/**
 * Bind method
 * -trả ra hàm với this tham chiếu tới đối tượng mà mình muốn
 * -Không thực hiện gọi hàm
 * -Nếu được bind kèm các đối số thì các đối số này sẽ đc ưu tiên hơn
*/
/**
 * Call method
 * -Thực hiện bind this với đối tượng chỉ định và thực hiện gọi hàm
 * -Nhận các đối số cho hàm gốc 
*/
/**
 * Apply method
 * -Thực hiện bind this với đối tượng chỉ định và thực hiện gọi hàm
 * -Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng
*/