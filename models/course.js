var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Title: { // hoc dem tu 1 den 10
        type: String,
        required: true,
    },
    Sub_Title:{
        type: String, //only course learn to count
    },
    description: {
        type: String,
    },
    ages:{
      type:String
    },
    thumbnail: {
        type: String,
    },
    Type: {
        type: Number
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        default:null
    },
    deleted_at: {
        type: Date,
        default:null
    },
    status: {
        type: Number
    }
});
var objmodel = mongoose.model('courses', schema);
module.exports = objmodel;