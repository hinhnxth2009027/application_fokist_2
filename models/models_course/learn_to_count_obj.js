var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    number:{
        type:Number,
        required:true,
    },
    number_text:{
        required:true,
        type:String,
        trim:true
    },
    photo_number:{
        type:String,
        trim:true
    },
    audio_number:{
        required:true,
        trim:true,
        type:String
    },
    number_range:{
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

var objmodel = mongoose.model('learn to count', schema);
module.exports = objmodel;