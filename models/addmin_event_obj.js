var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        trim: true
    },
    content_event: {
        type: String,
        required: true,
        trim: true
    },
    time_event: {
        type: Date,
        required: true,
        trim: true
    },
    thumbnail: [{
        type: String,
        required: true,
        trim: true
    }],
    status: {
        type: Number
    }
});
var objmodel = mongoose.model('events', schema);
module.exports = objmodel;