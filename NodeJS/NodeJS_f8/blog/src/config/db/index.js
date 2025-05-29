const mongoose = require("mongoose");
async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/education_dev", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false,
        });
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect failure");
    }
}   

module.exports = { connectDB };