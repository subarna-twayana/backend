var Category = require('../models/CategoryModel')
var bcrypt = require('bcryptjs');
var multer = require('multer');
var express =require('express');

var jwt = require('jsonwebtoken');
const app =express();
exports.addCategory = (req, res, next)=> {
    console.log(req.body);
    Category.create({
        title:req.body.title,
        description:req.body.description,
        image: req.file.filename,
       
    })
    .then(function(result){
        res.status(201);
        res.json({
            status:201,
            message:"category is added",
            data:result
        })
    })
    .catch(function(err){
        console.log(err)
        next(err);
    })
}
exports.updateCategory =(req,res, next) =>{
    Category.findOneAndUpdate({_id:req.params.id},
        {
        title:req.body.title,
        description:req.body.description,
        image: req.file.filename
        
    })
    .then(function(result){
        res.status(201);
        res.json({
            status:201,
            message:"category is updated",
            data:result
        })
    })
    .catch(function(err){
        console.log(err)
        next(err);
    })
}

exports.deleteCategory =(req, res, next) =>{
    Category.findOneAndDelete({ _id:req.params.id })
    .then(res.send("category is deleted"))
    .catch(err => res.send(err))
}

exports.showallCategory=(req, res, next)=> {
    Category.find()
    .then(category => {
        res.send(category)
    })
    .catch(err => res.send(err))
}

exports.oneCategory =(req, res, next)=> {
    Category.findOne({_id: req.params.id})
    .then(category =>res.send(category))
    .catch(err=>res.send(err))

}
