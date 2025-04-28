//Promise:để sử lý bất đồng bộ trong JavaScript
//-Sync:đồng bộ
//-Async:bất đồng bộ
//-Nỗi đau
//-Lý thuyết,cách hoạt động
//-Thực hành,ví dụ

//-Lý thuyết,cách hoạt động
//1.Tạo promise
//2.Executor function
//Trạng thái của promise
//-Pending:đang chờ (nếu ở trạng thái này mãi thì sẽ treo)
//-Fulfilled:thành công
//-Rejected:thất bại
var promise = new Promise (
    // executor function
    function(resolve, reject) { //hàm khởi tạo promise
        //logic của bạn ở đây
        //thành công:resolve()
        //thất bại:reject()
        resolve()
    }
)//tạo 1 promise mới
//có thể gọi nhiều function then
promise
    .then(() => {
        //hàm này sẽ chạy khi promise thành công
        //return 1
        //nếu ko return hay return 1 promise sẽ chạy tiếp hàm then liền kề tiếp theo và then đó sẽ nhận giá trị undefined
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([1,2,3,4])
            }, 3000) //hàm này sẽ chạy sau 1 giây
        })
    })//hàm này sẽ chạy khi promise thành công
    .then((data) => {
        //hàm này sẽ chạy khi promise thành công
        //nếu then trước đó trả về 1 promise thì then này sẽ nhận giá trị của promise đó
        console.log(data) //1
        //return 2
    })
    // .then((data) => {
    //     //hàm này sẽ chạy khi promise thành công
    //     console.log(data) //2
    //     return 3
    // })
    // .then((data) => {
    //     //hàm này sẽ chạy khi promise thành công
    //     console.log(data) //3
    //     return 4
    // })
    // .then((data) => {
    //     //hàm này sẽ chạy khi promise thành công
    //     console.log(data) //4
    // })
    .catch(error => {
        //hàm này sẽ chạy khi promise thất bại
        console.log(error)
    })//hàm này sẽ chạy khi promise thất bại
    .finally(() => {
        //hàm này sẽ chạy khi promise thành công hoặc thất bại
        console.log("Done!")
    })//hàm này sẽ chạy khi promise thành công hoặc thất bại

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
} //hàm này sẽ chạy sau 1 giây
//sleep trả về 1 promise nên chính nó sẽ là 1 promise
sleep(1000).then(() => {
    console.log(1)
    return sleep(1000) //trả về 1 promise
}) //hàm này sẽ chạy sau 1 giây
.then(() => {
    console.log(2)
    return sleep(1000) //trả về 1 promise
}) //hàm này sẽ chạy sau 1 giây
.then(() => {
    console.log(3)
    return sleep(1000) //trả về 1 promise
}) //hàm này sẽ chạy sau 1 giây
.then(() => {
    console.log(4)
    return sleep(1000) //trả về 1 promise
}) //hàm này sẽ chạy sau 1 giây