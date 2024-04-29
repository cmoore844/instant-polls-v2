//mongoose schema for poll data models
//require mongoose packages 
const mongoose = require('mongoose');
const Schema = mongoose.Schema

//this variable creates the schema for how the data should be represented
const pollSchema = new Schema({
    question: String,
    answerA: String,
    answerB: String,
    votesA: Number,
    votesB: Number,
},
{timestamps: true}); //sets timestamps for when record is created

//exports Poll schema to be used by routes and database 
const Poll = mongoose.model('Poll',pollSchema);
module.exports = Poll;

