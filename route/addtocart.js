const express = require('express');
const AddtoCartController = require('../controllers/AddtoCartController');
const AuthController = require('../controllers/AuthController');
const image = require('../controllers/ImageController')
const app = express.Router();


app.get("/",(req,res,next)=>{
    res.send("products Route")
})

app.route('/cart')
.post(AuthController.verfiyToken,AddtoCartController.newAddtoCart);

app.get('/viewmycart',AuthController.,AddtoCartController.viewMyAddtoCart);


module.exports=app;

