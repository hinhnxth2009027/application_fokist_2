var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    text_letters:{
        type:String,
        required:true,
    },
    photo_letter:{
        type:String,
        trim:true
    },
    audio_letter:{
        type:String,
        required:true,
        trim:true
    },
    letters_range:{
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

var objmodel = mongoose.model('learn to letters', schema);
module.exports = objmodel;