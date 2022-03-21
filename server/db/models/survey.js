// File: ./models/survey.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SurveySchema = new Schema({
        // _id : default
        category : {type : String, required: true , unique: true},
        images : [String],
        logo : {type: String}
});

//Export function to create "SurveySchema" model class
module.exports = mongoose.model('Survey', SurveySchema  );