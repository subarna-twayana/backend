var addtocart = require('../models/AddtoCart')
var bcrypt = require('bcryptjs');
var multer = require('multer');
var express =require('express');


var jwt = require('jsonwebtoken');
const app =express();
exports.newAddtoCart =(req, res, next)=> {
    console.log(req.body);
    console.log(req.user)
    const newAddtoCart = new addtocart({
        email:req.user.email,
        price:req.body.price,
        brand:req.body.brand,
        discount:req.body.discount,
        image: req.body.image

    })

    newAddtoCart.save().then(res.send("Product Sucessfully added"))
    .catch(err => console.log(err))
}
// exports.myaddtocart = (req, res, next) => {
//     addtocart.find().then(addtocart => {
//         res.send(addtocart)
//     }).catch(err => res.send(err))
// }

exports.viewMyAddtoCart=(req,res,next)=>{
    
    addtocart.find({email:req.user.email}).then(addtocart=>{
        console.log(addtocart);
        res.send(addtocart)
    }).catch(err=>res.send(err))
}

