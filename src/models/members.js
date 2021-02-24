import mongoose, { mongo } from 'mongoose';

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

export default mongoose.model('Members', Members, "Members");