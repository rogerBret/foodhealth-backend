const mongoose =  require('mongood')

const ProfileSchema = new mongoose.Schema(
    {
        type_profile:{
            Type:String,
            required:true
        },
        poids:{
            type:Number,
            required:true,
        },
        taille:{
            type:Number,
            required:true
        },
        imc:{
            type:Number,
            required:true
        },
        etat_nut_id:{
            type:String,
            required:true
        },
        level_degus_id:{
            type:String,
            required:true
        },
        activity_phy_id:{
            type:String,
            required:true
        }
    }
);

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;