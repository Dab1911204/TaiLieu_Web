for (var i = 0; i < 10; i++) {
    console.log(i);
}

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var info = {
    name: 'Teo',
    age: 10
};
for (var key in info) {
    console.log(key);
    console.log(info[key]);
}

function run(object) {
    var arr = []
    for (var key in object){
       arr.push("Thuộc tính " + key + " có giá trị " + object[key]); 
    }
    return (arr)
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));

var languages = 'JavaScript'

for (var value of languages) {
    console.log(value);
}

var languages = ['JavaScript', 'PHP', 'Ruby']

for (var value of Object.keys(languages)) {
    console.log(value);
    console.log(languages[value]);
}
for (var value of Object.values(languages)) {
    console.log(value);
}