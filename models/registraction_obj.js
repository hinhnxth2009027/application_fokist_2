var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        trim: true
    },
    parent_name: {
        type: String,
        required: true,
        trim: true
    },
    child_name: {
        type: String,
        required: true,
        trim: true
    },
    child_gender: {
        type: String,
        required: true,
        trim: true
    },
    phone_number: {
        type: String,
        required: true,
        trim: true
    },
    course_id: {
        type: String,
        required: true,
        trim: true
    },
    course_title: {
        type: String,
        required: true,
        trim: true
    },
    registraction_date:{
        type:Date
    }

});
var objmodel = mongoose.model('registraction', schema);
module.exports = objmodel;