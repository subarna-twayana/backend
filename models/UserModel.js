const mongoose=require('mongoose');
const Schema=mongoose.Schema

//creating user schema

let userSchema=new Schema( 
        { 
         id:{type:Number,
             primaryKey : true,
             autoIncrement:true,
             allowNull:false,
        },
        username:{type:String,
            allowNull:false,
            required:true
        
        },
        password:{
            type:String,
            allowNull:false,
            required:true
        },
        email:{
            type:String,
            allowNull:false,
            required:true

        },
        role:{
            type:String,
            default:'user',
            required:true

        },
        address:{
            type:String,
            allowNull:false,
            required:true

        },
        image:String
        });


     // creating table in mongodb table name User
    const User=mongoose.model('User',userSchema);
        module.exports=User;