const mongoose=require("mongoose");

mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost/prac',{useNewUrlParser:true,useUnifiedTopology:true})

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connecton error'));
db.once('open',function(){
   console.log("Connected to the database")
});