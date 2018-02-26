var mongoose = require('mongoose');

var userProfileSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    email:{
        type: String,

    },
    date: {
        type: String,
    },
    img : {
        type:String
    },
    userId: {
        type: String
    }

},{collection:'userprofile'});

var userProfile =  module.exports = mongoose.model('userprofile', userProfileSchema);