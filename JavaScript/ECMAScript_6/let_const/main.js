//1. Var | Let, Const:Scope, Hoisting
//Scope: Phạm vi truy cập biến
// Hoisting: Nâng biến lên đầu hàm hoặc khối lệnh
//2.Cosnst | Let,Var: Assignment
//Assignment: Gán giá trị cho biến

//Scope
//Code block: if else,loop,{},...

{
    var x = "JavaScript basic!";
    let y = "JavaScript basic!";
    const z = "JavaScript basic!";
}
console.log(x); // JavaScript basic!
console.log(y); // không thể truy cập biến y trước khi khởi tạo(ReferenceError: Cannot access 'y' before initialization)
console.log(z); //không thể truy cập biến z trước khi khởi tạo(ReferenceError: Cannot access 'z' before initialization)

{
    const a = "JavaScript basic!";
    //const a = 123;//cùng block không thể khai báo lại biến b(Identifier 'b' has already been declared)
    {
        {
            const a = 123;
            console.log(a);
        }
    }
}

a = 1;//được hỗ trợ hoisting và hoistinh chỉ đc hỗ trợ với var còn let, const thì không
var a;//sẽ nhấc lên trên lệnh gán a = 1

const a = 1;
//a = 4;//không thể gán lại giá trị cho biến a(Assignment to constant variable.)

const a = {
    name: "JavaScript basic!",
    age: 18,
}
a.name = "JavaScript"; //có thể thay đổi giá trị của thuộc tính name trong object a

//kết luận
//code thuần:var
//Khi có sử dụng thư viện (Bable, React, Vue, Angular): let, const
//Khi định nghĩa biến không thay đổi giá trị: const
//Khi định nghĩa biến có thể thay đổi giá trị: let
