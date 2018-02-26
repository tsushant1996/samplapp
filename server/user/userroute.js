const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var user = require('./user-model');
const fileUpload = require('express-fileupload');
var userProfile = require('./user-profile-model');
var multer = require('multer');
const app = express();
// default options
app.use(fileUpload());

// Using `mongoose.connect`...
var promise = mongoose.connect('mongodb://sushant:sushant@ds119688.mlab.com:19688/nodeauth', {
  useMongoClient: true,
  /* other options */
});
// Or `createConnection`
var promise = mongoose.createConnection('mongodb://sushant:sushant@ds119688.mlab.com:19688/nodeauth', {
  useMongoClient: true,
  /* other options */
});

var MongoClient = require('mongodb').MongoClient;
var json = {};


var upload = multer({dest: './public/images/uploads/'});


//GET: TO GET ALL USERS
router.get('/getusers', function (req, res) {

    user.find({}, function (err, users) {
        if (err) {
            json.status = '0'
            json.result = { 'message': 'user not found' };
            res.send(json);
        } else {
            json.status = '1'
            json.result = { 'message': 'user Found successfully', 'users': users };
            res.send(json);
        }
    });
});

//For saving the Discusssion
router.post('/saveuserprofile',upload.single('avatar'),function (req, res) {
    var sub = req.body;

    var userObject = {
        'name': sub.fields.name,
        'email': sub.fields.email,
        'date': sub.fields.date,
        'img': sub.fields.file,
        'userId': sub.fields.userId
    };

    console.log('userObject',userObject);
    var userPro = new userProfile(userObject);
   

    userPro.save(function (err, user) {
        if (err) {
            json.status = '0;'
            json.result = { 'message': 'user not saved' };
            res.send(json);
        } else {
            json.status = '1';
            json.result = { 'message': 'user saved', 'user': user };
            res.send(json);
        }
    });
});


module.exports = router;