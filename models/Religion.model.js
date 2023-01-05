const mongoose = require('mongoose')


const ReligionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    interdites:{
        type:String,
        required:true
    },
});

const Religion = mongoose.model('religion', ReligionSchema);

module.exports = Religion;