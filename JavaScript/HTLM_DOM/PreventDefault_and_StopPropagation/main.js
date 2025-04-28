//DOM events
//1. preventDefault: ngăn chặn hành vi mặc định của một sự kiện
//2. stopPropagation: ngăn chặn sự kiện nổi bọt lên các phần tử cha

var aElement = document.links;
for (var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function (event) {
        console.log(event.target.href);
        if(!event.target.href.startsWith("https://www.google")) {
            alert("This link is not valid!");
            event.preventDefault(); //ngăn chặn hành vi mặc định của thẻ a
        }
    };
}
var ulElement = document.querySelector("ul")
ulElement.onclick = function (e) {
    console.log(e.target); 
}
ulElement.onmousedown = function (e) {
    e.preventDefault();//ngăn chặn hành vi mặc định của thẻ ul
}

document.querySelector("div").onclick = function (e) {
    console.log("DIV");
    e.stopPropagation();//ngăn chặn sự kiện nổi bọt lên các phần tử cha
}
document.querySelector("button").onclick = function (e) {
    console.log("Click me");
    e.stopPropagation();//ngăn chặn sự kiện nổi bọt lên các phần tử cha
}