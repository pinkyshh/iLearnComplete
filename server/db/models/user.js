// File: ./models/customer.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    firstName: {type: String, required: true},
});

//Export function to create "CustomerSchema" model class
module.exports = mongoose.model('User', UserSchema );