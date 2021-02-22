var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    vegetable_name:{
        type:String,
        required:true,
    },
    photo_vegetable:{
        type:String,
        trim:true
    },
    audio_vegetable:{
        type:String,
        required:true,
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

var objmodel = mongoose.model('learn to vegetable', schema);
module.exports = objmodel;