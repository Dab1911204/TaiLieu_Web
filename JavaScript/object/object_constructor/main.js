 //Object constructor trong JavaScript
 
// function User(firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
var User = function(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
var author = new User('Anh', 'Nguyen', 'Avatar');
var user = new User('Duc', 'Nguyen', 'Avatar');
console.log(author.getName());
console.log(user.getName());
console.log(author.constructor === User);