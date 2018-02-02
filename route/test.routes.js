const express = require('express')
var moment = require('moment');
//Database 
const mongoose = require('mongoose')
const test = require('../models/test')

//express for routing
const app = express.Router()


app.post('/',function(req,res){
	// var ApiAdd = new test({
    //     name : req.body.name,
    //     email : req.body.email
    //   })
    //   console.log(ApiAdd)
    //   ApiAdd.save(function (err, fluffy) {
    //             if (err) return console.error(err);
    //             else console.log("Save Success");
    //         });
    // console.log(req.body)
    
    var time = moment();
    var time_format = time.format('YYYY-MM-DD HH:mm:ss Z');
    console.log(time_format);
    }); 

module.exports = app


/* POST -- ADD
var ApiAdd = new test({
        name : req.body.name,
        email : req.body.email
      })
      console.log(ApiAdd)
      ApiAdd.save(function (err, fluffy) {
                if (err) return console.error(err);
                else console.log("Save Success");
            });
*/

/* POST -- FIND
test.find(function(err, docsNotFound){
        if(err) console.log(err)
        console.log(docsNotFound)
    });
*/