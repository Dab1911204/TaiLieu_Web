const express = require('express');
const mongoose = require('mongoose');

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/nodejs')

const Product = mongoose.model('Product', {
  title: String,
  price: Number,
  thumbnail: String,
});

const app = express();
const port = 3000;

app.set('views', './views');//set thư mục chứa view
app.set('view engine', 'pug');//set template engine là pug

app.use(express.static('public')); // Thư mục chứa các file tĩnh như CSS, JS, hình ảnh

app.get('/', (req, res) => {
  res.render('index', { titlePage: 'Express Example',mess: 'Hello World!' });
});
app.get('/test', (req, res) => {
  res.render('index_test', { titlePage: 'Express Example',mess: 'Hello World!' });
});
app.get('/contact', (req, res) => {
  res.render('contact', { titlePage: 'Express Example',mess: 'Hello World!' });
});
app.get('/products', async (req, res) => {
  const products = await Product.find({})
  console.log(products);
  res.render('products', { titlePage: 'Danh sách sản phẩm', products: products});
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});