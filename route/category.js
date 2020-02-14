const express = require('express');
const user = require('../controllers/CategoryController')
const image = require('../controllers/ImageController')
const app = express.Router();

app.post('/addcategory',image,user.addCategory)
app.post('/updatecategory/:_id',image,user.updateCategory)
app.post('/deletecategory/:_id',image,user.deleteCategory)
app.post('/showallcategory',image,user.showallCategory)
app.post('/onecategory',image,user.oneCategory)
module.exports = app