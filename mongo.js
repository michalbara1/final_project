require("dotenv").config();
var mongoose= require("mongoose");
const connectDB= async()=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/products");
        var db= mongoose.connection;
        db.on('error',console.error.bind(console,'cant connect to mongoDB'));
        db.once('open', function(){
            console.log('sucsses on connect to mongoDB');
        });
    }
    catch(error){
        console.log("cant connect to mongodb");
        process.exit(1);
    }
}
module.exports =connectDB;