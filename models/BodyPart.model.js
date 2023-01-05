const mongoose = require('mongoose')


const BodyPartSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    body_function_id:{
        tupe:String,
        required:true,
    },

});

const BodyPart = mongoose.model('bodyPart', BodyPartSchema);

module.exports = BodyPart;