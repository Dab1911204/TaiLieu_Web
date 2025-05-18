// this.firstName = "Đức"
// this.lastName = "Anh"
// const teacher={
//     firstName:"Văn",
//     lastName:"A",
//     getFullName(){
//         return this.firstName+" "+this.lastName
//     }
// }

// const student={
//     firstName:"Văn",
//     lastName:"B",
// }
// console.log(teacher.getFullName())//Văn A

// const getTeacherName = teacher.getFullName

// console.log(getTeacherName === teacher.getFullName)//true

// console.log(getTeacherName())//Đức Anh(vì gọi hàm ko thông qua đối tượng nên nó sẽ chọc ra đối tượng window)
// //cách sử lý vấn đề trên

// //bind nó sẽ ràng buộc thừ khóa this cho cái getFullName là teacher
// const getTeacherName1 = teacher.getFullName.bind(teacher)
// console.log(getTeacherName1())//Văn A(nên ở đây sẽ ko chọc ra window nữa)
// const getStudentName1 = teacher.getFullName.bind(student)
// console.log(getStudentName1())//Văn B(vì bind đang ràng buộc this là student cho hàm getFullName)
// //lưu ý bind() nó ko sử this mà nó chả về hàm mới với 1 cái this mới
// console.log(getStudentName1() === teacher.getFullName())//Văn B

// const teacher1={
//     firstName:"Văn",
//     lastName:"C",
//     getFullName(data1,data2){
//         console.log(data1,data2)
//         return this.firstName+" "+this.lastName
//     }
// }
// //Hàm bind sẽ nhận n đối số đối số đầu tiên là nhận đối tượng.
// //Còn từ đối số thứ 2 là sẽ nhận đối số tương ứng với đối số mà muốn ràng buộc
// const getTeacherName2 = teacher1.getFullName.bind(student,'test3','test4')
// console.log(getTeacherName2('test1','test2'))//nếu mà đã bind bind luôn cả đối số mặc mặc định như bên trên thì khi chuyền tham số ở dưới này sẽ ko có tác dụng nữa.

// const teacher3={
//     firstName:"Văn",
//     lastName:"D",
//     getFullName(){
//         console.log(this.firstName+" "+this.lastName)
//     }
// }
// const button = document.querySelector('button')
// //button.onclick = teacher3.getFullName//undefined(vì khi click button nó sẽ gọi đến cái obj button nến sẽ là button.firstName,button.lastName)
// button.onclick = teacher3.getFullName.bind(teacher3)//Văn D

const $ = document.querySelector.bind(document)//nếu ở đây ko dùng bind thì khi gọi $ thì nó sẽ mất đi context và this lại chính là window lên dòng 60 sẽ lỗi
const $$ = document.querySelectorAll.bind(document)

// console.log(document.querySelector('#heading'))//ở đây từ khóa this chính à document
// console.log($('#heading'))

const app = (()=>{
    const cars = ['BMW']
    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')
    return{
        add(car){
            cars.push(car)
        },
        delete(index){
            cars.splice(index,1)
        },
        render(){
            const html=cars.map((car,index) => `<li>${car}<sapn class="delete" data-index="${index}">&times</sapn></li>`).join('')
            root.innerHTML = html
        },
        handleDelete(e){
            //closest() là 1 phương thức của DOM element giúp kiểm tra chính nó hoặc cha của nó có chứa class,id,... đó hay ko
            const deleteBtn = e.target.closest('.delete')
            if(deleteBtn){

                //data-<tùy ý đặt>:để tạo ra 1 dataset cho 1 element
                const index = deleteBtn.dataset.index//còn muốn lấy ra thì dataset.<phần sau dấu '-' đã đặt bên trên>
                this.delete(index)
                this.render()
            }
        }, 
        init(){
            //handle DOM events
            submit.onclick = ()=>{//ta sẽ sử dụng arrow function bởi arrow function ko có context nên nó sẽ lấy đúng đc this ta cần là app
                //nếu dùng với function thường thì từ khóa this ở đấy sẽ ko giống với this ở ngoài submit bởi đang đc gọi trong 1 cái hàm nên sẽ gây lỗi
                this.add(input.value)
                this.render()
                input.value = ''
                input.focus()
            }
            root.onclick = this.handleDelete.bind(this)
            this.render()
        }
    }
})()

app.init()

//delegate pattern:để có thể get đc những element đc thêm vào DOM sau