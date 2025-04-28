//Fetch 
//npm init: tạo file package.json để quản lý các thư viện cài đặt cho dự án
//sử dụng thư viện JSON server:API giả lập server để test ứng dụng mà không cần phải cài đặt server thật sự
//cài đặt json-server: npm install -g json-server(cài đặt toàn cục)
//cài đặt json-server: npm install json-server(cài đặt cục bộ)
//(Nếu dùng cục bộ thì phải thêm vào scripts trong package.json: "start": "json-server --watch db.json" dùng lệnh npm start để chạy)
// tạo file db.json
var courseAPI = "http://localhost:3000/courses";
fetch(courseAPI)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })