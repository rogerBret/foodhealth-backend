const mongoose = require('mongoose')

const EtatNutritionelSchema = new mongoose.Schema({
    categorie:{
        type:String,
        required:true
    }
});

const EtatNutritionel = mongoose.model('etatNutritionel', EtatNutritionelSchema);

module.exports = EtatNutritionel;