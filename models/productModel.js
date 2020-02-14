const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let productSchema=new Schema({
   
        title:{
            type:String,
            allowNull:false,
            required:true
        
        },
        gender:{
            type:String,
            required:true
        },

        price:{
            type:Number,
            required:true
        },

        discount:{
            type:Number,
            required:true

        },
        image:{
            type:String,
            required:true

        },
        brand:{
            type:String,
            required:true

        },
        category:{
            type:String,
            required: true
        }
    }
);


const Product=mongoose.model('Product',productSchema);
module.exports=Product;