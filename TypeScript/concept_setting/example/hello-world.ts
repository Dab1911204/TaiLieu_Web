//phần 1
// var hello = "Hello World!"
// console.log(hello)

//dùng lệnh "tsc hello-world.ts" để biên dịch sang file js và tất cả những j có ở file này thì bên js đều sẽ có

//kiểu Number

// let a:Number = 10
// let b:Number = 10.5
// a="nguyễn đức anh" nếu viết js thuần thì sẽ ko sao nhưng trong ts thì sẽ bị lỗi
// a = 20
// console.log(a)
// console.log(b)

//kiểu String

// let fullName:String = "Nguyễn Đức Anh"
// //fullName = 10 nếu viết js thuần thì sẽ ko sao nhưng trong ts thì sẽ bị lỗi
// console.log(fullName)

//Kiểu Boolean

// let check:Boolean = true
// //check = 10 nếu viết js thuần thì sẽ ko sao nhưng trong ts thì sẽ bị lỗi
// console.log(check)

//Kiểu Object 

// const user:{
//     fullName:String,
//     email:String,
//     age:Number
// } = {
//     fullName: "Nguyễn Đức Anh",
//     email:"nguyenducanhpx2004@gmail.com",
//     age:10
// }
// console.log(user)

//Interface

// interface Socials {
//     facebook?:String,
//     zalo?:String
// }

// interface User{
//     fullName:String,
//     email:String,
//     age?:Number,//có dấu ? thì trường này có thể có hoặc ko 
//     socials?:Socials
// }

// const user1:User = {
//     fullName: "Nguyễn Đức Anh",
//     email:"nguyenducanhpx2004@gmail.com",
//     age:21,
//     socials:{}
// }
// const user2:User = {
//     fullName: "Lê Thị Ngọc Ánh",
//     email:"lethingocanhh2808@gmail.com",
// }
// console.log(user1)
// console.log(user2)

//extend interface

// interface Account {
//     fullName:String,
//     email:String,
//     phone:String,
//     password:String
// }

// interface AccountAdmin extends Account{
//     roleId:String,
//     hotline?:String
// }

// interface AccountUser extends Account{
//     score:number,
//     cartId:String
// }

// const admin:AccountAdmin = {
//     fullName:"A",
//     email:"A",
//     phone:"A",
//     password:"A",
//     roleId:"A",
//     hotline:"A"
// }

// const user:AccountUser = {
//     fullName:"B",
//     email:"B",
//     phone:"B",
//     password:"B",
//     score:10,
//     cartId:"B"
// }
// console.log(admin)

//Kiểu Array
// const array:Number[] = []
// array.push(1)
// array.push(2)
// array.push(3)
// //array.push("")lỗi
// console.log(array)
// const infoUser:(String|Number)[] = ["",10,""]
// interface User{
//     fullName:String,
//     email:String,
//     age?:Number,//có dấu ? thì trường này có thể có hoặc ko
// }
// const userList:User[] = []
// const user1:User = {
//     fullName: "Nguyễn Đức Anh",
//     email:"nguyenducanhpx2004@gmail.com",
//     age:21,
// }
// userList.push(user1)

//Kiểu Tuple:Giống với 1 mảng nhưng số lượng phần tử trong Tuple là cố định
//Types của các phần từ trong mảng đc chỉ định trước và ko cần giống nhau
// let infoUser:[String,number,boolean]
// //infoUser = ["A" ,21,true,""] lỗi
// infoUser = ["A" ,21,true]

//Readonly:đc sử dụng để chỉ định rằng 1 biến hoặc thuộc tính ko thể đc gán lại sau khi nó đã đc khời tạo
// interface User{
//     readonly fullName:String,
//     email:String,
//     age?:Number
// }
// const user1:User = {
//     fullName:"A",
//     email:"A",
//     age:10
// }
// //user1.fullName = "B" lỗi vì chỉ đc khởi tạo 1 lần
// console.log(user1)

//Declaration functions
// function sum1(a:Number,b){
//     return a+b
// }
// // function sum2(a:Number,b):Number{
// //     return `${a+b}`
// // } lỗi vì function chả về kiêu number nhưng thực tế lại là String
// const result1=sum1(10,20)
// console.log(result1)
// //console.log(sum1("10",20)) lỗi 

//Expression functions
// const sum2 = function(a:number,b:number):number{
//     return a + b;
// }

//Arrow functions
// const sum3=(a:number,b:number):number => {
//     return a + b;
// }

//Default parameter
// const sum = (a:number,b:number=10):number => {
//     return a + b;
// }
// console.log(sum(10,20))

//Rest parameter
// const sum = (...numbers:number[]) => {
//     const total = numbers.reduce((sum,item)=>sum + item,0)
//     return total
// }
// // console.log(sum(1,2,3,4,"5"))//lỗi
// console.log(sum(1,2,3,4,5))

//Kiểu Enum 
//statusCurrent: 0 --> Initial
//statusCurrent: 1 --> Active
//statusCurrent: 2 --> Inactive
enum Status {
    INITIAL = "Initial",//0
    ACTIVE = "Active",//1
    INACTIVE = "Inactive"//2
}
const statusCurrent:String = "Active"
switch(statusCurrent){
    case Status.INITIAL:
        console.log("Initial")
        break;
    case Status.ACTIVE:
        console.log("Active")
        break;
    case Status.INACTIVE:
        console.log("Inactive")
        break
    default:
        break;
}

//Kiểu any giúp thay đổi kiểu dữ liệu linh hoạt của 1 biến
// let a:any = 20
// a=10
// console.log(a)

//Kiểu Unknown:Tương tự any nhưng an toàn hơn 
// let b:unknown = 20
// b=10
// console.log(b)

//Nhưng an toàn hơn Any
// const getLength = (value:any):number => {
//     return value.length
// }
// let a:String = "Xin chào"
// const lengthA = getLength(a)
// console.log(lengthA)//trả ra 9
// let b:number = 24
// const lengthB = getLength(b)
// console.log(lengthB)//Trả về undefined nhưng ko bão lỗi

// let c:boolean = true
// const lengthC = getLength(c)
// console.log(lengthC)//Trả về undefined nhưng ko bão lỗi

// const getLength = (value:unknown):number => {
//     return value.length//nó sẽ báo lỗi luôn
// }
// const getLength = (value:unknown):number => {
//     if(typeof value === "string"){
//         return value.length
//     }else{
//         return -1
//     }
// }
// let a:String = "Xin chào"
// const lengthA = getLength(a)
// console.log(lengthA)//trả ra 9
// let b:number = 24
// const lengthB = getLength(b)
// console.log(lengthB)//Trả về undefined nhưng ko bão lỗi

// let c:boolean = true
// const lengthC = getLength(c)
// console.log(lengthC)//Trả về undefined nhưng ko bão lỗi