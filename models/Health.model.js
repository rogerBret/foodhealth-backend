const mongoose = require('mongoose')


const HealthSchema = new mongoose.Schema({
    etat_sante:{
        type:String,
        required:true
    },

});

const Health = mongoose.model('health', HealthSchema);

module.exports = Health;