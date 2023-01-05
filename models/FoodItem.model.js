const mongoose = require('mongoose')


const FoodItemSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    categorie:{
        type:String,
        required:true
    },
    sous_categorie:{
        type:String,
        required:true
    },
    nutriment_id:{
        type:String,
        required:true
    },
    type_food:{
        type:String,
        required:true
    }
});

const FoodItem = mongoose.model('foodItem', FoodItemSchema);

module.exports = FoodItem;