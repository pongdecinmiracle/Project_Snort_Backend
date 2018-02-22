const mongoose = require('mongoose')
const Schema = mongoose.Schema

const alert1Schema = new Schema({
        type : {type: String},
        src : {type: String},
        proto : {type: String},
        timestamp : {type: String},
        dst : {type: String},
        srcport : {type: String},
        sig_id : {type: String},
        msg : {type: String},
        dstport : {type: String},
        time : {type: String}
})
// const test = mongoose.model('tests', testSchema)
const test = mongoose.model('alert1', alert1Schema)

module.exports = test