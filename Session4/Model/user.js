const mongoose = require("mongoose");

const validateEmail = require("../Utils/index").validateEmail;

const userSchema = new mongoose.Schema({
    username:{
        type:"String",
        unique: "Username must be unique",
        required: "Username is required",
    },
    email:{
        type:"String",
        unique: "Email should be unique",
        required: "Email is required",
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "fill a valid email"],
    },
    password:{
        type:"String",
        required:"Password is required",
    },
});

let User = mongoose("User", userSchema);
module.exports = User;

const articleSchema = new mongoose.Schema({
    title:{
        type:"String",
        required:"Title can not be empty",
    },
    content:{
        type:"String",
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    },
})

let Article = mongoose("Article", articleSchema)
module.exports = Article;