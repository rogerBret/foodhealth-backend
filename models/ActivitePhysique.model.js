const mongoose = require('mongoose')

const ActivityPhysicSchema = new mongoose.Schema({
    categorie:{
        type:String,
        require:true
    }
});

const ActivityPhysic = mongoose.model('activityPhysic', ActivityPhysicSchema);

module.exports = ActivityPhysic;