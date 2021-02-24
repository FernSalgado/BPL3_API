import mongoose, { mongo } from 'mongoose';

const Team = mongoose.Schema({
        _id:String,
        Name:String,
        Leader:String,
        Points:Number
});

export default mongoose.model('Team', Team, "Team");