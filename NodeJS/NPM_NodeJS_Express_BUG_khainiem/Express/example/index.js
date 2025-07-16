const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');//set thư mục chứa view
app.set('view engine', 'pug');//set template engine là pug

app.use(express.static('public')); // Thư mục chứa các file tĩnh như CSS, JS, hình ảnh

app.get('/', (req, res) => {
  res.render('index', { title: 'Express Example',mess: 'Hello World!' });
});
app.get('/test', (req, res) => {
  res.render('index_test', { title: 'Express Example',mess: 'Hello World!' });
});
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Express Example',mess: 'Hello World!' });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});