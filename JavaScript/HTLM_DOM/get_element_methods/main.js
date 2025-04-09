//HTML DOM (Document Object Model)
/**
 * 1. Element : lấy qua id, class, tag, css selector, html collection
 * 2. Attribute:
 * 3. Text:
 */
var headingNodeID = document.getElementById('heading')//nếu không tìm thấy thì trả về null
console.log(headingNodeID)//như vậy devtool sẽ hiểu được element đó là gì
console.log({element:headingNodeID})//như vậy devtool sẽ không hiểu được element đó là gì(có thể nhìn thấy đc tất cả thuộc tính của element đó)
var headingNodeClass = document.getElementsByClassName('heading')
console.log(headingNodeClass)
var headingNodeTag = document.getElementsByTagName('p')
console.log(headingNodeTag)

//css selector

var headNode = document.querySelector('.heading-2')
var headNode = document.querySelector('.box .heading-2')
var headNode = document.querySelector('html .box .heading-2')
var headNode = document.querySelector('.box .heading-2:first-child') //lấy ra thẻ có class trong class box và có tên heading-2 đầu tiên
var headNode = document.querySelector('.box .heading-2:nth-child(2)') //lấy ra thẻ có class trong class box và có tên heading-2 thứ 2
console.log(headNode)
var headNode = document.querySelectorAll('.heading-2')
console.log(headNode)
console.log(headNode[1])

//html collection: sử dụng vơi các thẻ form,a,image,...

console.log(document.forms)//thẻ form
console.log(document.forms['form-1'])
console.log(document.forms.form_4)

console.log(document.anchors)//thẻ a
console.log(document.images)//thẻ image

//classname là có output là HTMLCollection (1 mảng) chứa tất cả những tag có classname
//muốn truy vấn trự tiếp đến thẻ có class thì phải dùng querySelector hoặc document.getElementsByClassName("products-list")[0]

var boxNode = document.querySelector('.box-1')
//công việc 1: Sử dụng tới 'boxNode'
// ...
console.log(boxNode)

//công việc 2: Sử dụng tới li element
//là con của '.box-1'
console.log(boxNode.querySelector('li'))
console.log(boxNode.getElementsByTagName('li'))
/*
    querySelector,getElementById sẽ lấy ra element và sẽ chỉ lấy ra 1 element đầu tiên
*/
console.log(document.getElementById('heading'))

/**
 * getElementsByClassName,getElementsByTagName sẽ lấy ra 1 HTMLCollection
 * và sẽ lấy ra tất cả các element có className hoặc tagName giống nhau
*/
console.log(document.getElementsByClassName('heading'))//lấy ra tất cả các thẻ có class là heading
console.log(document.getElementsByClassName('heading')[0])//lấy ra thẻ có class là heading đầu tiên
/**
 * querySelectorAll sẽ lấy ra 1 NodeList
 * và sẽ lấy ra tất cả các element có className hoặc tagName giống nhau
 */
console.log(document.querySelectorAll('.heading'))//lấy ra tất cả các thẻ có class là heading
console.log(document.querySelectorAll('.heading')[0])//lấy ra thẻ có class là heading đầu tiên

//khi thực thi document.write mà HTML DOM chưa chạy xong (chạy chưa đến thẻ </html>) thẻ <script> đặt ở đâu thì nó sẽ hiện thị ở đó
// khi thực thi document.write mà HTML DOM đã chạy xong (chạy hết thẻ </html>) thì nó sẽ ghi đè lên tất cả 
document.write('<h1>hello world</h1>')//thẻ h1 sẽ được thêm vào cuối body