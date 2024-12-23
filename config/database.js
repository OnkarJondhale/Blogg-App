import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = ()=>
{
    mongoose.connect(process.env.DATABASE_URL).
    then((response)=> {
        console.log("Database connectivity successful");
    })
    .catch((error)=>{
        console.log(error.message);
    })
}

export default connectDB;