var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    color_name:{
        type:String,
        required:true,
    },
    color_code:{
      type:String,
      required:true
    },
    audio_color:{
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
var objmodel = mongoose.model('learn to color basic', schema);
module.exports = objmodel;