var mongoose = require('mongoose');
const Chaos = mongoose.Schema({
    _id:String,
    Name:String,
    Obtained:String,
    SetName:String
});

module.exports = mongoose.model('Chaos', Chaos, "ChaosItems");