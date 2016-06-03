var express = require('express');
var router = express.Router();

//test route
router.get('/', function(req, res) {
    res.json({ message: 'Hooray! Welcome to our api!' });   
});

module.exports = router;