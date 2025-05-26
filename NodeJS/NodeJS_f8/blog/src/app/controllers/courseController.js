const Course = require('../models/courses');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    async show(req, res, next) {
        await Course.findOne({ slug: req.params.slug })//sẽ lấy ra 1 bản ghi với slug tương ứng
            .then(course => {
                if (!course) {
                    return res.status(404).send('Course not found');
                }
                res.render('courses/show',{course: mongooseToObject(course)})
            })
            .catch(next);
    }
    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    // [POST] /courses/store
    store(req, res, next) {
        //res.json(req.body);
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))//sau khi lưu xong thì sẽ chuyển hướng về trang đã lưu
            .catch(error => {
                //console.log(error);
                res.status(500).send('Internal Server Error');
            });
    }
}
module.exports = new CourseController();
