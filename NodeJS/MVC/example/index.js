const express = require('express');
const routes = require('./routes/client/index.route');
const routesAdmin = require('./routes/admin/index.route');
require('dotenv').config(); // nạp biến môi trường từ .env
const database = require('./config/database');
const systemConfig = require('./config/system');

database.connect();

const app = express();
const port = process.env.PORT;// lấy cổng từ biến môi trường từ .env

app.set('views', './views');//set thư mục chứa view
app.set('view engine', 'pug');//set template engine là pug

app.use(express.static('public'));//set thư mục chứa file tĩnh

//app locals variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;


routesAdmin(app); // sử dụng các route đã định nghĩa
routes(app); // sử dụng các route đã định nghĩa

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});