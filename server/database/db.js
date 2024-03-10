import mongoose from "mongoose";

export const Connection = async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.ry5a5yi.mongodb.net/`;
    try{
             await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
             console.log("Database conncted  successfully");
    }
    catch(error){
             console.log("error whlie connecting with the database",error.message);
    }
}

export default Connection