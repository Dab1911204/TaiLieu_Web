 //Object Math

/** 
 * Math.PT: Math.PI trả về giá trị của số PI
 * Math.abs(x): trả về giá trị tuyệt đối của x
 * Math.ceil(x): trả về số nguyên lớn nhất mà không lớn hơn x
 * Math.floor(x): trả về số nguyên nhỏ nhất mà không nhỏ hơn x
 * Math.round(x): làm tròn số x
 * Math.max(x1, x2, x3,...): trả về giá trị lớn nhất
 * Math.min(x1, x2, x3,...): trả về giá trị nhỏ nhất
 * Math.pow(x, y): trả về giá trị của x mũ y
 * Math.sqrt(x): trả về căn bậc 2 của x
 * Math.random(): trả về số ngẫu nhiên từ 0 đến 1
*/
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.round(4.5));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(9));
console.log(Math.random());
console.log(Math.random() * 10);// trả về số ngẫu nhiên từ 0 đến 10
console.log(Math.random() * 10 + 5);// trả về số ngẫu nhiên từ 5 đến 15
var random = Math.floor(Math.random() * 100)// trả về số nguyên ngẫu nhiên từ 5 đến 15
if(random < 50){
    console.log('end game');
}