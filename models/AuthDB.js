const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const AuthSchema = new Schema({
  Email: {type: String, unique: true},
  Username: {type:String,unique:true},
  Pass: {type: String,require: true},
  reg_time : {
            type : Date, default: Date.now
        }
})

const Auth = mongoose.model('auths', AuthSchema)

module.exports = Auth
//==============================================
