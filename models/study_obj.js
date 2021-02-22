const mongoose = require('mongoose')
const schema = mongoose.Schema({
    teacher: {
        type: String,
        require: true,
        trim: true
    },
    thumbnail: {
        require: true,
        trim: true,
        type: String
    },
    title: {
        require: true,
        type: String,
        trim: true
    },
    add_ress: {
        require: true,
        type: String,
        trim: true
    },
    time: {
        require: true,
        type: String,
        trim: true
    },
    ages:{
      type:Number,
      require:true,
      trim:true
    },
    photo:{
        type:String,
        require:true,
        trim:true
    },
    description:{
      require:true,
      type:String,
      trim:true
    },
    price:{
        require: true,
        type: String,
        trim: true
    },
    create_at: {
        type: Date,
        require: true,
        trim: true
    },
    update_at:{
        type: Date,
        default:null,
        trim: true
    },
    delete_at:{
        type: Date,
        trim: true,
        default:null
    },
    status:{
        type:Number,
        default:1
    },
    subject:{
        type:String,
        require:true,
        trim:true
    },
    comment:{
        type:String,
        trim:true,
        default:null
    },
    user_comment:{
        type:String,
        trim:true,
        default:null
    }
})


var objmodel = mongoose.model('study', schema);
module.exports = objmodel;