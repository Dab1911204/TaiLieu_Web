//Optional chaining(?.):Khi ta nghi ngờ 1 key nào đó của obj có tồn tại hay ko
const obj = {
    name: 'Alice',
    cat:{
        name: 'Bob',
        cat2:{
            name: 'Charlie',
            cat3:{
                name: 'Dave'
            }
        }
    }
}
console.log(obj['cat']['cat2']['cat3']['name'])//cách gọi obj khác
if(obj.cat?.cat2?.cat3){//Kiểm tra cat,cat2,cat3 tồi tại trong obj ko
    console.log(obj.cat.cat2.cat3.name)
}
const obj1 = {
    // getName(value){
    //     console.log(value)
    // }
}
obj1.getName?.('hello')
//obj1.getName('hello')//lỗi 