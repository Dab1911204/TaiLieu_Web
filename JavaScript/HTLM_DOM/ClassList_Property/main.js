//HTML DOM (Document Object Model)
//ClassList Property
//add: thêm class vào thẻ html
//remove: xóa class trong thẻ html
//toggle: thêm hoặc xóa class trong thẻ html(nếu có thì xóa, không có thì thêm)
//contains: kiểm tra xem thẻ html có class nào đó hay không

var boxElement = document.querySelector(".box");
console.log(boxElement); // lấy ra thẻ div có class là box
console.log(boxElement.classList); // lấy ra class của thẻ div có class là box
console.log(boxElement.classList.length); // lấy ra số lượng class của thẻ div có class là box
console.log(boxElement.classList[0]); // lấy ra class đầu tiên của thẻ div có class là box
console.log(boxElement.classList.value);
boxElement.classList.add("red","blue"); // thêm class red và blue vào thẻ div có class là box
console.log(boxElement.classList.contains("red")); // kiểm tra xem thẻ div có class red hay không

setTimeout (()=>{
    boxElement.classList.remove("red"); // nếu thẻ div có class red thì xóa, không có thì thêm
    },3000); // sau 1 giây thì thực hiện hàm này

setTimeout (()=>{
    boxElement.classList.toggle("red"); // nếu thẻ div có class red thì xóa, không có thì thêm
    },6000); // sau 1 giây thì thực hiện hàm này