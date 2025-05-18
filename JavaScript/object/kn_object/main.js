 //Object trong JavaScript
 
 var myInfo = {
        name: 'Nguyen Van A',
        age: 20,
        address: 'Ha Noi',
        [myGender]: 'Male',
        getName: function(){
            return this.name;
        }
 };
var myGender = 'gender'
//Thêm 1 hey mới vào object
//cách 1
myInfo.email = 'nguyenducanhpx2004@gmail.com';
//cách 2
myInfo['phone'] = '0123456789';
var emailKey = 'email';
console.log(myInfo.name);
console.log(myInfo[emailKey]);
console.log(myInfo[myGender]);
delete myInfo.age;
console.log(myInfo);
console.log(typeof myInfo.getName());
