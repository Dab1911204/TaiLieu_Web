var courses = [{
    name: 'HTML',
    coin: 100
    }, {
    name: 'CSS',
    coin: 200
    }, {
    name: 'JavaScript',
    coin: 0
}];
//filter không lọc qua mảng trống
var filterCourses = courses.filter(function (course, index) {
    return course.coin > 0;
});
console.log(filterCourses);

Array.prototype.filter2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}