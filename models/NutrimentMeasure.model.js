const mongoose = require('mongoose')


const NutrimentMeasureSchema = new mongoose.Schema({
    unity:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }

});

const NutrimentMeasure = mongoose.model('nutrimentMeasure', NutrimentMeasureSchema);

module.exports = NutrimentMeasure;