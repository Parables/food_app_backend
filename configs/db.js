import mongoose from 'mongoose';
import dotenv from 'dotenv';

// configure dotenv first before using it
dotenv.config();

// get the connection string from the .env variables
// option 1
 const DB_URL =  process.env.NODE_ENV === 'dev'
 ? process.env.LOCAL_HOST_DB_URL
 : process.env.DB_URL;

 // option 2
/*  
let DB_URL = ""
 if(process.env.NODE_ENV === 'dev'){
     DB_URL = process.env.LOCAL_HOST_DB_URL
    }else{
    DB_URL = process.env.DB_URL
    }
     */
// option 1
export  function connectMongoDB(){
    mongoose.connect(DB_URL, {}).then(()=>{
        console.log("Connected to mongoDB")
    }).catch((error)=>{
        console.log(`Couldn't connect to MongoDB ${error}`)
    })
}

// option 2
/* 
export async function connectMongoDB(){
    try {
       await  mongoose.connect("", {});
       console.log("Connected to mongoDB")
    } catch (error) {
        console.log(`Couldn't connect to MongoDB ${error}`)
    }
}
 */