//HTML DOM (Document Object Model)
/**
 * 1. Element : lấy qua id, class, tag, css selector, html collection
 * 2. Attribute: là các thuộc tính lằm trong thẻ mở của tag, html collection
 * 3. Text: là nội dung của thẻ
 */
//InnerText,textContent
var headingElement = document.querySelector('.heading1');

console.log(headingElement.innerText); // lấy nội dung của thẻ, không lấy nội dung của thẻ con
console.log(headingElement.textContent); // lấy nội dung của thẻ, lấy cả nội dung của thẻ con
console.log(headingElement.innerText === headingElement.textContent); // true
console.log(headingElement.innerText === headingElement.innerHTML); // false
headingElement.innerText = 'Hello World'; // thay đổi nội dung của thẻ, không thay đổi nội dung của thẻ con
headingElement.textContent = 'Hello World'; // thay đổi nội dung của thẻ, thay đổi nội dung của thẻ con
headingElement.innerText = '<h1>Hello World</h1>'; // thay đổi nội dung của thẻ, không thay đổi nội dung của thẻ con
var headingElement2 = document.querySelector('.heading2');
console.log(headingElement2.innerText); // lấy nội dung của thẻ, không lấy nội dung của thẻ con bỏ qua khoảng trắng trong thẻ(trả lại những j đc nhìn thấy)
console.log(headingElement2.textContent); // lấy nội dung của thẻ, lấy cả nội dung của thẻ con lấy cả khoảng trắng trong thẻ(Trả lại những j thật sự ở trong element)
var headingElement3 = document.querySelector('.heading3');
console.log(headingElement3.innerText); // lấy nội dung của thẻ, không lấy nội dung của thẻ con bỏ qua khoảng trắng trong thẻ(trả lại những j đc nhìn thấy)
console.log(headingElement3.textContent); // lấy nội dung của thẻ, lấy cả nội dung của thẻ con lấy cả khoảng trắng trong thẻ(Trả lại những j thật sự ở trong element)
headingElement2.innerText = `

Hello World2

`;//xuống dòng sẽ tự tạo ra thẻ <br> trong html
headingElement3.textContent = `

Hello World3

`;//có xuống dòng trong thẻ nhưng ko tạo ra thẻ <br> trong html