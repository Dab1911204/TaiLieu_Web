/**
 * Các loại funcion
 * 1.Declaration function : có thể gọi đc trước khi đc định nghĩ
 * 2.Expression function : không thể gọi đc trước khi đc định nghĩ
 * 3.Arrow function
*/
//Declaration function
function declaration_function(){
    console.log("Declaration function");

}
declaration_function()
//Expression function
var expression_function = function (){
    console.log("Expression function");
}

expression_function();

setTimeout(function(){
    })

var myObj = {
    myFunction: function tststst (){
        
    }
}