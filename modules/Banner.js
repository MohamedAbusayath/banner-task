const { required, link } = require("joi");
const mongoose=require("mongoose");

const bannerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    link:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        required:true,
        trim:true,
        enum:["ACTIVE","INACTIVE"]
    },
    desktopImage:{
        type:String,
        required:true
    },
    mobileImage:{
        type:String,
        required:true
    }},
    {
        timestamps:true
    }
);

module.exports=mongoose.model("Banner",bannerSchema);