//forEach((currentValue,index,array) =>{...})
//every((currentValue,index,array) =>{...})
//some((currentValue,index,array) =>{...})
//find((currentValue,index,array) =>{...})
//filter((currentValue,index,array) =>{...})
//map((currentValue,index,array) =>{...})
//reduce((accumulator,currentValue,index,array) =>{...},initialValue)

//currentValue:phần tử hiện tại đang xử lý
//index:chỉ số của phần tử
//array:mảng hiện tại đang gọi hàm
//accumulator:giá trị của lệnh return sau mỗi lần lặp
//initialValue:Giá trị khởi tạo ban đầu (không bắt buộc)

let courses = [
    {
        id: 1,
        name : "JavaScript",
        coin : 250
    },
    {
        id: 2,
        name : "HTML & CSS",
        coin : 0
    },
    {
        id: 3,
        name : "Ruby",
        coin : 0
    },
    {
        id: 4,
        name : "PHP",
        coin : 400
    },
    {
        id: 5,
        name : "ReactJs",
        coin : 500
    }
];

courses.forEach(function (value){ // vòng lặp sẽ callback hàm function này với mỗi phần tử trong mảng
    console.log(value);
});

let allIsFree = courses.every(function (value){ // trả về true nếu tất cả phần tử trong mảng thỏa mãn điều kiện của hàm callback
    return value.coin === 0;
});

console.log("every : "+allIsFree);

let haveACourseFree = courses.some(function (value){ // trả về true nếu có ít nhất 1 phần tử trong mảng thỏa mãn đk của hàm callback
    return value.coin === 0;
});

console.log("some : "+haveACourseFree);

let findFirstCourseFree = courses.find(function (value){ // tìm phần thỏa mã điều kiện của hàm callback(tìm thấy sẽ dừng lại)
    return value.coin === 0;
});

console.log("find : "+findFirstCourseFree);

let findAllFreeCourse = courses.filter(function (value) { // trả về mảng mới chứa các phần tử thỏa mãn đk đc tìm thấy 
    return value.coin === 0;
})

console.log("filter : "+findAllFreeCourse);

function couseHandler(course, index, originArray){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray
    };
}
var newCourses = courses.map(couseHandler); //function đc callback trả về cái j thì map sẽ nhận đc cái đó 

console.log(newCourses);

var totalCoin = 0;
for (var course of courses){
    totalCoin += course.coin;
}
console.log(totalCoin);

function coinHandler(accumulator, currentValue, currentIndex, originArray){ //accumulator: biến tích trữ, currentValue: giá trị hiện tại, currentIndex: vị trí hiện tại, originArray: mảng gốc
    // console.table({
    //     'Lặp': currentIndex,
    //     'Biến tích trữ': accumulator,
    //     'Giá khóa học': currentValue.coin,
    //     'Tổng tiền': accumulator += currentValue.coin
    // });
    return accumulator += currentValue.coin;
}
var totalCoin2 = courses.reduce(coinHandler, 0); // hàm reduce sẽ trả về 1 giá trị duy nhất(0 đc gán cho giá trị ban đầu của accumulator,conrses là originArray)
var i = 0;
var totalCoin = courses.reduce(function (accumulator, currentValue){
    i++;
    console.log(`Lần lặp thứ ${i}: ${accumulator}`,currentValue);
    return accumulator += currentValue.coin;
});//nếu ko chuyền vào tham số t2 thì nó sẽ mặc định lấy phần tử đầu tiên của mảng làm giá trị ban đầu của accumulator

var totalCoin3 = courses.reduceRight(coinHandler, 0); // duyệt từ phải qua trái

var nummbers = [100, 200, 300, 400];
var total = nummbers.reduce(function (a, b){
    return a + b;
});// ko cần chuyền tham số thứ 2 vào hàm khi tham số đầu vào là number có cùng kiểu dữ liệu vs đầu ra mong muốn.

//flat - "làm phẳng" mảng từ depth array - "Mảng sâu" 
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flatOutput, depthItem){//flatOutput: mảng đã làm phẳng, depthItem: phần tử hiện tại của mảng
    return flatOutput.concat(depthItem);
},[]);
console.log(flatArray);

var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'JavaScript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
];

var newCourses = topics.reduce(function (courses, topic){
    return courses.concat(topic.courses);
},[]);
console.log(newCourses);

var html = newCourses.map(function (course){
    return `<div>
        <h2>${course.title}</h2>
        <p>ID: ${course.id}</p>
        </div>`;
});
console.log(html.join(''));