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
        //luôn luôn phải gọi 1 trong 2 hàm resolve hoặc reject
        //nếu không gọi thì sẽ treo sẽ ko thành công ko thất bại => memory leak(rò rỉ bộ nhớ)
        //resolve()//thành công
        //reject()//thất bại

        //Fake call API 
        // resolve([
        //     {
        //         id: 1,
        //         name:"Nguyễn Văn A",
        //     },
        //     {
        //         id: 2,
        //         name:"Nguyễn Văn B",
        //     },
        //     {
        //         id: 3,
        //         name:"Nguyễn Văn C",
        //     },
        //     {
        //         id: 4,
        //         name:"Nguyễn Văn D",
        //     },
        //     {
        //         id: 5,
        //         name:"Nguyễn Văn E",
        //     },
        // ])//thành công
        reject("Lỗi rồi")//thất bại
    }
)//tạo 1 promise mới

promise
    .then(courses => {
        //hàm này sẽ chạy khi promise thành công
        console.log(courses)
    })//hàm này sẽ chạy khi promise thành công
    .catch(error => {
        //hàm này sẽ chạy khi promise thất bại
        console.log(error)
    })//hàm này sẽ chạy khi promise thất bại
    .finally(() => {
        //hàm này sẽ chạy khi promise thành công hoặc thất bại
        console.log("Done!")
    })//hàm này sẽ chạy khi promise thành công hoặc thất bại
