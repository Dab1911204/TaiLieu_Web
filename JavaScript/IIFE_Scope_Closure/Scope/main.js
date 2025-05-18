/**
 * Scope - Phạm vi
 * -Các loại phạm vi:
 *      +Global-Toàn cầu
 *      +Code block - Khối mã:let,const
 *      +Local scope - Hàm:var,function
 * -Khi gọi mỗi hàm luôn cho 1 phạm vi mới đc tạo 
 * -các hàm có thể truy cập các biến đc khai báo trong phạm vi của nó và bên ngoài nó
 * -Cách thức 1 biến đc truy cập
 * -Khi nào biến bị xóa khỏi bộ nhớ
 *      +Biến toàn cầu:Khi khởi động lại trang web biến sẽ bị xóa khỏi bộ nhớ
 *      +Biến trong code block và trong hàm:khi thoát khỏi phạm vi
 *      +Biến trong hàm đc tham chiếu bởi 1 hàm
*/
var mess = "Học về Scope"//phạm vi Global-Toàn cầu:bất khì ở đâu đều có thể truy cập 
console.log(mess)
{
    const age = 18
    console.log(age)
}//Code block - Khối mã:nếu khai báo biến với từ khóa let,const thì cái biến đó chỉ sử dụng đc trong khối đó thôi
//console.log(age)//sẽ ko truy cập đc

function logger (){
    var fullName = "Nguyễn Đức Anh"
    console.log(fullName)
}//Local scope - Hàm:var,function
logger()//tính đến thời điểm gọi hàm này thì sẽ có 2 phạm vi của logger
//console.log(fullName)//sẽ ko truy cập đc
const a = 14
{
    {
        {
            {
                console.log(a)//sẽ báo lỗi bới nó sẽ kiểm tra trong khối có biến nào đc tạo ra ko nếu có nó sẽ lấy cái biến đó 

                const a = 13 //mà biến ở đây đc khai báo sau khi gọi nên sẽ sảy ra lỗi(khi dùng từ khóa const,let)
            }
        }
    }
}

function makeCouter(){
    let couter = 0//trong trường hợp này khi thoát khỏi khối biến này vẫn chưa đc xóa 
    function increase(){
        return ++couter
    }
    return increase
}
const counter = makeCouter()//do sau khi chạy xong hàm thì cái couter sẽ đc lưu lại vào biến toàn cục này
console.log(increase())
console.log(increase())
console.log(increase())