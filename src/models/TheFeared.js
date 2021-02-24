import mongoose, { mongo } from 'mongoose';

const TheFeared = mongoose.Schema({
        _id:String,
        Name:String,
        Obtained:String,
        SetName:String
});

export default mongoose.model('TheFeared', TheFeared, "TheFearedItems");