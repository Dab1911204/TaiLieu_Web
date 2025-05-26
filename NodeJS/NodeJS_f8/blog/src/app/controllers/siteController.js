const Course = require('../models/courses');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET] /
    // async index(req,res,next) {
    //     try {
    //         const courses = await Course.find({});
    //         res.json(courses);
    //     } catch (err) {
    //         next(err);// truyền lỗi cho middleware xử lý lỗi
    //     }
    // }
    async index(req, res, next) {
        try {
            await Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            }).catch(next);  
        } catch (err) {
            next(err);
        }
    }

    //[GET] /search
    search(req, res) {
        return res.render('search');
    }
}

module.exports = new SiteController();
