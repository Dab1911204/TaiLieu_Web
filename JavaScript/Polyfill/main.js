//Polyfill:là 
if(!String.prototype.includes){//kiểm tra xem có tồn tại includes ko 
    String.prototype.includes = function(search, start){
        'use strict';//chế độ nghiêm ngặt 
        if(search instanceof RegExp){
            throw TypeError('first argument must not be a RegExp');
        }
        if(start === undefined){
            start = 0;
        }
        return this.indexOf(search, start) !== -1;
    }
}