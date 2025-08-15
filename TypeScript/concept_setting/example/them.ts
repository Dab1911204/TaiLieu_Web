//1.kiểu void
// const hello = (fullName: String): void => {
//     console.log(`Xin chào ${fullName}`)
// }
//2.Generics
//Ví dụ: 1(ko dùng Generics)
//ví dụ 1.1:return kiểu number
// const reverseArray1 = (array:number[]):number[] => {
//     const newArray = array.reverse()
//     return newArray
// }

// const test1 = reverseArray1([1,2,3,4,5])
// console.log(test1)

// const reverseArray2 = (array:String[]):String[] => {
//     const newArray = array.reverse()
//     return newArray
// }

// const test2 = reverseArray2(["a","b","c"])
// console.log(test2)
//Ví dụ: 2(dùng Generics)(T:type,đặt là ký tự j cũng đc)
// const reverseArray1 = <T>(array: T[]): T[] => {
//     const newArray = array.reverse()
//     return newArray
// }
// const test1 = reverseArray1([1,2,3,4,5])
// const test2 = reverseArray1(["a","b","c"])

//Union type:Kết hợp nhiều kiểu dữ liệu thành 1 dữ liệu mới
// interface Product{
//     id:String,
//     title:String,
//     price:String,
//     rating:number|string,//Union type
//     status:"initial" | "doing" | "finish" | "pending" | "notFinish"//Union type
// }

// Type alias:cho phép tạo ra 1 tên tùy chỉnh để đặt tên cho các kiểu dữ liệu
// type StatusType = "initial" | "doing" | "finish" | "pending" | "notFinish"
// type RatingType = number | string

// interface Product{
//     id:String,
//     title:String,
//     price:String,
//     rating:RatingType,
//     status:StatusType
// }

// const product:Product = {
//     id:"jsjs",
//     title:"String",
//     price:"String",
//     rating:0,
//     status:"initial"
// }

//intersection type (hợp 2 Interface thành 1)
// interface Account {
//     readonly id:String,
//     fullName:String,
//     age?:Number,
// }
// interface Contact {
//     hotline:String,
//     email?:String,
// }
// interface Social {
//     zalo?:String,
//     facebook?:String,
//     tiktok?:String
// }
// type AccountContact = Account & Contact & Social
// const user:AccountContact = {
//     id:"kkkkk",
//     fullName:"A",
//     hotline:"0123456789",
// }

//Declaration merging(Hợp 2 Interface trùng tên thành 1)
// interface User {
//     readonly id:String,
//     fullName:String,
// }
// interface User{
//     email:String,
//     age?:Number
// }
// const user1:User={
//     id:"ksjsajdja",
//     fullName:"A",
//     email:"A",
//     age:10
// }
// console.log(user1)

//Partial<Type> Thay đổi tất cả thuộc tính trong 1 đối tượng thành tùy chọn (optional)
// interface User {
//     readonly id:String,
//     fullName:String,
//     phone:String
// }
// const user1:User={
//     id:"ksjsajdja",
//     fullName:"A",
//     phone:"0123456789"
// }
// const user2:Partial<User>={
//     id:"ksjsajdja",
//     fullName:"A",
// }

//Requirde<Type> Thay đổi tất cả các thuộc tính trong 1 đối tượng thành bắt buộc.
// interface Product{
//     id:String,
//     title:String,
//     price?:String,
//     description?:String,
// }
// const product1:Product = {
//     id:"jsjs",
//     title:"String",
// }
// const product2:Required<Product> = {
//     id:"jsjs",
//     title:"String",
//     price:"String",
//     description:"String"
// }

//Omit<Type,Keys> Xóa 1 hoặc nhiều thuộc tính ra khỏi đối tượng 
// interface Product{
//     id:String,
//     title:String,
//     price?:String,
//     description?:String,
//     discount:String
// }
// const product1:Omit<Product,"discount"> = {
//     id:"jsjs",
//     title:"String",
// }//Xóa đi discount


//Pick<Type,Keys> Xóa tất cả các thuộc tính ra khỏi đối tượng,ngoài trừ các thuộc tính muốn dữ lại
// interface Product{
//     id:String,
//     title:String,
//     price?:String,
//     description?:String,
//     discount?:String
// }
// const product1:Pick<Product,"id"|"title"> = {
//     id:"jsjs",
//     title:"String",
// }//Chỉ đc phép nhập id và title

//Readonly<Type> Tất cả các trạng thái trong đối tượng thành trạng thái chỉ đọc,không sửa đc
interface Product{
    id:String,
    title:String,
    price?:String,
    description?:String,
    discount?:String
}
const product1:Readonly<Product> = {
    id:"jsjs",
    title:"String",
    price:"String",
}
// product1.id = "jsjs"//không thể thay đổi