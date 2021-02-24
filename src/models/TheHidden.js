var mongoose = require( 'mongoose');
const TheHidden = mongoose.Schema({
    _id:String,
    Name:String,
    Obtained:String,
    SetName:String
});

module.exports = mongoose.model('TheHidden', TheHidden, "TheHiddenItems");


