const mongoose = require('mongoose')


const CultureSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    interdites:{
        type:String,
        required:true
    },
    region:{
        type:String,
    }

});

const Culture = mongoose.model('culture', CultureSchema);

module.exports = Culture;