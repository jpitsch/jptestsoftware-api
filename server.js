var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');

// ------------- Setup ------------- //
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://mtest:password@ds015398.mlab.com:15398/mtest_dev')

// ------------- ROUTES ------------- //
var index = require('./routes/index');
var admin = require('./routes/admin');

app.use('/api', index);
app.use('/api', admin);

// ------------- Server Startup ------------- //
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Server starting up on port: ' + port);