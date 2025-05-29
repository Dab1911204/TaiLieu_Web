const express = require('express');
const router = express.Router();
const path = require('path');
const meController = require('../app/controllers/meController');

//router sẽ chạy từ trên xuống lên cái '/' phải để xuống dưới để khi /:slug('/'sẽ khớp vs cái này) chạy thì nó kiểm tra nếu khớp thì vào ko khớp sẽ chạy xuống dưới
router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);

module.exports = router;