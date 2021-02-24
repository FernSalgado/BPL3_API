import mongoose, { mongo } from 'mongoose';

const TheHidden = mongoose.Schema({
    _id:String,
    Name:String,
    Obtained:String,
    SetName:String
});

export default mongoose.model('TheHidden', TheHidden, "TheHiddenItems");


