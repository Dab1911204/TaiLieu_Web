const mongoose = require('mongoose');
var slug = require('mongoose-slug-updater'); // sử dụng plugin slug để tạo slug từ trường name
const  MongooseDelete = require('mongoose-delete')


const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String ,Maxlength: 255 },
    description: { type: String, Maxlength: 600 },
    image: { type: String ,Maxlength: 600 },
    videoId: { type: String, Maxlength: 600 },
    level: { type: String, Maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true }, // sử dụng slug để tạo slug từ trường name
},{
    timestamps: true,//thêm 2 trường createdAt và updatedAt
});

mongoose.plugin(slug); // đăng ký plugin slug để sử dụng slug trong schema
Course.plugin(MongooseDelete,{overrideMethods: 'all',deletedAt: true});// sử dụng plugin MongooseDelete để xóa mềm dữ liệu, overrideMethods: 'all' sẽ cho

module.exports = mongoose.model('Course', Course);