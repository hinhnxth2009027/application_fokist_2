var mongoose = require('mongoose')
var schema = mongoose.Schema({
    teacher_name: {
        require: true,
        type: String,
        trim: true
    },
    avatar: {
        type: String,
        require: true,
        trim: true
    },
    exp: {
        type: String,
        require: true,
        trim: true
    },
    status: {
        type: Number,
        require: true,
        trim: true,
        default: 1
    },
    subject: {
        type: String,
        require: true,
        trim: true
    },
    gender: {
        require: true,
        type: String,
        trim: true
    },
    create_at: {
        type: Date,
        trim: true,
        require: true,
    },
    update_at: {
        require: true,
        type: Date,
        trim: true,
        default: null
    },
    delete_at: {
        type: Date,
        trim: true,
        default: null
    }
})
var objmodel = mongoose.model('stuty_teacher', schema);
module.exports = objmodel;