var courses = [{
    name: 'HTML',
    coin: 100,
    isFinite: true
    }, {
    name: 'CSS',
    coin: 200,
    isFinite: false
    }, {
    name: 'JavaScript',
    coin: 0,
    isFinite: false
}];
//some không lọc qua mảng trống
var result = courses.some2(function (course, index) {
    return course.isFinite;
});
console.log(result);
Array.prototype.some2 = function (callback) {
    var output = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output = true;
                break;
            }
        }
    }
    return output;
}