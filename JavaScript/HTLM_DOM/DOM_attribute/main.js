//HTML DOM (Document Object Model)
/**
 * 1. Element : lấy qua id, class, tag, css selector, html collection
 * 2. Attribute: là các thuộc tính lằm trong thẻ mở của tag, html collection
 * 3. Text: là nội dung của thẻ
 */
var headingElement = document.querySelector('h1');
console.log(headingElement); // <h2 id="heading">Hello World</h2>
headingElement.title = 'heading'
headingElement.className = 'heading'
headingElement.id = 'heading'
headingElement.setAttribute ('class', 'head')
headingElement.setAttribute ('id', 'h1')
headingElement.setAttribute ('title', 'heading')
console.log (headingElement.getAttribute('title')); // heading
console.log (headingElement.getAttribute('class')); // head
console.log (headingElement.getAttribute('id')); // h1
console.log (headingElement.id);
console.log (headingElement.className); // head
console.log (headingElement.title); // heading
var headingElement_a = document.querySelector('a');
headingElement_a.href = 'https://google.com'
