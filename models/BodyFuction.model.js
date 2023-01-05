const mongoose = require('mongoose')


const BodyFunctionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

});

const BodyFunction = mongoose.model('bodyFunction', BodyFunctionSchema);

module.exports = BodyFunction;