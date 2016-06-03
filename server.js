var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');

// ------------- Setup ------------- //
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

mongoose.connect('mongodb://mtest:password@ds015398.mlab.com:15398/mtest_dev')

// ------------- ROUTES ------------- //
var index = require('./controllers/api/index.controller');
var admin = require('./controllers/api/admin.controller');
var test = require('./controllers/api/test.controller');

app.use('/api', index);
app.use('/api', admin);
app.use('/api', test);

// ------------- Server Startup ------------- //
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Server starting up on port: ' + port);