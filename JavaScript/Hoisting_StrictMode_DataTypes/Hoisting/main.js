//Hoisting:đưa lên trên kéo lên trên
//Hoisting với từ khóa var
console.log(age)//undefined
console.log(fullName)//ReferenceError:fullName is not defined
var age = 16//hosting nó sẽ đưa phần khai báo biến lên đầu và gán là undefined, còn gán = 16 sẽ vẫn ở dòng số 5
console.log(age)//nên sau dòng này nó sẽ đưa ra 16

//Hoisting với function declaration
console.log(sum(6,9))//15
function sum(a,b){//nó sẽ đưa cả phần khai báo hàm lên đầu
    return a+b
}

//Hoisting với từ khóa let và const
{
    console.log(fullName)//ReferenceError:cannot access 'fullName' before initialization
    let fullName = "Nguyễn Đức Anh"//vẫn đc hoit lên nhưng ko mang giá trị và đưa vào "Temproal Dead Zone"(Vùng tạm thời ko sử dụng)
    //const tương tự let
}

let fullName = "Nguyễn Đức Anh"

{
    {
        let fullName = "Nguyễn2"
        {
            {
                console.log(fullName)////ReferenceError:cannot access 'fullName' before initialization

                let fullName = "Nguyễn1"//ở đây vẫn sẽ host để khi chạy dòng số 28 hiểu đc trong phạm vi đã có biến fullName rồi nên sẽ ko sử dụng biết bên ngoài
            }
        }
    }
}

//Bonus
const counter1 = makeCounter()
console.log(counter1())//1

function makeCounter(){
    let counter = 0
    return increase
    function increase(){
        return ++counter
    }
    
}