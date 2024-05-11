const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/StudentRegistration", {

}).then(() => {
    console.log(`connection Successful`);
}).catch((e) => {
    console.log(e.message);
})