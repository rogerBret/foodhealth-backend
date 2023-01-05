const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    surname:{
        type: String,
    },
    sexe:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    adress:{
        type:String,
    
    },
    pseudo:{
        type:String
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;