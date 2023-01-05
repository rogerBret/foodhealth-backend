const mongoose = require('mongoose')

const LevelDegustationSchema = new mongoose.Schema({
    categorie:{
        type:String,
        require:true
    }
});

const LevelDegustation = mongoose.model('levelDegustation', LevelDegustationSchema);

module.exports = LevelDegustation;