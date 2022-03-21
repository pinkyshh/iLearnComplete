// File: ./models/dog.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
    tag : {type : String, required: true},
    url : {type: String, required: true},
    asso : {type: String, required: true},
});

module.exports = mongoose.model('Image', ImageSchema );