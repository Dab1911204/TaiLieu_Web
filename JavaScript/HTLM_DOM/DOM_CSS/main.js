//HTML DOM (Document Object Model) :DOM là viết tắt của Document Object Model - một mô hình biểu diễn tài liệu dạng cây trong các tài liệu HTML hoặc XML.
//  DOM cho phép các lập trình viên truy cập và thay đổi nội dung,cấu trúc cũng như các kiểu của trang web thông qua ngôn ngữ lập trình, như JavaScript
/**
 * 1. Element : là thẻ tag trong html(H1, div, p, a, input, form, ...)
 * 2. Attribute: là thuộc tính của thẻ(href, src, id, class, style, ...)
 * 3. Text:
 */
var boxElement = document.querySelector(".box");
console.log(boxElement.style); //trả về các thuộc tính css của thẻ box
//cách 1 
// boxElement.style.width = "200px"; //thay đổi chiều rộng của thẻ box
// boxElement.style.height = "200px"; //thay đổi chiều cao của thẻ box
// boxElement.style.backgroundColor = "red"; //thay đổi màu nền của thẻ box

//cách 2
Object.assign(boxElement.style, {
  width: "200px",
  height: "200px",
  backgroundColor: "red",// có thể chuyển mã thập lục phân 
}); //thay đổi chiều rộng, chiều cao và màu nền của thẻ box
console.log(boxElement.style.width); //trả về chiều rộng của thẻ box