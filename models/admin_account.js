var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    admin_email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    admin_name: {
        type: String,
        required: true,
        trim: true
    },
    admin_avatar: {
        type: String,
    },
    create_by:{
        type:String
    }
    ,
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
var objmodel = mongoose.model('admin_account', schema);
module.exports = objmodel;