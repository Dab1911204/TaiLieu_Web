//Làm việc với chuỗi 
var myString = 'javascript Tu hoc javascript'

//keyword: javascript string methods

//1.length:chả về độ dài của chỗi
    console.log(myString.length); // 16
//2.Find index:tìm vị trí của 1 chuỗi trong chỗi cho sẵn nếu tìm đc sẽ trả về vị trí không tìm thấy sẽ trả về -1
    console.log(myString.indexOf('javascript')); // 5
    console.log(myString.indexOf('javac')); // -1 (không tìm thấy)
    console.log(myString.indexOf('javascript', 6)); //tìm từ vị trí thứ 6 trong chuỗi
    console.log(myString.lastIndexOf('javascript')); // tìm vị trí cuối cùng của 'javascript' trong chuỗi
    console.log(myString.search('java'));//có thể dùng các này để tìm kiếm
//3.cut string :cắt
    console.log(myString.slice(5, 11)); // 'script'
    console.log(myString.slice(-5, -1)); // 'script'
    console.log(myString.slice(10)); // 'javascript'
    console.log(myString.substring(5, 11)); // 'script'
    console.log(myString.substring(-5, -1)); // 'script' (vị trí bắt đầu và kết thúc là giá trị tương ứng với đ�� dài của chu��i)
    console.log(myString.substring(10)); // 'javascript'
//4.replace:ghi đè
    console.log(myString.replace('javascript','JS')) //chỉ thay thế đc khí tự đầu
    console.log(myString.replace(/javascript/g,'JS')) //sử dụng biểu thức chính quy để tìm tất cả các chữ javascript trong chuỗi để thay thế
//5.Convert to upper case
    console.log(myString.toUpperCase()); // 'JAVASCRIPT TU HOC JAVASCRIPT'
//6.Convert to lower case
    console.log(myString.toLowerCase()); // 'javascript tu hoc javascript'
//7.Trim : loại bỏ khí khoảng trắng ở 2 đầu
    console.log(myString.trim()); // 'javascript Tu hoc javascript'
//8.Split :cắt 1 cái chuỗi thành 1 array
    console.log(myString.split(' ')); // ['javascript', 'Tu', 'hoc', 'javascript']
    console.log(myString.split(' ', 2)); // ['javascript', 'Tu hoc']
    console.log(myString.split('', 2)); // ['j', 'a']
//9.Get a character by index
    console.log(myString.charAt(5)); // 's'
    console.log(myString.charCodeAt(5)); // 115