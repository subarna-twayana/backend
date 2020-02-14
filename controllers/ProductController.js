var Product = require('../models/ProductModel')
var bcrypt = require('bcryptjs');
var multer = require('multer');
var express =require('express');

var jwt = require('jsonwebtoken');
const app =express();
exports.addProduct = (req, res, next)=> {
    // console.log(req.body);
    Product.create({
        title:req.body.title,
        gender:req.body.gender,
        price:req.body.price,
        brand:req.body.brand,
        discount:req.body.discount,
        image: req.file.filename,
        category:req.body.category
    })
    .then(function(result){
        res.status(201);
        res.json({
            status:201,
            message:"product is added",
            data:result
        })
    })
    .catch(function(err){
        res.send(err)
        // next(err);
    })
}

exports.getProduct = (req,res) => {
    Product.findById(req.params._id).then(prod=>res.send(prod))
}

exports.updateProduct =(req,res, next) =>{
    console.log(req.body);
    
    Product.findOneAndUpdate({_id: req.params._id},
        {
        title:req.body.title,
        gender:req.body.gender,
        price:req.body.price,
        brand:req.body.brand,
        discount:req.body.discount
    })
    .then(function(){
        res.status(201);
        res.json({
            status:201,
            message:"product is updated",
        })
    })
    .catch(function(err){
        console.log(err)
        next(err);
    })
}

exports.deleteProduct =(req, res, next) =>{
    Product.findOneAndDelete({ _id:req.params._id })
    .then(res.send("product is deleted"))
    .catch(err => res.send(err))
}

exports.showallProduct =(req, res, next)=> {
    Product.find()
    .then(product => {
        res.send(product)
    })
    .catch(err => res.send(err))
}

exports.oneProduct =(req, res, next)=> {
    Product.findOne({_id: req.params._id})
    .then(product =>res.send(product))
    .catch(err=>res.send(err))

}

exports.getProductByCategory = (req,res) => {
    Product.find({category: req.params.category}).then(
        category =>{
            res.send(category)
        }
    ).catch(err=>res.send(err))
}