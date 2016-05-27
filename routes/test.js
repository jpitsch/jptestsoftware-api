var express = require('express');
var Test = require('../app/models/test');
var router = express.Router();

router.route('/test')
	
	.get(function(req, res) {
		Test.find(function(err, tests) {
			if (err)
				res.send(err);

			res.send(tests);
		});
	})

	.put(function(req, res) {

	});

module.exports = router;