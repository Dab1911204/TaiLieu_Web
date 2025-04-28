//HTML DOM (Document Object Model)
/**
 * 1. Element : lấy qua id, class, tag, css selector, html collection
 * 2. Attribute: là các thuộc tính lằm trong thẻ mở của tag, html collection
 * 3. Text: là nội dung của thẻ
 */
var boxElement = document.querySelector(".box");
console.log(boxElement); // lấy ra thẻ div có class là box
console.log([boxElement]); //xem các thuộc tính của 1 element node
console.log(boxElement.nodeType);// lấy ra kiểu của node, 1 là element node, 3 là text node, 8 là comment node,2 là attribute node
