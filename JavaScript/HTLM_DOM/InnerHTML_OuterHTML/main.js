//HTML DOM (Document Object Model)
/**
 * 1. Element : lấy qua id, class, tag, css selector, html collection
 * 2. Attribute: là các thuộc tính lằm trong thẻ mở của tag, html collection
 * 3. Text: là nội dung của thẻ
 */
// innerHTML and outerHTML
var boxelement = document.querySelector(".box");
console.log(boxelement); // lấy ra thẻ div có id là box
boxelement.innerHTML = "Hello";
boxelement.innerHTML = "<h1>Hello</h1>"; // Thêm 1 element h1 và 1 text note là "Hello" vào trong thẻ div có class là box
boxelement.outerHTML = '<h1 title="heading" >Hello</h1>';//sẽ ghi đè bên trong thẻ div có class là box bằng thẻ h1 có title là heading và text là Hello
console.log(document.querySelector("h1").innerText);
console.log(boxelement.innerText);//sẽ lấy ra những element con bên trong thẻ div có class là box
var boxelement2 = document.querySelector(".box1");
boxelement2.innerHTML = "<h1>Hello world</h1>"; // Thêm 1 element h1 và 1 text note là "Hello" vào trong thẻ div có class là box
console.log(boxelement2.outerHTML); //lấy ra tất cả các thẻ tính từ thẻ div có class là box1 vào dần bên trong
boxelement2.outerHTML = "<span>Hello world</span>"; // Thay thế thẻ div có class là box1 bằng thẻ span có text là "Hello world"
console.log(boxelement2);//sẽ vẫn còn thẻ div có class là box1 nhưng sẽ ko còn trong DOM mà chỉ có trong bộ nhớ 

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var ul = document.querySelector('.courses-list');
    var chuoi = courses.map(element => `<li>${element}</li>`).join(' ');
    ul.innerHTML = chuoi;
}
render(courses); // gọi hàm render để hiển thị danh sách các khóa học lên trang web