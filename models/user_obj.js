var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    user_email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    user_name: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    user_avatar: {
        type: String,
    },
    status: {
        type: Number,
    },
    salt: {
        type: String,
    },
    create_at:{
        type:Date
    }
});
var objmodel = mongoose.model('account', schema);
module.exports = objmodel;