var mongoose = require( 'mongoose');
const TheFeared = mongoose.Schema({
        _id:String,
        Name:String,
        Obtained:String,
        SetName:String
});

module.exports = mongoose.model('TheFeared', TheFeared, "TheFearedItems");