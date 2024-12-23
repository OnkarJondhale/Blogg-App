import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    content : 
    { 
        type: String, 
    },
    post : 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post', 
        required: true 
    },
    author : 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    createdAt : 
    { 
        type: Date, 
        default: Date.now 
    },
});

const comment = mongoose.model('comment', schema);

export default comment;
