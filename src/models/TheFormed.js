var mongoose = require( 'mongoose');
const TheFormed = mongoose.Schema({
    _id:String,
    Name:String,
    Obtained:String,
    SetName:String
});

module.exports = mongoose.model('TheFormed', TheFormed, "TheFormedItems");