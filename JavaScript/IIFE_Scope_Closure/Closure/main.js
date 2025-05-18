/**
 * Closure:là 1 hàm có thể ghi nhớ nơi nó tạo và truy cập đc bên ngoài của nó
 * Ứng dụng:
 *  -viết code ngắn gọn hơn
 *  -Biểu diễn,ứng dụng tính private trong OOP
 * Lưu ý:
 *  -Biến đc tham chiếu (refer) trong Closure sẽ ko đc xóa khỏi bộ nhớ khi hàm cha thực hiện xong
 *  -Các khái niệm javascrip nâng cao dễ gây nhầm lẫn
*/

function makeCouter(){
    let couter = 0//trong trường hợp này khi thoát khỏi khối biến này vẫn chưa đc xóa 
    function increase(){
        return ++couter
    }
    return increase
}
//Closure
const counter = makeCouter()//do sau khi chạy xong hàm thì cái couter sẽ đc lưu lại vào biến toàn cục này
console.log(counter())
console.log(counter())
console.log(counter())
//Ứng dụng 
function createLogger(namespace){
    function logger(mess){
        console.log(`[${namespace}]${mess}`)
    }
    return logger
}

const infoLogger = createLogger('info')

infoLogger('Bắt đầu gửi email')
infoLogger('Gửi email lỗi')
//=> giúp ngắn gọn hơn.

function createStore(key){ 
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        localStorage.setItem(key,JSON.stringify(store))
    }

    const storage = {
        get(key){
            return store[key]
        },
        set(key,value){
            store[key] = value
            save()
        },
        remove(key){
            delete store[key]
            save()
        }
    }
    return storage  
}
const profileSetting = createStore('profile_setting')
console.log(profileSetting.get('fullName'))
profileSetting.set('fullName','Nguyễn Đức Anh')
console.log(profileSetting.get('fullName'))