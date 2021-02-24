var mongoose = require( 'mongoose');

const Members = mongoose.Schema({
        _id:String,
        CharacterName:String,
        AccountName:String,
        TeamName:String,
        Level:Number,
        Delve:Number,
        Rank:Number,
        Class:String
});

module.exports = mongoose.model('Members', Members, "Members");