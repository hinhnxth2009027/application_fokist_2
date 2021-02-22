var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    user_name_contact: {
        type: String,
        required: true,
        trim: true
    },
    content_feedback: {
        type: String,
        required: true,
        trim: true
    }
});
var objmodel = mongoose.model('feedback', schema);
module.exports = objmodel;