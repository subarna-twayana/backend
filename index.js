"use strict";

//import express framework
const express = require('express');

const routeUser = require('./route/users')
const productRouter = require('./route/products')
const categoryRouter = require('./route/category')
const addtocartRouter = require('./route/addtocart')
const morgan = require('morgan')
//import bodyparser
const bodyParser = require('body-parser');
require('dotenv').config()
// import database
const mongoose=require('mongoose');
const upload=require('./controllers/ImageController');

//connect mongodb database


mongoose.connect(process.env.DB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
})
.then
(
    ()=>{console.log('database connected ' + process.env.DB)}
    )
    .catch(
        err=>{console.log('connection error');}
        );
        
        //var userController = require('./controllers/User_Controller.js')
        const app = express();
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended:true}))
        
        app.use(morgan("dev"))

        app.use(express.static(__dirname + "/public"))
//get method
//app.get("/clothes", function(req, res, next){
//console.log(req.params);
//console.log(req.query);
//req.testvar ={name:'subarna'}
//console.log('first name')
//next();
//});

//routing
//var clothRouter = express.Router();
//clothRouter.use(bodyParser.text);
//clothRouter.route('/').get();

///Routing
app.use('/users',routeUser)
app.use('/product',productRouter)
app.use('/category',categoryRouter)
app.use('/addtocart',addtocartRouter)
app.use('/upload',upload,(req,res)=>{
    res.send(req.file);

})


//server setup
app.listen(process.env.PORT, ()=>console.log("OK " +process.env.PORT));

//export of app to other page

module.exports=app;