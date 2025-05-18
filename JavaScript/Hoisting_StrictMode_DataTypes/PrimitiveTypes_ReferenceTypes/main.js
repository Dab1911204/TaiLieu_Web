/**
 * Value Types & Reference Types
 * 1.Value Types(Primitive data Types)
 * -String
 * -Number
 * -BigInt
 * -Symbol
 * -undefined
 * -null
 * 2.Reference Types
 * -Object
 * -Array
 * -Function
 * Data types with functions
 * -Value types
 * -Reference Types
 */

//Value types
let a = 1;//tạo ra 1 ô nhớ và gán giá trị 1
let b = a;//tạo 1 ô nhớ có giá trị giống với a
a = 2;//2 ô nhớ khác nhau lên ko thay đổi
console.log(b);//1

//Reference Types
let c = {
    name:"Nguyễn Văn A"
}//tạo biến c,cấp phát ô nhớ,lưu{name:"Nguyễn Văn A"} vào ô nhớ,trả về địa chỉ đã lưu và gán cho biến a
let d = c;//tạo biến d,trỏ biến d tới cùng ô nhớ của biến v => c và d cùng 1 địa chỉ ô nhớ chứa objcet
c.name = "Nguyễn Văn B";
//chỉ tạo ra 1 ô nhớ d và c trỏ đến địa chỉ ô nhớ đó
console.log(d);//{name:"Nguyễn Văn B"}

let e = {
    name:'Nguyễn Văn A'
}
e = {
    name:'Nguyễn Văn A',
    age:10
}
//biến e sẽ tạo ra 2 ô nhớ mỗi ô nhớ sẽ chứa 1 objcet

const student = {
    name:'Đức Anh',
    profiler:{
        firstName:'Đức',
        lastName:'Anh',
        introduction:'Nam'
    }//nó sẽ tạo 1 ô nhớ này trước và gán vào cho key profiler
}//sau đó nó sẽ tạo 1 ô nhớ này và gán địa chỉ cho biến student

//Value types
function sum(a1,b1){//ở đấy nó sẽ ngầm tạo ra 2 biến a1 và b1 và gán các tham số chuyền vào cho a1 và b1
    //let a1 = f
    //let b1 = g
    a1 = 0
    b1 = 0
    console.log(a1,b1)
}
const f = 1
const g = 2
sum(f,g)
console.log(f,g)//f,g sẽ ko có thay đổi tại chỉ thay đổi ô nhớ của biến a1,b1 trong hàm

//Reference Types
function func(obj){
    //let obj = a
    obj.name = 'Mercedes'
    console.log(obj)
}
const a2 = {
    name:'BMW'
}
func(a2)
console.log(a2)

//cách để tạo ra 1 vùng nhớ mới ko bị ảnh hưởng để obj chuyền vào

function createCar (obj){
    // obj = JSON.parse(JSON.stringify(obj))
    obj = {...obj}//cách này chỉ có thẻ kéo đc 1 cấp key trong obj thôi
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name:'BMW'
}

const newCar = createCar(car)
console.log(car)
console.log(newCar)

//lưu ý
const car1 = {
    name:"BMW"
}
const car2 = {
    name:"BMW"
}
const car3 = car1
console.log(car1 === car2) //false
console.log(car1 === car3) //true
