const Course = require('../models/courses');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    //[GET] /me/stored/courses
    async storedCourses(req, res,next) {
        await Course.find({})//sẽ lấy ra 1 bản ghi với slug tương ứng
            .then(course => {
                if (!course) {
                    return res.status(404).send('Course not found');
                }
                res.render('me/stored-courses', { course: mutipleMongooseToObject(course) })
            })
            .catch(next);
    }
    //[GET] /me/trash/courses
    async trashCourses(req, res,next) {
        await Course.findWithDeleted({ deleted: true })//sẽ lấy ra 1 bản ghi với slug tương ứng
            .then(course => {
                if (!course) {
                    return res.status(404).send('Course not found');
                }
                res.render('me/trash-courses', { course: mutipleMongooseToObject(course) })
            })
            .catch(next);
    }
}

module.exports = new MeController();
