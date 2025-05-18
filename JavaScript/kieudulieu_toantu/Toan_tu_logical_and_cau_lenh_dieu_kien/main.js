//Hiểu hơn về câu điều kiện và phép so sánh
var a = 1
var b = 2
var result = a<b
console.log('result:',result)

if (a < b){
    console.log('A < B')
}else{
    console.log('A > B')
}
//Vd về biểu thức điều kiện ko trả về boolean
//toán tử logic thì sẽ chỉ trả về kết quả của 1 trong 2 về tùy từng trường hợp xảy ra
var result1 = a<b && a<0//sẽ trả về false(là kết quả của vế phải)
var result2 = a<b && a>0//sẽ trả về true(là kết quả của vế phải)
console.log('result1:',result1)
console.log('result2:',result2)
/**
 * 6 giá trị khi sang boolen sẽ là false
 * -0
 * -''
 * -null
 * -undefined
 * -NaN
 * -false
*/
//toán tử '&&' ở đây nó sẽ đọc từ trái qua phải cho đến khi gặp 6 giá trị trên và gán lại cho biến còn kho nó sẽ lấy giá trị vế phải cuối cùng
var result3 = 'A' && 'B'
console.log('result3:',result3)//in ra chữ B
var result4 = 'A' && 'B' && 'C'//bởi có nhiều dấu && nên nó sẽ đọc hết cho tới khi thấy 6 giá trị trên hoặc đến về phải cuối cùng
console.log('result4:',result4)//in ra chữ C(cho và if else sẽ là true đk đúng)
var result5 = 'A' && null && 'C'//nếu gặp 1 trong 6 giá trị trên nó sẽ in ra giá trị đó
console.log('result5:',result5)//in ra null(cho và if else sẽ là false đk sai)
//nên khi cho các toán tử logic và vào trong if else nó sẽ hoạt động tương tự
if(result5){
    console.log('điều kiện đúng')
}else{
    console.log('điều kiện sai')
}
//toán tử '||' ở đây nó sẽ đọc từ trái qua phải cho đến khi gặp giá trị ko phải 6 giá trị trên thì nó sẽ dừng gán lại cho lại biến còn ko nó sẽ lấy giá trị vế phải cuối cùng
var result6 = 'A' || 'B'
console.log('result6:',result6)//in ra chữ A
var result7 = null || 'B' || 'C'
console.log('result7:',result7)//in ra chữ B
var result8 = 'A' || null || 'C'
console.log('result8:',result8)//in ra chữ A
if(result8){
    console.log('điều kiện đúng')
}else{
    console.log('điều kiện sai')
}