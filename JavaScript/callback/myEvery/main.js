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
//every không lọc qua mảng trống
var result = courses.every2(function (course, index, array) {
    return course.isFinite;
});
console.log(result);

Array.prototype.every2 = function (callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}