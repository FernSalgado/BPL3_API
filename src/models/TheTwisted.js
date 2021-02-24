import mongoose, { mongo } from 'mongoose';

const TheTwisted = mongoose.Schema({
    _id:String,
    Name:String,
    Obtained:String,
    SetName:String
});

export default mongoose.model('TheTwisted', TheTwisted, "TheTwistedItems");