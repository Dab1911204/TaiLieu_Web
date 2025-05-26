const express = require('express');
const router = express.Router();
const path = require('path');
const courseController = require('../app/controllers/courseController');

//router sẽ chạy từ trên xuống lên cái '/' phải để xuống dưới để khi /:slug('/'sẽ khớp vs cái này) chạy thì nó kiểm tra nếu khớp thì vào ko khớp sẽ chạy xuống dưới
router.get('/create', courseController.create);
router.post('/store', courseController.store);//để lấy giá trị gửi qua from data trên server
router.get('/:slug', courseController.show);//ta có thể cấu hình prameter cho router bằng cách thêm dấu ':' trước tên biến, khi đó ta có thể lấy giá trị của biến này trong req.params.slug

module.exports = router;