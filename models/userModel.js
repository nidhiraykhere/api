const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        unique:true,
        required:[true,"Username is required"],
        minlength:[3,"Username must be atleast 3 characters"]
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:[true,"Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:[3,"Password must be at least 3 characters"],
        maxlength:[15,"password should not be greater than 15 characters"]
    }
},
{timestamps:true}
);

const user = mongoose.model("user", userModel)
module.exports= user;