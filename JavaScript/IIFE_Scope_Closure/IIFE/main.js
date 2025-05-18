//IIFE - Immediately Invked Function Expression: là 1 Function Expression đc gọi ngay lập tức
//IIFE là 1 hàm "private" tương đương những j có trong hàm này đều là private(sử dụng đệ quy đê gọi lại ko thể gọi đc bên ngoài)
var fullName = 'Nguyễn Đức Anh'
;(function thongbao(mess){//nên sử dụng ';' như dòng 4 khi sử dụng IIFE
    console.log(`Xin chào ${mess}`)
})//tạo ra IIFE
(fullName)//gọi IIFE
//Dấu '(',')' sẽ đc hiểu như là viết liền luôn nên khi khai báo biến (dòng 2) sẽ bị lỗi.
//Nên cần dấu ';' ở cuối câu lệnh đứng trước IIFE hoặc viết trước luôn 1 IIFE để ngăn cách
// thongbao(fullName)gọi lại hàm này sẽ lỗi
let i = 0
;(function myFunc(){
    i++
    console.log(i)
    if(i<10)
        myFunc()
})()
//IIFE:sử dụng khi mà muốn 1 đoạn mã chạy ngay nhưng lại muốn biến và hàm lại bị ảnh hướng đến code bên ngoài (thường dùng để viết thư viện)
//IIFE:giống như đóng gói trong thông tin trong java.
//1 ví dụ khác.
const app = {
    cars:[],
    add(car){
        this.cars.push(car)
    },
    edit(index,car){
        this.cars[index] = car
    },
    delete(index){
        this.cars.splice(index,1)
    }
}
app.cars = null//dòng này sẽ có thể phá hỏng cả bài code tất cả các phương thức trong app để ko thể sử dụng đc
//cách khắc phục vấn đề trên
const app1 = (function(){
    const cars = []
    return{
            add(car){
            cars.push(car)
        },
        edit(index,car){
            cars[index] = car
        },
        delete(index){
            cars.splice(index,1)
        }
    }
})()