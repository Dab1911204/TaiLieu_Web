const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const path = require('path');
const route = require('./routes/index');
var methodOverride = require('method-override')
const mongoose = require('mongoose');

const app = express();
const port = 3001;
const db = require('./config/db');
//connect to db
db.connectDB();

app.use(express.static(path.join(__dirname, 'public'))); //sử lý file static(file tĩnh)
app.use(morgan('combined')); //sử lý log cho server

app.use(methodOverride('_method')); //sử lý method override để có thể sử dụng PUT, DELETE trong form
//apply middleware
app.use(express.urlencoded({ extended: true })); //gửi đi dưới dạng from(html) thì có express.urlencoded sử lý
app.use(express.json()); //gửi dưới dạng code js thì có express.json sử lý

//Template engine
app.engine(
  'hbs',
    handlebars({
      extname: '.hbs', //định nghĩa lại file đuôi của file handlebars
      helpers: {
        sum: (a, b) => a + b, //định nghĩa hàm sum để có thể sử dụng trong handlebars
      }
    }),
); //định nghĩa handlebars = handlebars.engine()
app.set('view engine', 'hbs'); //set view engine = handlebars
app.set('views', path.join(__dirname, 'resources','views')); //thư viện path để có thể quản lý đg dẫn và "__dirname" là đường dẫn tới thư mục chứa file đanng làm việc
//join nhận đc nhiều đối số và nối lại với nhau thành 1 đường dẫn nếu là win thì sẽ là \ còn mac thì sẽ là /
//HTTP logger
//app.use(morgan('combined'))
//route init
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`),
);
