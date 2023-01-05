const mongoose = require('mongoose')


const DiseasesSchema = new mongoose.Schema({

    disease_name:{
        type:String,
        required:true
    },
    disease_type:{
        type:String,
        required:true
    },
    disease_symptomes:{
        type:String,
        required:true
    },
});

const Diseases = mongoose.model('Diseases', DiseasesSchema);

module.exports = Diseases;