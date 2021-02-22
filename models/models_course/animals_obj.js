var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    animal_name:{
        type:String,
        required:true,
    },
    animal_photo:{
        type:String,
        trim:true
    },
    animal_audio:{
        required:true,
        trim:true,
        type:String
    },
    animals:{
        type:String,
        trim:true
    },
    status:{
        type:Number,
        default:1
    },
    createAt:{
        required:true,
        type:Date
    },
    updateAt:{
        type:Date,
        default:null
    },
    deleteAt:{
        type:Date,
        default:null
    }
})

var objmodel = mongoose.model('learn to animal', schema);
module.exports = objmodel;