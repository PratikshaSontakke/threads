import mongoose from 'mongoose'

let isConnected = false; //variable to check connection status

export const connectToDB = async ()=>{
    mongoose.set('strictQuery', true);
    
    if(!process.env.MONGODB_URL) return console.log("MONGODB_URL not foound")
    if (isConnected) return console.log("Alredy connected to MONGODB")

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        isConnected = true
        console.log("connected to MongoDB")
    }
    catch(error){
           console.log(error)  
    }

}
