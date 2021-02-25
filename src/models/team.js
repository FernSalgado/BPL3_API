var mongoose = require( 'mongoose');

const Team = mongoose.Schema({
        _id:String,
        Name:String,
        Leader:String,
        TotalPoints:Number,
        LevelPoints:Number,
        DelvePoints:Number,
        SetPoints:Number,
        StashUrl:String
});

module.exports = mongoose.model('Team', Team, "Team");