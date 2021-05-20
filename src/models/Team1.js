var mongoose = require( 'mongoose');
const Order = mongoose.Schema({
        _id:String,
        Name:String,
        Obtained:String,
        SetName:String
});

module.exports = mongoose.model('Order', Order, "OrderItems");