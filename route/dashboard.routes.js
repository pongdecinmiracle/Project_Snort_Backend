const express = require('express')
var moment = require('moment');
const cors = require('cors')
//Database 
const db = require('mongoose')

// const node1 = require('../models/node1')
// const node2 = require('../models/node2')
// const node3 = require('../models/node3')
const test = require('../models/test')
const Rule = require('../models/rule')
// const Auth = require('../models/AuthDB')

//express for routing
const app = express.Router()

app.get('/',cors(), function(req, res,next) {
    var a = []
    
    Rule.find({},function(err,docs){
        console.log(docs)
        res.json(docs)
    })

    // a = [
    //     { proto : "ICMP", "sig_id" : "1000004" },
    //     { proto : "ICMP", "sig_id" : "1000005" }
    // ]
    // test.aggregate([ 
    //     {$match : { $or : a}},
    //     {$group : { _id : "$sig_id" , total_packet: { $sum: 1}}}
        
    // ],(err, docs) => {
    //     res.json(docs)
    //   })
  })

  app.get('/table1',cors(), function(req, res,next) {
    test.find({},(err, docs) => {
        res.json(docs)
      })

//table node1
    //   node1.find({},(err, docs) => {
    //     res.json(docs)
    //   })
  })
  app.get('/table2',cors(), function(req, res,next) {
    test.find({},(err, docs) => {
        res.json(docs)
      })
//table node2
    //   node2.find({},(err, docs) => {
    //     res.json(docs)
    //   })
  })
  app.get('/table3',cors(), function(req, res,next) {
    test.find({},(err, docs) => {
        res.json(docs)
      })
//table node3
    //   node3.find({},(err, docs) => {
    //     res.json(docs)
    //   })
  })
  app.post('/chart',cors(), function(req, res,next) {
    // console.log(req.body)
    a = []
    a = req.body.rule
    // console.log(a)
    test.aggregate([ 
        {$match : { $or : a}},
        {$group : { _id : "$sig_id" , total_packet: { $sum: 1}}}
        
    ],(err, docs) => {
      if(err){
        console.log("err")
      }else{
        console.log(docs)
      }

      })
  })

module.exports = app


// var a = []
    
    // a = [
    //     { proto : "ICMP", "sig_id" : "1000004" },
    //     { proto : "ICMP", "sig_id" : "1000005" }
    // ]
    // test.aggregate([ 
    //     {$match : { $or : a}},
    //     {$group : { _id : "$sig_id" , total_packet: { $sum: 1}}}
        
    // ],(err, docs) => {
    //     res.json(docs)
    //   })