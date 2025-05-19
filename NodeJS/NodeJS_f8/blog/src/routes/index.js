const newsRoutes = require('./news')
const siteRoutes = require('./site')
function route(app) {
    app.use('/news', newsRoutes)
    app.use('/', siteRoutes)//lưu ý những thằng '/' phải đưa xuống dưới ko nó sẽ bị match vào những routes khác
}
module.exports = route;

// app.get('/home', (req, res) => {
//         // return res.send(`
//         //     <h1 style="color:red;">Hello World!</h1>
//         //   `)
//         return res.render('home')
//     })
//     app.get('/news', (req, res) => {
//         console.log(req.query.q)
//         return res.render('news')
//     })
//     app.get('/search', (req, res) => {
//         //console.log(req.query.q);//với phương thức get thì có thể dùng query parameters để chuyền dữ liệu(bởi đây là cách chuyền dữ liệu dễ nhất của get)
//         //thường thì phương thức get sẽ đc gửi đi dưới dạng query parameters  
//         return res.render('search')
//     })

//     app.post('/search', (req, res) => {
//         console.log(req.body);//để lấy giá trị gửi qua from data trên server
//         //nhưng body sẽ chưa đc express tích hợp sẵn middleware để sử lý cái post từ from data nên sẽ nhận là undefined nên t cần apply 1 middleware
//         return res.send('')
//     })//nếu post mà chưa xác định tuyến đường cho post thì sẽ nhận lỗi 404
