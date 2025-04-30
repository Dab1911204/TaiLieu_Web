//Spread(...):khi để trước một mảng hoặc object nó sẽ tách các phần tử của mảng đó ra và đưa vào vị trí mà bạn muốn.
var arr1 = ['JavaScript', 'Python', 'Java', 'C++'];
var arr2 = ['React', 'Angular', 'Vue'];
var arr3 = [...arr1, ...arr2]; // Tạo một mảng mới từ 2 mảng arr1 và arr2
console.log(arr3); // ['JavaScript', 'Python', 'Java', 'C++', 'React', 'Angular', 'Vue']
var obj1 = { name: 'John', age: 30 };
var obj2 = { city: 'New York', country: 'USA' };
var obj3 = { ...obj1, ...obj2 }; // Tạo một đối tượng mới từ 2 đối tượng obj1 và obj2
console.log(obj3); // { name: 'John', age: 30, city: 'New York', country: 'USA' }
//Spread trong hàm: khi bạn muốn truyền một mảng vào trong một hàm mà không cần phải truyền từng phần tử của mảng đó
function sum(a, b, c) {
    return a + b + c;
}
var arr = [1, 2, 3];
console.log(sum(...arr)); // 6
//Spread trong mảng: khi bạn muốn tạo một mảng mới từ một mảng cũ mà không cần phải sử dụng vòng lặp
function copyArray(arr) {
    return [...arr]; // Tạo một mảng mới từ mảng arr
}
var originalArray = [1, 2, 3, 4, 5];
var copiedArray = copyArray(originalArray); // Sao chép mảng
console.log(copiedArray); // [1, 2, 3, 4, 5]
function mergeArrays(...arr1) {
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i]); // In ra từng phần tử của mảng arr1
    }
}
var array1 = [1, 2, 3];
mergeArrays(...array1); // In ra từng phần tử của mảng array1

var defaultConfig = {
    api: 'https://api.example.com',
    apiVersion: 'v1',
    other: 'otherValue'
};
var extraConfig = {
    ...defaultConfig,
    apiVersion: 'v2', // Ghi đè giá trị của apiVersion trong defaultConfig
};
console.log(extraConfig);