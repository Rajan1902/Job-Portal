import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to database successfully - ${mongoose.connection.host}`);
    }
    catch(err){
        console.log(err);
    }
}
export default connectDB;