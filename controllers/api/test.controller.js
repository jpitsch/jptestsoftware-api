var express = require('express');
var Test = require('./../../models/test');
var Question = require('./../../models/question');
var router = express.Router();

router.route('/test')
	
	.get(function(req, res) {
		Test.find(function(err, tests) {
			if (err)
				res.send(err);

			res.send(tests);
		});
	})

	.post(function(req, res) {

		var test = new Test(req.body);
		// console.log("Test Name: " + req.body.name);
		// console.log("Test Type: " + req.body.testType);
		// test.name = req.body.name;
		// test.testType = req.body.testType;
		// test.published = false;

		test.save(function(err) {
			//console.log("Error: " + err);
			if (err)
				res.send(err);

			console.log("Saved successfully.");
			res.json({message: 'Test successfully created.'});
		});
	});

router.route('/test/:id')
	.delete(function(req, res) {
		
		Test.remove({_id: req.params.id}, function(err, test) {
			if (err)
				res.send(err);

			res.json({message: 'Test successfully removed.'});
		});
		
	});


router.route('test/:id/question')
	.get(function(req, res) {

	})

	.put(function(req, res) {
		
		Test.findById(req.params.id, function(err, test) {

			if (err)
				res.send(err);

			var question = new Question();
			
			test.questions.push(question);
		});
	});


router.route('test/:id/question/:number')
	.get(function(req, res) {
		// Test.find({'_id': req.params.id, 'questions.number': req.params.number}, function(err, test) {

		// 	if (err)
		// 		res.send(err);

		// 	res.json(test);
		// });
	});

module.exports = router;