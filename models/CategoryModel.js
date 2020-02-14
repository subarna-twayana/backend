const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let categorySchema=new Schema({
   
        title:{
            type:String,
            allowNull:false,
            required:true
        },
        description:{
            type:String,
        },
        image:{
            type:String,
            required:true

        },
    }
);


const Category=mongoose.model('Category',categorySchema);
module.exports=Category;