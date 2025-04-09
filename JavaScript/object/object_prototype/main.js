 //Object prototype(Object nguyên mẫu) trong JavaScript
 var User = function(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
User.prototype.className = 'F8'; //thuộc tính đc thêm vào bằng prototype sẽ lưu trữ trong __proto__ của object
User.prototype.getName = function(){
    return this.className;
}

var author = new User('Anh', 'Nguyen', 'Avatar');
var user = new User('Duc', 'Nguyen', 'Avatar');
console.log(author.className);
console.log(user.getName());