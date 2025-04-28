//DOM events
//1. input/select
//2.key up/down
var inputElement = document.querySelector("input[type='text']");
console.log(inputElement);
inputElement.onchange = function (e) {
    console.log("onchange event triggered: ", e.target.value)
} 

inputElement.oninput = function (e) {
    console.log("oninput event triggered: ", e.target.value)
} 

var checkboxElement = document.querySelector("input[type='checkbox']");
checkboxElement.onchange = function (e) {
    console.log("checkbox changed: ", e.target.checked)
}
var selectElement = document.querySelector("select");
selectElement.onchange = function (e) {
    console.log("select changed: ", e.target.value)
}
var textElement = document.querySelector(".input-text");
textElement.onchange = function (e) {
    console.log("text changed: ", e.target.value)
}
textElement.onkeydown = function (e) {
    console.log(e.which)
    switch (e.which) {
        case 37:
            console.log("left arrow key pressed")
            break;
        case 38:
            console.log("up arrow key pressed")
            break;
        case 39:
            console.log("right arrow key pressed")
            break;
        case 40:
            console.log("down arrow key pressed")
            break;
        default:
            console.log("other key pressed")
            break;
    }
}