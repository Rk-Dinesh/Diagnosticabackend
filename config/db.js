const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://0.0.0.0:27017/pain_management').on('open',()=>{
    console.log("Mongo DB Connected");
}).on('error',()=>{
    console.log("Mongo DB Connection Error")
});

module.exports = connection;