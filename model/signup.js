const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://bloomingbuds245:bloomingbuds@cluster0.h4nmndz.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));


let sc=mongoose.Schema;
const signschema=new sc({
    username:String,
    address:String,
    phnumber:Number,
    email:String,
    password:String
});

var signmodel=mongoose.model("Signup",signschema)
module.exports=signmodel;