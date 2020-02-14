const mongoose = require("mongoose");
const url =("mongodb://localhost:27017/cloths");
const connect=mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology: true ,
    useCreateIndex:true
});
connect.then(
    db=>{
        console.log("connect to database cloths");

    },
    err=>{
        console.log(err)
    }
)