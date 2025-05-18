const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars').engine;
const path = require('path');

const app = express()
const port = 3000
//Template engine
app.engine('hbs', handlebars(
  {
    extname: '.hbs',//định nghĩa lại file đuôi của file handlebars
  }
));//định nghĩa handlebars = handlebars.engine()
app.set('view engine', 'hbs');//set view engine = handlebars
app.set('views', path.join(__dirname, 'resources/views'));//thư viện path để có thể quản lý đg dẫn và "__dirname" là đường dẫn tới thư mục chứa file đanng làm việc
//HTTP logger
app.use(morgan('combined'))
//route
app.get('/home', (req, res) => {
  // return res.send(`
  //     <h1 style="color:red;">Hello World!</h1>
  //   `)
  return res.render('home')
})
app.get('/news', (req, res) => {
  return res.render('news')
})

app.listen(port, () => 
  console.log(`Example app listening at http://localhost:${port}/home`)
)