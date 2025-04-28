//JSON 
// 1.là 1 định dạng dữ liệu (chuỗi)
// 2. JSON là viết tắt của JavaScript Object Notation 
// 3.JSON thể hiện đc các kiểu dữ liệu như:Number, String, Boolean, Array, Object

//Mã hóa JSON/Giải mã JSON
//Encoding JSON: Chuyển đổi đối tượng JavaScript thành chuỗi JSON
//Decoding JSON: Chuyển đổi chuỗi JSON thành đối tượng JavaScript
//JSON.stringify(): Chuyển đổi đối tượng JavaScript thành chuỗi JSON
//JSON.parse(): Chuyển đổi chuỗi JSON thành đối tượng JavaScript

// var json = '1'//JSON dạng number
// var json = 'true'//JSON dạng boolean
// var json = '"hello"'//JSON dạng string
// var json = '[1,2,3]'//JSON dạng array
// var json = '{"name":"John", "age":30, "city":"New York"}'//JSON dạng object
// var json = '[{"name":"John", "age":30, "city":"New York"},{"name":"Jane", "age":25, "city":"London"}]'//JSON dạng array of object

//Parse JSON
var a = '1'
console.log(typeof JSON.parse(a))
var b = 'true'
console.log(typeof JSON.parse(b))
var c = '"hello"'
console.log(typeof JSON.parse(c))
var d = '[1,2,3]'
console.log(typeof JSON.parse(d))
var e = '{"name":"John", "age":30, "city":"New York"}'
console.log(typeof JSON.parse(e))
var f = 'null'
console.log(typeof JSON.parse(f))

//Stringify JSON
console.log(typeof JSON.stringify(1))
console.log(JSON.stringify(true))
console.log(JSON.stringify("hello"))
console.log(JSON.stringify([1,2,3]))
console.log(JSON.stringify({"name":"John", "age":30, "city":"New York"}))
console.log(JSON.stringify(null))