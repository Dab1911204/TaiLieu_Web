//Promise
//-Sync:đồng bộ
//-Async:bất đồng bộ
//-Nỗi đau
//-Lý thuyết,cách hoạt động
//-Thực hành,ví dụ

//trước khi có pomise thì chúng ta sẽ sử dụng callback để xử lý bất đồng bộ
//callback xuất hiện vấn đề là callback hell
//Lỗi đau
//Callback hell(Địa ngục gọi lại)
//Pyramid of doom(Kim tự tháp của sự diệt vong)

//ví dụ Callback hell
setTimeout(() => {
    console.log('1')
    setTimeout(() => {
        console.log('2')
        setTimeout(() => {
            console.log('3')
            setTimeout(() => {
                console.log('4')
                setTimeout(() => {
                    console.log('5')
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
},1000);
//=>Lỗi đau