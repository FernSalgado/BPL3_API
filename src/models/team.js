var mongoose = require( 'mongoose');

const Team = mongoose.Schema({
        _id:String,
        Name:String,
        Leader:String,
        Points:Number
});

module.exports = mongoose.model('Team', Team, "Team");