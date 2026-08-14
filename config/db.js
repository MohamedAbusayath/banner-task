const mongoose=require("mongoose");

const dbConnect=async ()=>{
    try{
        const dbURI=process.env.MONGO_URI;
        await mongoose.connect(dbURI);
        console.log("MongoDb connected Successfully....");
    }catch(error){
        console.error("MongoDB connection Failed......",error.message);
        process.exit(1);
    }
}
module.exports=dbConnect;