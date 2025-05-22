const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const path = require('path');
const route = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); //sử lý file static(file tĩnh)

//apply middleware
app.use(express.urlencoded({ extended: true })); //gửi đi dưới dạng from(html) thì có express.urlencoded sử lý
app.use(express.json()); //gửi dưới dạng code js thì có express.json sử lý

//Template engine
app.engine(
  'hbs',
              handlebars({
    extname: '.hbs', //định nghĩa lại file đuôi của file handlebars
  }),
); //định nghĩa handlebars = handlebars.engine()
app.set('view engine', 'hbs'); //set view engine = handlebars
app.set('views', path.join(__dirname, 'resources/views')); //thư viện path để có thể quản lý đg dẫn và "__dirname" là đường dẫn tới thư mục chứa file đanng làm việc
//HTTP logger
//app.use(morgan('combined'))
//route init
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}/home`),
);
