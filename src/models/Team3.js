var mongoose = require( 'mongoose');
const Ruin = mongoose.Schema({
    _id:String,
    Name:String,
    Obtained:String,
    SetName:String
});

module.exports = mongoose.model('Ruin', Ruin, "RuinItems");


