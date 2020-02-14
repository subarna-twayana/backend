var user = require('../models/UserModel.js')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


exports.hashGen = (req,res,next)=>{
    saltRounds = 10;
    console.log ('in has gen');
    bcrypt.hash(req.body.password,saltRounds)
    .then(function(hash){
        console.log(hash);
        req.userHash = hash;
        next();
    })
    .catch(function(err){
        next('has gen error')
    })
}

exports.registration = (req, res, next)=> {
    console.log(req.body);
    user.create({
        // model: req.body.name ->postman ko name
        username:req.body.username,
        password:req.userHash,
        email:req.body.email,
        address:req.body.address,
        image: req.body.image
    })
    .then(function(result){
        res.status(201);
        res.json({
            status:201,
            message:"you have registered successfully",
            data:result

        })
    })
    .catch(function(err){
        console.log(err)
        next(err);
    })
}

exports.login =(req, res, next)=>{
    console.log(req.body)
    user.findOne({
        email:req.body.email}, function(err,user){
            if(err){
                console.log(err);
            }else if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){

                    let token = jwt.sign({id:user._id},process.env.SECRET)
    
                    res.status(201).json({
                        status:"Login success!",
                        token:token,
                        id: user._id,
                        username: user.username,
                        password: user.password,
                        email: user.email,
                        address: user.address
                    });
                }
                else{res.json({status:"error", message:"invalid email/password!", data:null});}
            }
            else{
                console.log(err);
                res.status(404).json({
                    error:"Auth error"
                });
            }
        })
}


exports.me= async(req, res, next) =>
{
    user.findById(req.user.id).then(
        users=>res.status(200).json(users)
    ).catch(err => {
        res.status(400).json({
            status:"Failure",
            message:err
        });
    })
};

exports.delete =(req, res, next) =>{
    user.findById(req.params._id).then(user => {
        user.delete()
        .then(function(result){
            res.status(201).json({
                message:"user Deleted Successfully"
            });
        })
        .catch(function(e){
            console.log(e);
        });
    });
}


exports.update = (req, res, next) => {
    id = req.params.id;
    console.log(id)
    console.log(req.body)
    user.update(
      { _id: id },
      {
        $set: {
            username:req.body.username,
            address:req.body.address,
            image: req.body.image
        }
      }
    )
      .then(function (user) {
        console.log("User Updated:");
        res.status(201).json({                  
          message: "User Details Updated Successfully"
        });
      })
      .catch(function (e) {
        res.status(422).json({
          message: "Unable to Update:" + e
        });
      });
  }



// module.exports ={
//     hashGen,
//     registration,
//     login
    
// }