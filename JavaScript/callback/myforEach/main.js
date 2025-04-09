var courses = [
    'HTML',
    'CSS',
    'JavaScript'
];
//forEach có lọc qua array trống và các thuộc tính của mảng
courses.forEach(function (course, index ) {
    console.log(index + ": " + course);
});
Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) { //kiểm tra xem index có phải là thuộc tính của mảng không
            callback(this[index], index, this);
        }
    }
}
courses.forEach2(function (course, index, array) {
    console.log(index + ": " + course);
    console.log(array);
});