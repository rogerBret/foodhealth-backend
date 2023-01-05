const { truncate } = require('fs/promises');
const mongoose = require('mongoose')


const NutrimentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mesure_id:{
        type:String,
        required:true
    },
    quantity_rd:{
        type:Number,
        required:true
    },


});

const Nutriment = mongoose.model('nutriment', NutrimentSchema);

module.exports = Nutriment;