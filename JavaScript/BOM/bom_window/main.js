console.log(window)//tất cả bom đều lằm trong window
// window.alert("OK")
console.log(window.innerHeight)
console.log(window.innerWidth)
console.log(window.outerHeight)
console.log(window.outerWidth)

var newTab

var openTab = () => {
    newTab = window.open("https://www.facebook.com/", "_blank","width=500,height=500,top=100,left=100")
}
var closeTab = () => {
    newTab.close()
}