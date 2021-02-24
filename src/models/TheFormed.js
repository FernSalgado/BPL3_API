import mongoose, { mongo } from 'mongoose';

const TheFormed = mongoose.Schema({
    _id:String,
    Name:String,
    Obtained:String,
    SetName:String
});

export default mongoose.model('TheFormed', TheFormed, "TheFormedItems");