//Event listener
//1. xử lý nhiều việc khi 1 event xảy ra
//2. lắng nghe / hủy bỏ lắng nghe sự kiện
var btn = document.getElementById("btn");
console.log(btn);
// btn.onclick = function() {
//     console.log("Việc 1");
//     console.log("Việc 2");
//     alert("Việc 3");
// }
// setTimeout(function() {
//     btn.onclick = function() {    } 
// }, 3000);//ghi đè lên onclick
//onclick là 1 key trong object event nên có thể bị ghi đè
// btn.addEventListener("click", function(e) {
//     console.log(Math.random());
// });
// btn.addEventListener("click", function(e) {
//     console.log(Math.random());
// });
// btn.addEventListener("click", function(e) {
//     console.log(Math.random());
// });
//mỗi 1 addEventListener sẽ đc gọi theo thứ tự đc add vào 

function viec1() {
    console.log("Việc 1");
}
function viec2() {
    console.log("Việc 2");
}
function viec3() {
    alert("Việc 3");
}
btn.addEventListener("click", viec1);
btn.addEventListener("click", viec2);
setTimeout(() => {
    btn.removeEventListener("click", viec1);
}, 3000);
//event listener có thể xóa cụ thể 1 event nào đó
//Lưu ý: Nên sử dựng DOM event để làm với những thao tác đơn giản(ít công việc),còn với những thao tác phức tạp(nhiều công việc) thì nên sử dụng event listener 