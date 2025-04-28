//Promise
//-Sync:đồng bộ
//-Async:bất đồng bộ
//-Nỗi đau
//-Lý thuyết,cách hoạt động
//-Thực hành,ví dụ

//sync(vào trước chạy trước) / async
//theo tư duy đồng bộ:setTimeout sẽ ngủ 1 giây rồi mới in ra 1 sau đó in ra 2
//theo bất đồng bộ thì sẽ in ra 2 trước sau đó mới in ra 1
//sẽ có các hàm thường Async là setTimeout, setInterval, fetch, XMLHttpRequest,fileReading,request animation frame
//Callback: là hàm được truyền vào 1 hàm khác và sẽ được gọi lại khi hàm đó thực thi xong
setTimeout(() => {
    console.log('1')
}, 1000)
console.log('2')