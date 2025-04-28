//Promise:để sử lý bất đồng bộ trong JavaScript
//-Sync:đồng bộ
//-Async:bất đồng bộ
//-Nỗi đau
//-Lý thuyết,cách hoạt động
//-Thực hành,ví dụ

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