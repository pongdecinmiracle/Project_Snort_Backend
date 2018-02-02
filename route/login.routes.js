const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Auth = require('../models/AuthDB')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
//====================================================
const secret = require('./lib/secret')
//====================================================
const app = express.Router()

var Username
var Pass
var token

app.post('/',cors(), function(req, res,next) {
            
              // console.log("pass")
              // console.log(req.body)
              // res.json({
              //   success: true
              // })
              console.log(req.body.Username)
              console.log(req.body.Pass)
              Auth.findOne({ 
                Username: req.body.Username
              }, function(err, user) {
                  
                if (err) {throw err;
                console.log("fail")
                }
                if (!user) {
                  res.json({ success: false, message: 'Authentication failed. Email not found.' });
                  console.log("fail")
                } else if (user) {

                  
                  if (user.Pass != req.body.Pass) {
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                    console.log("fail")
                    }else{
                            
                            var profile = {
                                email: user.Username,
                                Pass: user.Pass
                                    };
                            var token = jwt.sign(profile, secret,{
                                expiresIn: '50m' // exp in 5 min
                                });

                              res.json({
                                  success: true,
                                  message: 'Enjoy your token!',
                                  token: token
                                  
                                });
                                console.log(token)
                                

                            }
                            // console.log("pass")
                        }
                        
                    })
                      
    })

    // app.get('/',function(res){
    //     res.send({
    //       success: true,
    //       message: 'Enjoy your token!'
    //     })
    // })

    
module.exports = app
