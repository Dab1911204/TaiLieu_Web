// //Fetch 
// //sử dụng thư viện JSON server:API giả lập server để test ứng dụng mà không cần phải cài đặt server thật sự
// //cài đặt json-server: npm install -g json-server(cài đặt toàn cục)
// //cài đặt json-server: npm install json-server(cài đặt cục bộ)
// //(Nếu dùng cục bộ thì phải thêm vào scripts trong package.json: "start": "json-server --watch db.json" dùng lệnh npm start để chạy)
// // tạo file db.json
var courseAPI = 'http://localhost:3000/courses';

function start(){
   getCourses(renderCourses);
   handleCreateForm();
};

start();

//Functions

function getCourses(callback){
     fetch(courseAPI)
       .then(function(response){
          return response.json();
       })
       .then(callback);
}
function renderCourses(courses){
   var listCoursesBolock = document.querySelector('#list-courses'); 
   var htmls = courses.map(function(course){
      return `
         <li class = "course-id-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button type="button" onclick="handleDeleteCourse('${course.id}')">Xóa</button>
            <button type="button" onclick="handleUpdateCourse('${course.id}')">Sửa</button>

         </li>
      `
   })  

   listCoursesBolock.innerHTML = htmls.join('');
}

function handleDeleteCourse(id) {
        //alert('Bạn có chắc chắn muốn xóa không?');
        var options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(`${courseAPI}/${id}`,options).then(function(response) {
            return response.json();
        }).then(function(){
            //cách 1 làm mới:
            //getCourses(renderCourses);
            //cách 2:là xóa trên DOM: xóa khỏi danh sách hiển thị
            var courseItem = document.querySelector('.course-id-' + id);
            courseItem.remove();//xóa phần tử khỏi DOM
        });
    }

function handleUpdateCourse(id){

   var itemCourse = document.querySelector('.course-id-' + id);
   var name = itemCourse.querySelector('h4');
   var description = itemCourse.querySelector('p');
   var inputName = document.querySelector('input[name="name"]');
   var inputDescription = document.querySelector('input[name="description"]');
   var createBtn = document.querySelector('#create');  

   inputName.value = name.innerText;
   inputDescription.value = description.innerText;
   
  
   

   createBtn.onclick = function(){
      
      var options= {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
          },
         body: JSON.stringify({name: inputName.value, description: inputDescription.value})
      }

      fetch(courseAPI + '/' + id, options)
         .then(function(response){
            response.json();
         })
         .then(function(){
            start();
        });
   }
}

function createCourse(data,callback) {
    fetch(courseAPI, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        return response.json();
    }).then(callback)
}

function handleCreateForm(){
   var createBtn = document.querySelector('#create');
  
   createBtn.onclick = function(){
      var name = document.querySelector('input[name="name"]').value;
      var description = document.querySelector('input[name="description"]').value;
      var formData = {
         name: name,
         description: description
      }     

      createCourse(formData, function(){
         getCourses(renderCourses);
      });
   }
}
//nếu dùng "start": "json-server --watch db.json"