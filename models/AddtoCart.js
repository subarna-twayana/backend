const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let addtocart=new Schema({

    email:{
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

}
);


const AddtoCart=mongoose.model('AddtoCart',addtocart);
module.exports=AddtoCart;