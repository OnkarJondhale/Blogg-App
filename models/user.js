import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    email :
    {
        type : String,
        required : true
    },
    password : 
    {
        type : String,
        required : true
    },
    username : 
    {
        type : String,
        required : true
    },
    profileImage : 
    { 
        type: String,
        default : 'profile.png'
    }, 
    bio: 
    { 
        type: String 
    }, 
    createdAt: 
    { 
        type: Date, 
        default: 
        Date.now 
    },
    likedPost : 
    [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Post' 
        }
    ]
});

const user = mongoose.model('user',schema);

export default user;
