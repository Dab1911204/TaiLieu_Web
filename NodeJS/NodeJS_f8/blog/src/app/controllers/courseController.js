const Course = require('../models/courses');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    async show(req, res, next) {
        //await Course.findOne({ slug: req.params.slug })//sẽ lấy ra 1 bản ghi với slug tương ứng
        await Course.findOne({ id: req.params.id })//sẽ lấy ra 1 bản ghi với slug tương ứng
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
        req.body.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))//sau khi lưu xong thì sẽ chuyển hướng về trang đã lưu
            .catch(error => {
                //console.log(error);
                res.status(500).send('Internal Server Error');
            });
    }
    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                if (!course) {
                    return res.status(404).send('Course not found');
                }
                res.render('courses/edit', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    //GET:là gửi yêu cầu để lấy dữ liệu từ server
    //POST:là gửi dữ liệu từ client lên server và lưu trữ dữ liệu hoặc tạo mới dữ liệu
    //PUT,PATCH:là cập nhật dữ liệu đã có trên server(PUT là cập nhật toàn bộ dữ liệu, PATCH là cập nhật một phần dữ liệu)
    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))//sau khi cập nhật xong thì sẽ chuyển hướng về trang đã lưu
            .catch(error => {
                //console.log(error);
                res.status(500).send('Internal Server Error');
            });
    }
    // [DELETE] /courses/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => {
                const referer = req.get('referer') || '/courses'; //lấy đường dẫn của trang trước đó
                res.redirect(referer); //chuyển hướng về trang trước đó
            })//sau khi xóa xong thì sẽ chuyển hướng về trang đã lưu
            .catch(error => {
                //console.log(error);
                res.status(500).send('Internal Server Error');
            });
    }
    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => {
                const referer = req.get('referer') || '/courses'; //lấy đường dẫn của trang trước đó
                res.redirect(referer); //chuyển hướng về trang trước đó
            })//sau khi khôi phục xong thì sẽ chuyển hướng về trang đã lưu
            .catch(error => {
                //console.log(error);
                res.status(500).send('Internal Server Error');
            });
    }
    // [DELETE] /courses/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                const referer = req.get('referer') || '/courses'; //lấy đường dẫn của trang trước đó
                res.redirect(referer); //chuyển hướng về trang trước đó
            })//sau khi xóa vĩnh viễn xong thì sẽ chuyển hướng về trang đã lưu
            .catch(error => {
                //console.log(error);
                res.status(500).send('Internal Server Error');
            });
    }
}
module.exports = new CourseController();
