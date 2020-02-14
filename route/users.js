const express = require('express');
const user = require('../controllers/UserController')
const app = express.Router();
const image = require('../controllers/ImageController')
const auth=require('../controllers/AuthController');

app.post('/signup',image,user.hashGen,user.registration)
app.post('/login',user.login)
app.get('/me',auth.verfiyToken,user.me);
app.patch('/update/:id',image, user.update)
app.put('/delete/:id',image, user.delete)

//router.get("/me",auth.verifyUser,userController.me)

module.exports = app