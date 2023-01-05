const mongoose = require('mongoose')


const AllegeneSchema = new mongoose.Schema({
    allegene_name:{
        type:String,
        required:true,
    },
    allegene_type:{
        type:String,
        required:true
    },
    food_id:{
        type:String,
        required:true
    },
    symptomes:{
        type:String,
        required:true
    }

});

const Allegene = mongoose.model('Allegene', AllegeneSchema);

module.exports = Allegene;