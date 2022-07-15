const mongoose = require('mongoose');

const db = process.env.DATABASE

const connectMongo = async() => {
    try{
        console.log("connecting mongoose");
        await mongoose.connect(db, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MongoDB connection successful")
    }catch(err){
        console.log("Error in connecting to database >>>>> ",err)
    }
}
connectMongo();