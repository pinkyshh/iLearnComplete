// File: ./models/customer_point.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;


var AnswerSchema = new Schema({
      _id: String,
     tag: String,
     url: String,
     asso: String,
     isSelected: {type : Boolean , default : false},
     date : Date
});

//Export function to create " Answerchema" model class
module.exports = mongoose.model('Answer', AnswerSchema );
