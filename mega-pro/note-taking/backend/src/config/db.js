import mongoose from "mongoose";

export const connectDb = async()=>{
  try{
    // await mongoose.connect("mongodb+srv://princegoswami314_db_user:id55IgEn6O1FcalY@cluster0.oo2bige.mongodb.net/hlo?appName=Cluster0");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDb connected successfully");
  }catch(error){
    console.error("Error to connecting to MongoDB",error);
  }
};