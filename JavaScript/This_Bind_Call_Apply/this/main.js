//'use strict'
//đối tượng
const iPhone = {
    //thuộc tính-property
    name:'iPhone14',
    color:'Pink',
    weight:300,
    //Phương thức
    takePhone(){
        console.log(this)
    },
    objChild:{
        name:'objChild',
        methodChild(){
            console.log(this)
        }
    }
}
//từ khóa this sẽ trả về chính đối tượng nó thuộc về và ở đây nó sẽ trả về đối tượng làm iPhone(cách nhận biết đơn giản là cứ thằng nào chấm đến phương thức thì this chính là thằng đó)

console.log(iPhone)
console.log(iPhone.takePhone())//ở đây thì this là object iPhone
iPhone.objChild.methodChild()//ở đây this là objChild

//Đối tượng this trong phương thức tham chiếu đến truy cập phương thức
//khái niệm hàm tạo
function car (name,color,weight){
    this.name=name;
    this.color=color;
    this.weight=weight;
    this.run=function(){
        console.log('Running...',this)
    }
}

const mercedesS450 = new car('Mercedes S450','black',2000)
console.log(mercedesS450)
mercedesS450.run()

const button = document.querySelector('button')

button.onclick = function(){
    console.log(this)
    console.dir(this.innerText)//in ra dưới dạng object
}

//this đứng ngoài phương thức tham chiếu đến đối tượng global
console.log(this)//chả về window

//lưu ý nhưng trong Strict Mode thì từ khóa this ko đc chấp nhận nó sẽ là undefined
// function myFunc(){
//     console.log(this)
// }

// myFunc()//undefined
// window.myFunc()//window

function Car1 (name,color){
    this.name=name;
    this.color=color;
    // this.run=function(){
    //     console.log('Running...',this)
    // }
}
Car1.prototype.run=function(){
    //Context
    // function test(){
    //     console.log(this)
    // }
    // test()//sẽ là window vì trước test ko có . cái j 
    const test = () => {
        console.log(this)
    }
    test()//arrow function nó ko có context nên nó sẽ trỏ lại về car1
    
}
//this trong hàm tạo đại diện cho đối tượng đc khởi tạo
const prosche = new Car1('prosche','white')
const mercedess450 = new Car1('Mercedes S450','black')
console.log(mercedesS450)
console.log(prosche)
mercedess450.run()
prosche.run()