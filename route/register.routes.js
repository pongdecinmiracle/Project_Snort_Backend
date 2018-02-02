const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const app = express.Router()
  app.route('/')
    // .get((req, res) => {
    //   Auth.find({}, (err, docs) => {
    //     res.send(docs)
    //     console.log(docs)
    //   })
    // })
    .post((req, res) => {
      var newTrack = Auth(req.body)
      console.log(newTrack);
      // console.log(req.body)
      newTrack.save((err) => {
        if (err) res.json({ 
                  success: false, 
                  message: 'Insert Failed.' 
            });
        else res.json({ 
                  success: true, 
                  message: 'Insert Success.'
            });
      })
      // console.log(req.body)
    })

 
module.exports = app





















 // app.route('/:Email')
  // .get((req, res) => {
  //   Auth.findById(req.params.Name, (err, docs) => {
  //     res.send(docs)
  //   })
  // })
  // .put((req, res) => {
  //   Auth.findByIdAndUpdate(req.params.Email, req.body, (err) => {
  //     if (err) res.send('update error')
  //     else res.send('update success')
  //   })
  // })
  // .delete((req, res) => {
  //   Auth.findByIdAndRemove(req.params.Name, (err) => {
  //     if (err) res.send('delete error')
  //     else res.send('delete success')
  //   })
  // })