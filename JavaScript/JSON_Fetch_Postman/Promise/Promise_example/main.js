//Promise:để sử lý bất đồng bộ trong JavaScript
//-Sync:đồng bộ
//-Async:bất đồng bộ
//-Nỗi đau
//-Lý thuyết,cách hoạt động
//-Thực hành,ví dụ

//-Thực hành,ví dụ
var user = [
    { id: 1, name: "Nguyễn Văn A" },
    { id: 2, name: "Nguyễn Văn B" },
    { id: 3, name: "Nguyễn Văn C" },
    { id: 4, name: "Nguyễn Văn D" },
    { id: 5, name: "Nguyễn Văn E" },
    { id: 6, name: "Nguyễn Văn F" }
    //...

];

var comments = [
    { id: 1, user_id: 1, content: "Comment 1" },
    { id: 2, user_id: 2, content: "Comment 2" },

];
//1.Lấy comment
//2.Từ comment lấy user_id,từ user_id lấy user tương ứng

//fake API
function getUserByIds(userIds) {
    return new Promise((resolve, reject) => {
        var userFound = user.filter((user) => userIds.includes(user.id));//Includes:kiểm tra xem mảng có chứa phần tử nào không
        setTimeout(() => {
            resolve(userFound);
        }, 1000);
    });
}
function getComment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(comments);
        }, 1000);
    });
}
//promise hell
getComment()
    .then((comments) => {
        var userIds = comments.map((comment) => comment.user_id);
        console.log(userIds);
        //promise hell ở đây
        return getUserByIds(userIds).then((users) =>{
            return {
                users: users,
                comments: comments
            }
        })
    }).then((data) => {
        var commentBlock = document.getElementById("comment-block");
        var html = '';
        data.comments.forEach((comment) => {
            var user = data.users.find((user) => user.id === comment.user_id);
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    })
