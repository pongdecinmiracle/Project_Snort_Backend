const express = require('express')
var moment = require('moment');
const cors = require('cors')
//Database 
const db = require('mongoose')
const test = require('../models/test')
// const Auth = require('../models/AuthDB')

//express for routing
const app = express.Router()

app.get('/',cors(), function(req, res,next) {
    test.aggregate([ 
        {$match : { $or : [{ proto : "ICMP", "sig_id" : "1000004"},{proto : "ICMP", "sig_id" : "1000005"}]}},
        {$group : { _id : "$sig_id" , total_packet: { $sum: 1}}}
        
    ],(err, docs) => {
        res.json(docs)
      })
  })

  app.get('/table1',cors(), function(req, res,next) {
    test.find({},(err, docs) => {
        res.json(docs)
      })
  })

module.exports = app
