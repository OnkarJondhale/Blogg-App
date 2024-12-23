import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title :
    {
        type : String,
        required : true
    },
    content : 
    {
        type : String,
    },
    author : 
    {
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    tags: 
    [
        { 
            type: String 
        }
    ],
    likes :
    {
        type : Number,
        default : 0
    },
    views :
    {
        type : Number,
        default : 0
    },
    comments: 
    [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment' 
        }
    ],
    createdAt: 
    { 
        type: Date, 
        default: 
        Date.now 
    },
});

const post = mongoose.model('post',schema);

export default post;
