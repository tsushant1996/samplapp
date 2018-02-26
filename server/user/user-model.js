var mongoose = require('mongoose');

// User Schema

var userSchema = mongoose.Schema({
    user_name: {
        type: String,
        index: true
    }
},{collection:'users'});



var user = module.exports = mongoose.model('users', userSchema);


