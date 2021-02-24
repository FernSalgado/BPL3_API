var mongoose = require( 'mongoose');
const TheTwisted = mongoose.Schema({
    _id:String,
    Name:String,
    Obtained:String,
    SetName:String
});

module.exports = mongoose.model('TheTwisted', TheTwisted, "TheTwistedItems");