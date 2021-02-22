var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    type: {
        type: Number // 1. user, 2. admin
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    },
    deleted_at: {
        type: Date
    },
    status: {
        type: Number
    }
});
var objmodel = mongoose.model('accounts', schema);
module.exports = objmodel;