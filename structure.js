const mongoose=require("mongoose");

const struct=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Roll:{
        type:String,
        required:true
    },
    Review:{
        type:String,
        required:true
    }
})

const Register=new mongoose.model("view",struct)

module.exports=Register;