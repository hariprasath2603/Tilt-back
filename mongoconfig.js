const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tilt:tilt123@cluster0-zwqus.mongodb.net/tilt').then(()=>{
    console.log("Connected sucessfully...");

}).catch((err)=>{
    console.log(err);
});

module.exports.mongoose = mongoose;