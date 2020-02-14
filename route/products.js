const express = require('express');
const user = require('../controllers/ProductController')
const image = require('../controllers/ImageController')
const app = express.Router();

app.post('/addproduct',image,user.addProduct)

app.get('/showallproduct',user.showallProduct)

app.patch('/:_id',user.updateProduct)
app.get('/:_id',user.getProduct)
app.delete('/:_id',user.deleteProduct)

app.get('/category/:category',user.getProductByCategory)
// app.get('/:_id', user.oneProduct)
module.exports = app