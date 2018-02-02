const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testSchema = new Schema({
        name:String,
        email:String
})
const test = mongoose.model('test', testSchema)

module.exports = test

// mongoose.Promise = require('bluebird')

