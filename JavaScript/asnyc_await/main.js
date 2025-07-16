const fetchAPI = async(api) =>{
    const response = await fetch(api);
    const data = await response.json()
    console.log(data);// Promise {<pending>} - Chưa có dữ liệu trả về do là hàm thông thường nên ko có bất đồng bộ
    
}
// để biến hàm fetchAPI thành hàm bất đồng bộ thì cần thêm từ khóa async trước tên hàm
// await chỉ có thể sử dụng trong hàm bất đồng bộ để chờ dữ liệu trả về 1 cách tuần tự
// await sẽ chờ dữ liệu trả về từ hàm fetch và sau đó mới thực hiện câu lệnh tiếp theo
// nếu không có await thì console.log sẽ thực hiện trước khi dữ liệu trả về vì khi có acync thì hàm sẽ trả về 1 Promise
fetchAPI('https://jsonplaceholder.typicode.com/posts')