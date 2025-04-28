//Fetch
//1.Front-end: Xây dựng giao diện người dùng
//2.Back-end: Xây dựng login xử lý
//+cơ sở dữ liệu
//API(URL) -> Application Programming Interface
//Cổng giao diện giữa các PM
//Back-end -> API(thường nhận URL chứa json) -> Fetch -> JSON/XML -> JSON.parse() -> JavaScript types -> Render ra giao diện HTML
var postApi = "https://jsonplaceholder.typicode.com/posts";
fetch(postApi)//là 1 promise
.then(function (response) {
    return response.json(); //chuyển đổi response thành json(tiếp tục return 1 promise)
    //.json() -> chuyển đổi response thành json (giống như JSON.parse())
})
.then(function (data) {
    //console.log(data);
    var htmls = data.map(function (post) {
        return `<li>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <p>Id: ${post.id}</p>
                    <p>UserId: ${post.userId}</p>
                </li>`;
    })//map() -> duyệt qua từng phần tử trong mảng data và trả về 1 mảng mới
    var html = htmls.join(''); //join() -> nối các phần tử trong mảng thành 1 chuỗi
    document.getElementById('post-block').innerHTML = html; //innerHTML -> thêm html vào trong thẻ có id là post-block
})
.catch(function (error) {
    console.log("Lỗi: " + error);
});//trong trường hợp lỗi thì sẽ chạy vào catch
//