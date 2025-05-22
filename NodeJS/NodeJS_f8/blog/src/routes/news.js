const express = require('express');
const router = express.Router();
const path = require('path');
const newController = require('../app/controllers/newController');
//router sẽ chạy từ trên xuống lên cái '/' phải để xuống dưới để khi /:slug('/'sẽ khớp vs cái này) chạy thì nó kiểm tra nếu khớp thì vào ko khớp sẽ chạy xuống dưới
router.use('/:slug', newController.show);
router.use('/', newController.index);

module.exports = router;
