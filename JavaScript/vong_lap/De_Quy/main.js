var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log(new Set(array));
console.log([...(new Set(array))]);
//Xác định điểm dừng
//Tạo ra điểm dừng
function number(n) {
    if (n === 0) {
        return 0;
    }
    return n + number(n - 1);
}

function loop(start,end,cb) {
    if (start <= end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}

var arr = ['JavaScript', 'PHP', 'Ruby'];
loop(0, arr.length - 1, function(index) {
    console.log(arr[index]);
});

//6*5*4*3*2*1
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(6));
